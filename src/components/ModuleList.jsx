import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ModuleCard from "./ModuleCard";
import { db } from "./../../configs/index";
import * as HUListing from "./../../configs/schema";
import { desc, eq } from "drizzle-orm";
import Service from "@/shared/Service";

function ModuleList( { searchTerm, filterData, compareItem } ) {
	const [listings, setListings] = useState([]);
	const [filteredListings, setFilteredListings] = useState([]);
	const [loading, setLoading] = useState(true);

	console.log(filteredListings)

	// Fetch listings on component mount
	useEffect(() => {getListing();}, []);

	// Apply filter when searchTerm, filterData, or render changes
	useEffect(() => {
		const filtered = filterList();
		setFilteredListings(filtered);
	}, [listings, searchTerm, filterData]);

	const getListing = async () => {
		try {
			const result = await db.select().from(HUListing.General)
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
			.orderBy(desc(HUListing.General.id));

			const resp = Service.FormatResult(result)
			console.log(resp);
			setListings(resp);
			setLoading(false);    
		} catch (e) {
			console.error("Error fetching listing: ", e);
			setLoading(false);
		}
	};

	const filterList = () => {		
		return listings.filter(item => {
			const HU_segment = item?.General?.carSegment || '';
			const HU_manufacturer = item?.General?.manufacturer || '';
			const HU_year = parseInt(item?.General?.year) || 0;
			const HU_screenSize = parseFloat(item?.General?.displaySize) || 0;
	  
			const segment = filterData?.segment || '';
			const manufacturer = filterData?.manufacturer || [];
			const yearFrom = filterData?.yearFrom || 0;
			const yearTo = filterData?.yearTo || Infinity;
			const screenSizeFrom = filterData?.displaySizeFrom || 0;
			const screenSizeTo = filterData?.displaySizeTo || Infinity;
	  
			// Filtering conditions
			const segmentMatch = segment ? HU_segment.includes(segment) : true;
			const manufacturerMatch = manufacturer.length > 0 ? manufacturer.includes(HU_manufacturer) : true;
			const yearMatch = HU_year >= yearFrom && HU_year <= yearTo;
			const screenSizeMatch = HU_screenSize >= screenSizeFrom && HU_screenSize <= screenSizeTo;
	  
			// Search term match for model and manufacturer
			const modelMatch = item?.General?.model?.toLowerCase().includes(searchTerm.toLowerCase());
			const manufacturerMatchSearch = HU_manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
	  
			return (
			  segmentMatch &&
			  manufacturerMatch &&
			  yearMatch &&
			  screenSizeMatch &&
			  (modelMatch || manufacturerMatchSearch)
			);
		  });
	}
	return (
		<div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 p-6">
			{loading ? (
				<div className="flex justify-center col-span-3 my-[300px] items-center">
  					<AiOutlineLoading3Quarters className="animate-spin text-5xl text-[#01A981]" />
				</div>
			) : (
				filteredListings.map((item, index) => (
						<div key={index}>
							<ModuleCard headunit={item} compareItem={compareItem}/>
						</div>
					))
				)
			}
		</div>
  	);
}

export default ModuleList;
