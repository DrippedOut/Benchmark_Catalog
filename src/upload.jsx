import React, { useEffect, useState } from "react";
import { db } from "../configs";
import * as HUListing from "../configs/schema";
import HUDetails from "./shared/HUDetails";
import { eq } from "drizzle-orm";
import Service from "./shared/Service";
import { useSearchParams } from "react-router-dom";
// Components
import Header from "./components/Header";
import FieldRenderer from "./components/FieldRenderer";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import Footer from "./components/Footer";
import UploadImages from "./components/UploadImages";
import { BiLoaderAlt } from "react-icons/bi";
import { Store } from 'react-notifications-component';

function upload() {
	const [searchParams] = useSearchParams();
	const [HUinfo, setHUinfo] = useState();
	const [loader, setLoader] = useState(false);
	const [triggerUploadImages , setTriggerUploadImages] = useState();
	const [formData, setFormData] = useState({
		General: {},
		Tuner: {},
		USBMediaPlayback: {},
		Bluetooth_Handsfree: {},
		Bluetooth_Media: {},
		Bluetooth_Technology: {},
		Camera: {},
		VoiceRecognition: {},
		Carplay: {},
		AndroidAuto: {},
		Weblink: {},
		OtherConnections: {},
		GeneralSetting: {},
		DisplaySetting: {},
		SoundSetting: {},
		OtherFunctions: {},
		HighlightFunction: {},
  	});

	const mode = searchParams.get('mode');
	const recordId = searchParams.get('id');

	useEffect(() => {console.log('loader ', loader);}, [loader]);

	useEffect(() => {console.log(formData);}, [formData]); 

	useEffect(() => {if(mode == 'edit') GetHeadUnitDetail()},[]);

	const GetHeadUnitDetail = async () => {
		const result = await db.select().from(HUListing.General)
			.innerJoin(HUListing.Tuner,                eq(recordId, HUListing.Tuner.id))
			.innerJoin(HUListing.USBMediaPlayback,     eq(recordId, HUListing.USBMediaPlayback.id))
			.innerJoin(HUListing.Bluetooth_Handsfree,  eq(recordId, HUListing.Bluetooth_Handsfree.id))
			.innerJoin(HUListing.Bluetooth_Media,      eq(recordId, HUListing.Bluetooth_Media.id))
			.innerJoin(HUListing.Bluetooth_Technology, eq(recordId, HUListing.Bluetooth_Technology.id))
			.innerJoin(HUListing.Camera,               eq(recordId, HUListing.Camera.id))
			.innerJoin(HUListing.VoiceRecognition,     eq(recordId, HUListing.VoiceRecognition.id))
			.innerJoin(HUListing.Carplay,              eq(recordId, HUListing.Carplay.id))
			.innerJoin(HUListing.AndroidAuto,          eq(recordId, HUListing.AndroidAuto.id))
			.innerJoin(HUListing.Weblink,              eq(recordId, HUListing.Weblink.id))
			.innerJoin(HUListing.OtherConnections,     eq(recordId, HUListing.OtherConnections.id))
			.innerJoin(HUListing.GeneralSetting,       eq(recordId, HUListing.GeneralSetting.id))
			.innerJoin(HUListing.DisplaySetting,       eq(recordId, HUListing.DisplaySetting.id))
			.innerJoin(HUListing.SoundSetting,         eq(recordId, HUListing.SoundSetting.id))
			.innerJoin(HUListing.OtherFunctions,       eq(recordId, HUListing.OtherFunctions.id))
			.innerJoin(HUListing.HighlightFunction,    eq(recordId, HUListing.HighlightFunction.id))
			.leftJoin(HUListing.Media,                eq(recordId, HUListing.Media.HUListingId))
			.where(eq(recordId, HUListing.General.id));
			const resp=Service.FormatResult(result);
			setHUinfo(resp[0]);
	}

	const handleInputChange = (category, name, value) => {
		setFormData((prevData) => ({
		...prevData,
		[category]: {
			...prevData[category],
			[name]: value,
		},
		}));
	};

	// Helper function to wait for the loader to become false
	const loaderFalse = () => {
		return new Promise((resolve) => {
			const interval = setInterval(() => {
				if (!loader) {
					clearInterval(interval);
					resolve();
				}
			}, 1000); // Check every 1s
		});
	};

	const onSubmit = async (e) => {
		setLoader(true);
		e.preventDefault();
		console.log(formData);
		Store.addNotification({
			message: "Please wait...",
			type: "info",
			insert: "top",
			container: "top-right",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {duration: 5000, onScreen: true}
		  });

		if(mode === 'edit'){
			try {
				for (const category of Object.keys(formData)) {
					if (Object.keys(formData[category]).length > 0) {
						await db.update(HUListing?.[category])
							.set(formData[category])
							.where(eq(HUListing?.[category].id, recordId)) 
							.returning({id:HUListing.General.id});
							
						console.log(`${category} is updated`);
					}
				};
				setTriggerUploadImages(recordId);
				await loaderFalse();
				Store.addNotification({
					title: "Saved!",
					message: "The data has been updated successfully.",
					type: "Success",
					insert: "top",
					container: "top-right",
					animationIn: ["animate__animated", "animate__fadeIn"],
					animationOut: ["animate__animated", "animate__fadeOut"],
					dismiss: {duration: 5000, onScreen: true}
				});
			} catch (e) {
				console.log(e);
				Store.addNotification({
					title: "Error!",
					message: "Failed to upload data. Please try again",
					type: "warning",
					insert: "top",
					container: "top-right",
					animationIn: ["animate__animated", "animate__fadeIn"],
					animationOut: ["animate__animated", "animate__fadeOut"],
					dismiss: {duration: 5000, onScreen: true}
				});
			}
		} else {
			// Upload new head-unit info
			try {
				const resultIds = []; 
				for (const category of Object.keys(formData)) {
					const result = await db.insert(HUListing?.[category]).values(formData[category])
					.returning({id:HUListing.General.id});

					if (result && result[0]?.id) {
						resultIds.push(result[0].id);
					}
				}
				console.log("Data uploaded successfully");

				if (resultIds.length > 0) {
					console.log("Array of result IDs = ",resultIds);
					setTriggerUploadImages(resultIds[0]);
				}
				await loaderFalse();
				Store.addNotification({
					title: "Saved!",
					message: "The data has been uploaded successfully.",
					type: "Success",
					insert: "top",
					container: "top-right",
					animationIn: ["animate__animated", "animate__fadeIn"],
					animationOut: ["animate__animated", "animate__fadeOut"],
					dismiss: {duration: 5000, onScreen: true}
				});
				
			} catch (e) {
				console.log(e);
				Store.addNotification({
					title: "Error!",
					message: "Failed to upload data. Please try again.",
					type: "warning",
					insert: "top",
					container: "top-right",
					animationIn: ["animate__animated", "animate__fadeIn"],
					animationOut: ["animate__animated", "animate__fadeOut"],
					dismiss: {duration: 5000, onScreen: true}
				});
			}
		}
	}

	return (	
		<div>
			<Header />
			<div className="px-10 md:px-20 my-10">
				<div className="flex justify-between items-center mb-10">
					<h2 className="font-bold text-4xl">Upload New Head-Unit</h2>
				</div>
				<form className="p-10 border rounded-xl mt-10" onSubmit={onSubmit} >
					{/* Specs section */}
					<div className="px-10 md:px-20 my-10">
						<h2 className="font-bold text-4xl mb-10">Specs Sheet</h2>

						<h2 className="font-medium text-xl my-10">General</h2>
						<FieldRenderer HUinfo={HUinfo?.General} category={HUDetails.General} handleInputChange={(name, value) => handleInputChange('General', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">Tuner</h2>
						<FieldRenderer HUinfo={HUinfo?.Tuner} category={HUDetails.Tuner} handleInputChange={(name, value) => handleInputChange('Tuner', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">USB Media Playback</h2>
						<FieldRenderer HUinfo={HUinfo?.USBMediaPlayback} category={HUDetails.USBMediaPlayback} handleInputChange={(name, value) => handleInputChange('USBMediaPlayback', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">Bluetooth</h2>
						<h2 className="font-medium text-md my-6">Bluetooth Handsfree</h2>
						<FieldRenderer HUinfo={HUinfo?.Bluetooth_Handsfree} category={HUDetails.Bluetooth.Handsfree} handleInputChange={(name, value) => handleInputChange('Bluetooth_Handsfree', name, value)}/>
						<h2 className="font-medium text-md my-6">Bluetooth Media</h2>
						<FieldRenderer HUinfo={HUinfo?.Bluetooth_Media} category={HUDetails.Bluetooth.Media} handleInputChange={(name, value) => handleInputChange('Bluetooth_Media', name, value)}/>
						<h2 className="font-medium text-md my-10">Bluetooth Technology</h2>
						<FieldRenderer HUinfo={HUinfo?.Bluetooth_Technology} category={HUDetails.Bluetooth.Technology} handleInputChange={(name, value) => handleInputChange('Bluetooth_Technology', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">Camera</h2>
						<FieldRenderer HUinfo={HUinfo?.Camera} category={HUDetails.Camera} handleInputChange={(name, value) => handleInputChange('Camera', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">Voice Recognition</h2>
						<FieldRenderer HUinfo={HUinfo?.VoiceRecognition} category={HUDetails.VoiceRecognition} handleInputChange={(name, value) => handleInputChange('VoiceRecognition', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">Apple Carplay</h2>
						<FieldRenderer HUinfo={HUinfo?.Carplay} category={HUDetails.Carplay} handleInputChange={(name, value) => handleInputChange('Carplay', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">Android Auto</h2>
						<FieldRenderer HUinfo={HUinfo?.AndroidAuto} category={HUDetails.AndroidAuto} handleInputChange={(name, value) => handleInputChange('AndroidAuto', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">Weblink</h2>
						<FieldRenderer HUinfo={HUinfo?.Weblink} category={HUDetails.Weblink} handleInputChange={(name, value) => handleInputChange('Weblink', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">Other Connections</h2>
						<FieldRenderer HUinfo={HUinfo?.OtherConnections} category={HUDetails.OtherConnections} handleInputChange={(name, value) => handleInputChange('OtherConnections', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">General Setting</h2>
						<FieldRenderer HUinfo={HUinfo?.GeneralSetting} category={HUDetails.GeneralSetting} handleInputChange={(name, value) => handleInputChange('GeneralSetting', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">Display Setting</h2>
						<FieldRenderer HUinfo={HUinfo?.DisplaySetting} category={HUDetails.DisplaySetting} handleInputChange={(name, value) => handleInputChange('DisplaySetting', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">Sound Setting</h2>
						<FieldRenderer HUinfo={HUinfo?.SoundSetting} category={HUDetails.SoundSetting} handleInputChange={(name, value) => handleInputChange('SoundSetting', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">Other Functions</h2>
						<FieldRenderer HUinfo={HUinfo?.OtherFunctions} category={HUDetails.OtherFunctions} handleInputChange={(name, value) => handleInputChange('OtherFunctions', name, value)}/>

						<Separator className='my-12' />

						<h2 className="font-medium text-xl my-10">Highlight Functions</h2>
						<FieldRenderer HUinfo={HUinfo?.HighlightFunction} category={HUDetails.HighlightFunction} handleInputChange={(name, value) => handleInputChange('HighlightFunction', name, value)}/>

						<Separator className='my-12' />

						{/* Media upload */}
						<UploadImages HUimages={HUinfo?.images} triggerUploadImages={triggerUploadImages} setLoader={(v)=>setLoader(v)}/>
					</div>
					
					<div className="mt-10 flex justify-end">
						<Button disabled={loader} type="submit">
							{loader 
							? <BiLoaderAlt className="animate-spin text-lg" /> 
							: 'SUBMIT'}
						</Button>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}
export default upload;