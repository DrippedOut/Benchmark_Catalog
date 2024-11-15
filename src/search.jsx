import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import FilterCard from './components/filter/FilterCard'
import ModuleList from './components/ModuleList'
import Footer from './components/Footer'
import { Store } from 'react-notifications-component';
import CompareList from './components/ui/CompareList'

function Search() {
  	const [searchTerm, setSearchTerm] = useState('');	// Search term from filter card
	const [FilterData, setFilterData] = useState({});	// Filter data from filter card
	const [compareList, setcompareList] = useState([]); // List for Compare feature

	useEffect(() => {}, [ searchTerm , FilterData ]);

	const addToCompare = (HU) => {
		const model = HU?.General?.model;
		if (!compareList.some(item => item.General.id === HU?.General?.id)) {
			setcompareList((prev) => [...prev, HU]);	// add HU to compareList
			Store.addNotification({
				title: "Added",
				message: `${model} is added to the list`,
				type: "success",
				insert: "top",
				container: "top-right",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
				dismiss: { duration: 5000, onScreen: true }
			});
			console.log(compareList);
		} else {
			Store.addNotification({
				title: "Denied",
				message: `${model} is already on the list`,
				type: "danger",
				insert: "top",
				container: "top-right",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
				dismiss: { duration: 5000, onScreen: true }
			});
		}
	};
	
	return (
		<div>
			<Header />
				<div className="px-10 md:px-20 my-10">
					<div className='grid grid-cols-1 md:grid-cols-4'>

						{/* Filter (Mounted left)*/}
						<div className='col-span-1 md:col-span-4 lg:col-span-1'>
							<div className='inline-grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5'>
								<FilterCard onSearch={setSearchTerm} filter={setFilterData}/>
								<CompareList list={compareList}/>
							</div>
						</div>							

						{/* HU listing (Mounted right)*/}
						<div className='lg:col-span-3 col-span-4'>
							<ModuleList searchTerm={searchTerm} filterData={FilterData} compare={addToCompare}/>
						</div>

					</div>
				</div>
			<Footer/>
		</div>
  )
}

export default Search