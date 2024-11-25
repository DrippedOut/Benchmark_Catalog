import { Media } from "./../../configs/schema";
import { storage } from "./../../configs/firebaseConfig";
import { getDownloadURL , ref , uploadBytes , deleteObject } from "firebase/storage";
import { React , useEffect, useState } from "react";
import { db } from "../../configs/index";
import { eq } from "drizzle-orm";
import { IoMdCloseCircle } from "react-icons/io";

function UploadImages({ triggerUploadImages, setLoader, HUimages }) {
	const [selectedImages, setSelectedImages] = useState([]); 	// Store images for Submission
	const [existingImages, setExistingImages] = useState([]); 	// Store existing images from HUinfo
	const [removedImages,  setRemovedImages]  = useState([]);	// Store images for deletion

	// Display existing media of the record that is being editted
	useEffect(() => {
		if (HUimages && HUimages.length > 0) setExistingImages(HUimages);
	}, [HUimages]);

	// Listens for Upload trigger from Upload.jsx
	useEffect(()=>{
		if (triggerUploadImages) UploadImageToServer();
	},[triggerUploadImages])
  
	// Add Image to SelectedImages
	const onImageSelected = (event) => {
		const files = Array.from(event.target.files);
		setSelectedImages((prev) => {
			// Filter out duplicate files
			const newFiles = files.filter((file) => 
				!prev.some((prevFile) => 
					prevFile.name === file.name && prevFile.size === file.size)
			);
			return [...prev, ...newFiles];
		});
	};

	const onImageRemove = (image, fromExisting)=>{
		// Prep existing image for deletion from DB
		if (fromExisting) {
			// Filters out 'image' from ExistingImages
			setExistingImages((prev) => 
				// Only take prev's items that do not match with 'image'
				prev.filter((item) => item.name !== image.name || item.size !== image.size));
			// Add 'image' to RemovedImages
			setRemovedImages((prev) => [...prev, image]);
		// Remove image from SelectedFile
		} else {
			setSelectedImages((prev) => 
				// Only take prev's items that do not match with 'image'
				prev.filter((item) => item.name !== image.name || item.size !== image.size));
		}
	}

	const UploadImageToServer = async () => {
		setLoader(true);
		try {
			// Upload new images
			if (selectedImages.length > 0) {
				console.log("Uploading new images:", selectedImages);
				const uploadPromises = selectedImages.map((file) => {
					const fileName = `${Date.now()}.jpeg`;
					const storageRef = ref(storage, 'benchmarkCatalog-media/' + fileName);
					const metaData={contentType:'image/jpeg'}

					return uploadBytes(storageRef, file, metaData)
						.then(() => getDownloadURL(storageRef))
						.then((downloadUrl) => {
							return db.insert(Media).values({imageURL: downloadUrl, HUListingId: triggerUploadImages})
							.then(() => {
								setExistingImages((prev) => [
									...prev,
									{ imageURL: downloadUrl }
								]);
							});
						});
				});
				await Promise.all(uploadPromises);
				console.log('Images uploaded successfully')
				setSelectedImages([]); // Clear selected files after upload
			}
			// Delete removed images from DB, if any.
			for (const image of removedImages) {
				const filePath = image.imageURL;
				if (filePath) {
					try {
						// Delete Firebase files
						await deleteObject(ref(storage, filePath));
						console.log("Removed from Firebase:", filePath);
						// Delete DB entries
						await db.delete(Media).where(eq(Media.imageURL, filePath));
						console.log("Removed from DB:", filePath);
					} catch (e) {
						console.log(e);
					}
				}
			}
			setRemovedImages([]); 
		} catch (e) {
			console.log(e);
		} finally {
			setLoader(false); 
		}
	};

	const DisplayExistingImages = () => {
		{existingImages.map((image, index) => (
			image.imageURL.endsWith('.mp4') ? 
				(
					<div key={index} className="relative">
						<IoMdCloseCircle className="absolute m-2 text-lg text-gray-300 hover:text-black" onClick={() => onImageRemove(image, true)} />
						<img src={image.imageURL} className="w-full h-[130px] shadow-md object-cover rounded-xl"/>
					</div>
				) 
				: (
					<div key={index} className="relative">
						<IoMdCloseCircle className="absolute m-2 text-lg text-gray-300 hover:text-black" onClick={() => onImageRemove(image, true)} />
						<video src={image.imageURL} autoPlay muted className="object-contain h-full w-full rounded-2xl animate__animated animate__fadeIn" />
					</div>
				)
		))}
	};


	return (
		<div className="shadow-md rounded-xl p-10 my-8 border">
			<h2 className="font-medium text-xl mb-10">Upload images & videos</h2>
      		<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
				{DisplayExistingImages()}

				{/* Display selected images */}
				{selectedImages.map((image,index)=>(
					<div key={index}>
						<IoMdCloseCircle className="absolute m-2 text-lg text-gray-300 hover:text-black" onClick={()=>onImageRemove(image, false)}/>
						<img src={URL.createObjectURL(image)} className='w-full h-[130px] shadow-md object-cover rounded-xl' />
					</div>
				))}

				{/* File Upload Component */}
				<label htmlFor="upload-images" className="border-[#01A981]">
					<div className="cursor-pointer hover:shadow-md border rounded-xl border-dotted border-[#01A981] bg-[#01A981]/20 p-10">
						<h2 className="text-lg text-center text-[#01A981]">+</h2>
					</div>
					<input type="file" multiple id="upload-images" onChange={onImageSelected} className="opacity-0" />
				</label>
			</div>
		</div>
	);
}

export default UploadImages;
