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

function Specs() {
	const {id}=useParams();
	const [HUDetail, setHUDetail]=useState();
	const navigate = useNavigate();

	useEffect(()=>{
		GetHeadUnitDetail();
	},[])

	const GetHeadUnitDetail=async ()=>{
		const result=await db.select().from(HUListing.General)
		.leftJoin(HUListing.Tuner,                eq(HUListing.General.id, HUListing.Tuner.id))
		.leftJoin(HUListing.USBMediaPlayback,     eq(HUListing.General.id, HUListing.USBMediaPlayback.id))
		.leftJoin(HUListing.Bluetooth_Handsfree,  eq(HUListing.General.id, HUListing.Bluetooth_Handsfree.id))
		.leftJoin(HUListing.Bluetooth_Media,      eq(HUListing.General.id, HUListing.Bluetooth_Media.id))
		.leftJoin(HUListing.Bluetooth_Technology, eq(HUListing.General.id, HUListing.Bluetooth_Technology.id))
		.leftJoin(HUListing.Camera,               eq(HUListing.General.id, HUListing.Camera.id))
		.leftJoin(HUListing.VoiceRecognition,     eq(HUListing.General.id, HUListing.VoiceRecognition.id))
		.leftJoin(HUListing.Carplay,              eq(HUListing.General.id, HUListing.Carplay.id))
		.leftJoin(HUListing.AndroidAuto,          eq(HUListing.General.id, HUListing.AndroidAuto.id))
		.leftJoin(HUListing.Weblink,              eq(HUListing.General.id, HUListing.Weblink.id))
		.leftJoin(HUListing.OtherConnections,     eq(HUListing.General.id, HUListing.OtherConnections.id))
		.leftJoin(HUListing.GeneralSetting,       eq(HUListing.General.id, HUListing.GeneralSetting.id))
		.leftJoin(HUListing.DisplaySetting,       eq(HUListing.General.id, HUListing.DisplaySetting.id))
		.leftJoin(HUListing.SoundSetting,         eq(HUListing.General.id, HUListing.SoundSetting.id))
		.leftJoin(HUListing.OtherFunctions,       eq(HUListing.General.id, HUListing.OtherFunctions.id))
		.leftJoin(HUListing.HighlightFunction,    eq(HUListing.General.id, HUListing.HighlightFunction.id))
		.leftJoin(HUListing.Media,                eq(HUListing.General.id, HUListing.Media.HUListingId))
		.where(eq(HUListing.General.id,id));

		const resp=Service.FormatResult(result);
		const filteredArray = resp.filter(Boolean);
		setHUDetail(filteredArray[0]);
	}

	const getFilePath = (imageURL) => {
		const decodedURL = decodeURIComponent(imageURL); // Decode the URL to make it readable (since it's URL-encoded)
		const pathMatch = decodedURL.match(/\/o\/(.*?)\?/); // Extract the part after '/o/' and before '?'
		return pathMatch && pathMatch[1] ? pathMatch[1].replace(/%2F/g, '/') : null;
	};

	const handleDelete = async () => {
		console.log("Handling delete")
		try {
			console.log("Entered 'try' block")
			await db.transaction(async (trx) => {
				console.log("delete as transaction begins")
				await trx.delete().from(HUListing.General)				.where(eq(HUListing.General.id, id));
				await trx.delete().from(HUListing.Tuner)				.where(eq(HUListing.Tuner.id, id));
				await trx.delete().from(HUListing.USBMediaPlayback)		.where(eq(HUListing.USBMediaPlayback.id, id));
				await trx.delete().from(HUListing.Bluetooth_Handsfree)	.where(eq(HUListing.Bluetooth_Handsfree.id, id));
				await trx.delete().from(HUListing.Bluetooth_Media)		.where(eq(HUListing.Bluetooth_Media.id, id));
				await trx.delete().from(HUListing.Bluetooth_Technology)	.where(eq(HUListing.Bluetooth_Technology.id, id));
				await trx.delete().from(HUListing.Camera)				.where(eq(HUListing.Camera.id, id));
				await trx.delete().from(HUListing.VoiceRecognition)		.where(eq(HUListing.VoiceRecognition.id, id));
				await trx.delete().from(HUListing.Carplay)				.where(eq(HUListing.Carplay.id, id));
				await trx.delete().from(HUListing.AndroidAuto)			.where(eq(HUListing.AndroidAuto.id, id));
				await trx.delete().from(HUListing.Weblink)				.where(eq(HUListing.Weblink.id, id));
				await trx.delete().from(HUListing.OtherConnections)		.where(eq(HUListing.OtherConnections.id, id));
				await trx.delete().from(HUListing.GeneralSetting)		.where(eq(HUListing.GeneralSetting.id, id));
				await trx.delete().from(HUListing.DisplaySetting)		.where(eq(HUListing.DisplaySetting.id, id));
				await trx.delete().from(HUListing.SoundSetting)			.where(eq(HUListing.SoundSetting.id, id));
				await trx.delete().from(HUListing.OtherFunctions)		.where(eq(HUListing.OtherFunctions.id, id));
				await trx.delete().from(HUListing.HighlightFunction)	.where(eq(HUListing.HighlightFunction.id, id));
				for (const image of HUDetail.images) {const filePath = getFilePath(image.imageURL);
					if (filePath) {await deleteObject(ref(storage, filePath)); 
						console.log("Removed from Firebase:" , filePath);}
				}
				await trx.delete().from(HUListing.Media)				.where(eq(Media.HUListingId, id)); 
			});
		  console.log("All related entries deleted successfully.");
		  navigate("/");
		} catch (error) {
		  console.error("Error deleting entries:", error);
		  //alert("Failed to delete the head unit. Please try again.");
		}
	  };
	  
	return (
		<div>
			<Header />
				<div className="px-5 md:px-20 my-10">
					<div className="flex justify-between">
						<h2 className="text-4xl font-bold">{HUDetail?.General?.manufacturer} {HUDetail?.General?.model}</h2>
						<Link to={'/Upload?mode=edit&id=' + HUDetail?.General?.id}><Button variant="utility">Edit</Button></Link>
						{/* Delete button */}
						<Button variant="delete" onClick={handleDelete}>Delete</Button>
					</div>
					<div className="md:px-16">
						<SlideShow img={HUDetail?.images} />
						<SpecTable HUDetail={HUDetail} />
					</div>
				</div>
			<Footer />
		</div>
	);
}

export default Specs;
