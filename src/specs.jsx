import {React,useEffect,useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as HUListing from "./../configs/schema";
import Service from "./shared/Service";
import { db } from "./../configs/index";
import { eq } from "drizzle-orm";
import SlideShow from "./components/specs/SlideShow";
import SpecTable from "./components/specs/SpecTable";
import { Button } from "./components/ui/button";
import { BiLoaderAlt } from "react-icons/bi";
import { Store } from 'react-notifications-component';
import { useAuth } from "@clerk/clerk-react";
import { storage } from "./../configs/firebaseConfig";
import { ref, deleteObject } from "firebase/storage";

function Specs() {
	const {id} = useParams();
	const [HUDetail, setHUDetail] = useState();
	const navigate = useNavigate();
	const [loader, setLoader] = useState(false);
	const { orgRole , orgSlug } = useAuth();

	useEffect(()=>{
		GetHeadUnitDetail();
		window.scrollTo(0, 0);
	},[])

	const GetHeadUnitDetail=async ()=>{
		const result=await db.select().from(HUListing.General)
		.leftJoin(HUListing.Tuner,                eq(id, HUListing.Tuner.id))
		.leftJoin(HUListing.USBMediaPlayback,     eq(id, HUListing.USBMediaPlayback.id))
		.leftJoin(HUListing.Bluetooth_Handsfree,  eq(id, HUListing.Bluetooth_Handsfree.id))
		.leftJoin(HUListing.Bluetooth_Media,      eq(id, HUListing.Bluetooth_Media.id))
		.leftJoin(HUListing.Bluetooth_Technology, eq(id, HUListing.Bluetooth_Technology.id))
		.leftJoin(HUListing.Camera,               eq(id, HUListing.Camera.id))
		.leftJoin(HUListing.VoiceRecognition,     eq(id, HUListing.VoiceRecognition.id))
		.leftJoin(HUListing.Carplay,              eq(id, HUListing.Carplay.id))
		.leftJoin(HUListing.AndroidAuto,          eq(id, HUListing.AndroidAuto.id))
		.leftJoin(HUListing.Weblink,              eq(id, HUListing.Weblink.id))
		.leftJoin(HUListing.OtherConnections,     eq(id, HUListing.OtherConnections.id))
		.leftJoin(HUListing.GeneralSetting,       eq(id, HUListing.GeneralSetting.id))
		.leftJoin(HUListing.DisplaySetting,       eq(id, HUListing.DisplaySetting.id))
		.leftJoin(HUListing.SoundSetting,         eq(id, HUListing.SoundSetting.id))
		.leftJoin(HUListing.OtherFunctions,       eq(id, HUListing.OtherFunctions.id))
		.leftJoin(HUListing.HighlightFunction,    eq(id, HUListing.HighlightFunction.id))
		.leftJoin(HUListing.Media,                eq(id, HUListing.Media.HUListingId))
		.where(eq(id, HUListing.General.id));

		const resp=Service.FormatResult(result);
		const filteredArray = resp.filter(Boolean);
		setHUDetail(filteredArray[0]);
	}

	const deleteFBdata = async () => {
		if (HUDetail?.images) {
			for (const image of HUDetail.images) {
				const filePath = image.imageURL;
				if (filePath) {
					try {
						await deleteObject(ref(storage, filePath));
						console.log("Removed from Firebase:", filePath);
					} catch (error) {
						console.log(error);
					}
				}
			}
		}
	}

	const handleDelete = async () => {
		const isConfirmed = window.confirm("Are you sure you want to delete this data? This action cannot be undone.");
		if (isConfirmed) {
			setLoader(true);
			Store.addNotification({
				title: "Please Wait...",
				message: "The headunit data is being deleted.",
				type: "info",
				insert: "top",
				container: "top-right",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
				dismiss: {duration: 5000, onScreen: true}
			});
			try {
				// Deleting Images from Firebase
				deleteFBdata();
				
				console.log("Deleting entries");
				await db.delete(HUListing.Media)			 	.where(eq(HUListing.Media.HUListingId, id));
				await db.delete(HUListing.General)				.where(eq(HUListing.General.id, id));
				await db.delete(HUListing.Tuner)				.where(eq(HUListing.Tuner.id, id));
				await db.delete(HUListing.USBMediaPlayback)		.where(eq(HUListing.USBMediaPlayback.id, id));
				await db.delete(HUListing.Bluetooth_Handsfree)	.where(eq(HUListing.Bluetooth_Handsfree.id, id));
				await db.delete(HUListing.Bluetooth_Media)		.where(eq(HUListing.Bluetooth_Media.id, id));
				await db.delete(HUListing.Bluetooth_Technology)	.where(eq(HUListing.Bluetooth_Technology.id, id));
				await db.delete(HUListing.Camera)			 	.where(eq(HUListing.Camera.id, id));
				await db.delete(HUListing.VoiceRecognition)  	.where(eq(HUListing.VoiceRecognition.id, id));
				await db.delete(HUListing.Carplay)			 	.where(eq(HUListing.Carplay.id, id));
				await db.delete(HUListing.AndroidAuto)		 	.where(eq(HUListing.AndroidAuto.id, id));
				await db.delete(HUListing.Weblink)			 	.where(eq(HUListing.Weblink.id, id));
				await db.delete(HUListing.OtherConnections)	 	.where(eq(HUListing.OtherConnections.id, id));
				await db.delete(HUListing.GeneralSetting)  	 	.where(eq(HUListing.GeneralSetting.id, id));
				await db.delete(HUListing.DisplaySetting) 	 	.where(eq(HUListing.DisplaySetting.id, id));
				await db.delete(HUListing.SoundSetting)		 	.where(eq(HUListing.SoundSetting.id, id));
				await db.delete(HUListing.OtherFunctions)    	.where(eq(HUListing.OtherFunctions.id, id));
				await db.delete(HUListing.HighlightFunction) 	.where(eq(HUListing.HighlightFunction.id, id));

				console.log("All entries deleted");

				
				navigate("/");
			} catch (error) {
				console.log(error);
				alert("Failed to delete the head unit. Please try again.");
			} finally {
				setLoader(false);
			}
		} else {
			console.log("Deletion cancelled")
		}
	};
	  
	return (
		<div>
			<Header />
				<div className="px-5 md:px-20 my-10">
					<div className="flex justify-between">
						<h2 className="text-4xl font-bold">{HUDetail?.General?.manufacturer} {HUDetail?.General?.model}</h2>
						{orgRole === "org:admin" && orgSlug === 'software' && (
							<div className="flex gap-4">
								<Link to={'/Upload?mode=edit&id=' + HUDetail?.General?.id}><Button variant="utility" >EDIT</Button></Link>
								<Button variant="delete" onClick={handleDelete} disabled={loader}>
									{loader 
									? <BiLoaderAlt className="animate-spin text-lg" /> 
									: 'DELETE'}
								</Button>
							</div>
						)}
					</div>
					<div className="md:px-16">
					 	<div className="my-12 relative group w-full h-[700px] border rounded-xl bg-black">
							<SlideShow img={HUDetail?.images} />
						</div>
						<SpecTable HUDetail={HUDetail} />
					</div>
				</div>
			<Footer />
		</div>
	);
}

export default Specs;
