import { Media } from "./../../configs/schema";
import { storage } from "./../../configs/firebaseConfig";
import { getDownloadURL , ref , uploadBytes , deleteObject } from "firebase/storage";
import { React , useEffect, useState } from "react";
import { db } from "../../configs/index";
import { eq } from "drizzle-orm";

import { IoMdCloseCircle } from "react-icons/io";

function UploadImages({ triggerUploadImages, setLoader, HUinfo }) {
	const [selectedFileList, setSelectedFileList] = useState([]);
	const [existingImages, setExistingImages] = useState([]); // To store existing images from HUinfo
	const [removedImages, setRemovedImages] = useState([]); // Store removed images

	// Display existing media of the record that is being editted
	useEffect(() => {
		if (HUinfo && HUinfo.length > 0) {
			setExistingImages(HUinfo);
		}
	}, [HUinfo]);

	useEffect(()=>{
		if(triggerUploadImages){
			console.log(triggerUploadImages)
			UploadImageToServer();
		}
	},[triggerUploadImages])
  
	const onFileSelected = (event) => {
		const files = event.target.files;
		setSelectedFileList((prev) => [...prev, ...files]); // Avoids duplicates
	};

	const onImageRemove=(image, fromExisting)=>{
		if (fromExisting) {
			setExistingImages((prev) => prev.filter((item) => item !== image));
			setRemovedImages((prev) => [...prev, image]); // Add to removed images
		} else {
			setSelectedFileList((prev) => prev.filter((item) => item !== image));
		}
	}

	const getFilePath = (imageURL) => {
		const decodedURL = decodeURIComponent(imageURL); // Decode the URL to make it readable (since it's URL-encoded)
		const pathMatch = decodedURL.match(/\/o\/(.*?)\?/); // Extract the part after '/o/' and before '?'
		
		return pathMatch && pathMatch[1] ? pathMatch[1].replace(/%2F/g, '/') : null;
	};

	const UploadImageToServer = async () => {
		setLoader(true);
		try {
			// Upload new images
			if (selectedFileList.length > 0) {

				console.log("Uploading new images:", selectedFileList);

				const uploadPromises = selectedFileList.map((file) => {
					const fileName = `${Date.now()}.jpeg`;
					const storageRef = ref(storage, 'benchmarkCatalog-media/' + fileName);
					const metaData={contentType:'image/jpeg'}

					return uploadBytes(storageRef, file, metaData)
						.then(() => getDownloadURL(storageRef))
						.then((downloadUrl) => {
							return db.insert(Media).values({
								imageURL: downloadUrl,
								HUListingId: triggerUploadImages
							}).then(() => {
								setExistingImages((prev) => [
									...prev,
									{ imageURL: downloadUrl }
								]);
							});
						});
				});
				await Promise.all(uploadPromises);
				console.log('Images uploaded successfully')
				setSelectedFileList([]); // Clear selected files after upload
			}

			// Delete removed images
			for (const image of removedImages) {
				const filePath = getFilePath(image.imageURL);
				if (filePath) {
					await deleteObject(ref(storage, filePath));
					await db.delete(Media).where(eq(Media.imageURL, image.imageURL)); 
					console.log("Removed from Firebase:" , filePath, '\n \n', "Removed from DB",  image.imageURL);
				}
			}
			setRemovedImages([]); // Clear removed images after deletion
		} catch (error) {
			console.error("Error uploading/deleting images:", error);
		} finally {
			setLoader(false); // Ensure loader is stopped
		}
	};

	return (
		<div className="shadow-md rounded-xl p-10 my-8 border">
			<h2 className="font-medium text-xl mb-10">Upload images & videos</h2>
      		<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

				{/* Display existing images */}
				{existingImages.map((image, index) => (
					<div key={index} className="relative">
						<IoMdCloseCircle className="absolute m-2 text-lg text-gray-300 hover:text-black" onClick={() => onImageRemove(image, index, true)} />
						<img src={image.imageURL} className="w-full h-[130px] shadow-md object-cover rounded-xl"/>
					</div>
				))}

				{/* Display selected images */}
				{selectedFileList.map((image,index)=>(
					<div key={index}>
						<IoMdCloseCircle className="absolute m-2 text-lg text-gray-300 hover:text-black" onClick={()=>onImageRemove(image, index, false)}/>
						<img src={URL.createObjectURL(image)} className='w-full h-[130px] shadow-md object-cover rounded-xl' />
					</div>
				))}

				<label htmlFor="upload-images" className="border-[#01A981]">
					<div className="cursor-pointer hover:shadow-md border rounded-xl border-dotted border-[#01A981] bg-[#01A981]/20 p-10">
						<h2 className="text-lg text-center text-[#01A981]">+</h2>
					</div>

					<input type="file" multiple id="upload-images" onChange={onFileSelected} className="opacity-0" />
				</label>
			</div>
		</div>
	);
}

export default UploadImages;
