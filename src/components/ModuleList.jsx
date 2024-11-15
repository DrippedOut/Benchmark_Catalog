import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ModuleCard from "./ModuleCard";
import { db } from "./../../configs/index";
import * as HUListing from "./../../configs/schema";
import { desc, eq } from "drizzle-orm";
import Service from "@/shared/Service";

function ModuleList( { searchTerm , filterData, compare} ) {
	const [listings, setListings] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getListing();
	}, [searchTerm, filterData]);

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

	const filterList = (listings) => {
		if (!searchTerm && !filterData) return listings;

		// Filter using filterData
		if (filterData && (filterData.segment || filterData.manufacturer?.length || filterData.yearFrom || 
			filterData.yearTo || filterData.screenSizeFrom || filterData.screenSizeTo)) return listings.filter(item => {
			// HU Data mapped to variables
			const HU_segment = item?.General?.carSegment || '';
			const HU_manufacturer = item?.General?.manufacturer || '';
			const HU_year = parseInt(item?.General?.year) || 0;
			const HU_screenSize = parseFloat(item?.General?.displaySize) || 0;

			// filterData destructuring with defaults
			const segment = filterData?.segment || "";
			const manufacturer = filterData?.manufacturer || [];
			const yearFrom = filterData?.yearFrom || 0;
			const yearTo = filterData?.yearTo || Infinity;
			const screenSizeFrom = filterData?.screenSizeFrom || 0;
			const screenSizeTo = filterData?.screenSizeTo || Infinity;
			
			// Filtering conditions
			const segmentMatch = segment ? HU_segment.includes(segment) : true;
			const manufacturerMatch = (manufacturer.length > 0) ? manufacturer.includes(HU_manufacturer) : true;
			const yearMatch = ((!yearFrom || HU_year >= yearFrom) && (!yearTo || HU_year <= yearTo));
			const screenSizeMatch = ((!screenSizeFrom || HU_screenSize >= screenSizeFrom) && (!screenSizeTo || HU_screenSize <= screenSizeTo));
			// console.log('Filter: ',segment, manufacturer, yearFrom ,yearTo,screenSizeFrom,screenSizeTo ,'\n' ,
			// 	'HU: ', HU_segment, HU_manufacturer, HU_year, HU_screenSize, '\n' ,
			// 	'segmentMatch: ', segmentMatch, '\n' ,
			// 	'MakerMatch: ', manufacturerMatch, '\n' ,
			// 	'yearMatch: ', yearMatch, '\n' ,
			// 	'screenSizeMatch: ', screenSizeMatch);
			return segmentMatch && manufacturerMatch && yearMatch && screenSizeMatch;
		});

		// Filter using searchTerm
		return listings.filter(item => {
			const model = item?.General?.model?.trim().toLowerCase() || '';
			const manufacturer = item?.General?.manufacturer?.trim().toLowerCase() || '';
			// const adas = item?.OtherFunctions?.adas?.trim().toLowerCase(); const adasCheck = (adas === 'yes') ? Object.keys({adas})[0] : 'null'
			// return model.includes(searchTerm) || manufacturer.includes(searchTerm) || adasCheck.includes(searchTerm);
			return model.includes(searchTerm) || manufacturer.includes(searchTerm);
		});
	}
	return (
		<div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 p-6">
			{loading ? (
				<div className="flex justify-center col-span-3 my-[300px] items-center">
  					<AiOutlineLoading3Quarters className="animate-spin text-5xl text-[#01A981]" />
				</div>
			) : (
				filterList(listings).map((item, index) => (
						<div key={index}>
							<ModuleCard headunit={item} compare={compare}/>
						</div>
					))
				)
			}
		</div>
  	);
}

export default ModuleList;
