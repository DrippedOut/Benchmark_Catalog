import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { FaBuilding } from 'react-icons/fa';
import { FaCarSide } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";
import FilterDetails from "./../../shared/FilterDetails";

function FilterCard( { onSearch, filter} ) {
	const [FilterSearchTerm, setFilterSearchTerm] = useState();
	const [FilterData, setFilterData] = useState({
		segment: '',
		manufacturer: [],
		yearFrom: '',
		yearTo: '',
		displaySizeFrom: '',
		displaySizeTo: ''
	});

	const clearFilter = (e) => {
		e.preventDefault();
		onSearch(''); // Reset searchTerm
		setFilterSearchTerm('') // Reset local SearchTerm
		document.getElementById('searchBar').value = ''; // Reset search bar
		setFilterData({
			segment: '',
			manufacturer: [],
			yearFrom: '',
			yearTo: '',
			displaySizeFrom: '',
			displaySizeTo: ''
		  });
		filter({
			segment: '',
			manufacturer: [],
			yearFrom: '',
			yearTo: '',
			displaySizeFrom: '',
			displaySizeTo: ''
		  })
	}

	const onApply = (e) => {
		e.preventDefault();
		console.log(FilterSearchTerm);
		if (FilterSearchTerm) {
			onSearch(FilterSearchTerm)
		}
		filter(FilterData)
	}

	const searchChange = (e) => {
		const formatted = e.target.value.toLowerCase().trim();
		setFilterSearchTerm(formatted);
	}

	const handleKeyDown = (e) => {if (e.key === 'Enter') {onApply(e);}};

	const handleFilterChange = (name, value) => {
		setFilterData((prevData) => ({...prevData, [name]: value}))
		console.log(FilterData);
	}

	const handleManufacturerChange = (manufacturer) => {
		setFilterData((prevData) => {
			const newManufacturers = prevData.manufacturer.includes(manufacturer) // Check if manufacturer is already in the array
				? prevData.manufacturer.filter((item) => item !== manufacturer) // Remove if exists
				: [...prevData.manufacturer, manufacturer]; // Add if doesn't exist
			return {
				...prevData,
				manufacturer: newManufacturers
			};
		});
		console.log(FilterData);
	};

	return (	
		<>
			<div className="h-min p-6 shadow-lg rounded-xl">
				{/* Search box */}
				<h2 className="flex gap-2 col-span-1 items-center">
						<span className="p-[6px] text-[#01A981] text-lg rounded-full bg-[#01A981]/20"><IoSearch /></span>
						<span className="text-lg font-semibold my-4">Search</span>
				</h2>
				<Input id='searchBar' onKeyDown={handleKeyDown} placeholder="Search by the title..." onChange={searchChange} className="py-2 left-0 pr-3 border-gray-300 rounded-xl hover:bg-[#f7f7f7]  focus:bg-[#f7f7f7]  focus:border-gray-300 focus-visible:ring-0 transition-colors"/>

				<form>
					{/* Segment */}
					<div className='relative w-full my-3'>
						<h2 className="flex gap-2 col-span-1 items-center">
							<span className="p-[6px] text-[#01A981] text-lg rounded-full bg-[#01A981]/20"><FaCarSide /></span>
							<span className="text-lg font-semibold my-4">Segment</span>
						</h2>
						<Select value={FilterData.segment} onValueChange={(value) => handleFilterChange('segment', value)}>
							<SelectTrigger>
								<SelectValue placeholder={FilterData.segment === '' ? "--Select--" : FilterData.segment}  />
							</SelectTrigger>
							<SelectContent >
								{FilterDetails.Segment?.map((option, index) => (
									<SelectItem key={index} value={option}>{option}</SelectItem>))}
							</SelectContent>
						</Select>
					</div>

					{/* Manufacturer */}
					<div className="my-3 ">
						<h2 className="flex gap-2 col-span-1 items-center">
							<span className="p-[6px] text-[#01A981] text-lg rounded-full bg-[#01A981]/20"><FaBuilding /></span>
							<span className="text-lg font-semibold my-4">Manufacturer</span>
						</h2>
						<div className="p-4 flex flex-col max-h-64 rounded-lg border overflow-y-auto scrollbar-custom">
							{FilterDetails.Manufacturer?.map((option, index) => (			
								<label><input type="checkbox" className="mr-2" key={index}
									checked={FilterData.manufacturer.includes(option)}
									onChange={() => handleManufacturerChange(option)}
								/>{option}</label>
							))}
						</div>
					</div>

					{/* Year */}
					<div className="my-3">
						<h2 className="flex gap-2 col-span-1 items-center">
							<span className="p-[6px] text-[#01A981] text-lg rounded-full bg-[#01A981]/20"><FaCalendar /></span>
							<span className="text-lg font-semibold my-4">Year</span>
						</h2>
						<div className="flex p-2">
							From<input type="number" value={FilterData.yearFrom} onChange={(e) => handleFilterChange('yearFrom', e.target.value)} className="mx-2 w-full bg-white border rounded-lg outline-0" />
							to<input type="number" value={FilterData.yearTo} onChange={(e) => handleFilterChange('yearTo', e.target.value)} className="mx-2 w-full bg-white border rounded-lg outline-0" />
						</div>
					</div>

					{/* Display Size */}
					<div className="my-3">
						<h2 className="flex gap-2 col-span-1 items-center">
							<span className="p-[6px] text-[#01A981] text-lg rounded-full bg-[#01A981]/20"><FaDesktop /></span>
							<span className="text-lg font-semibold my-4">Display Size</span>
						</h2>
						<div className="flex p-2">
							<input type="number" value={FilterData.displaySizeFrom} onChange={(e) => handleFilterChange('displaySizeFrom', e.target.value)}  className="mx-2 w-full bg-white border rounded-lg outline-0" />
							-<input type="number" value={FilterData.displaySizeTo} onChange={(e) => handleFilterChange('displaySizeTo', e.target.value)}  className="mx-2 w-full bg-white border rounded-lg outline-0" />
						</div>
					</div>

					<div className='flex justify-around'>
						<Button onClick={(e) => onApply(e)}>APPLY</Button>
						<Button onClick={(e) => clearFilter(e)} variant="utility">CLEAR</Button>
					</div>
				</form>
			</div>
		</>
	);
}

export default FilterCard;
