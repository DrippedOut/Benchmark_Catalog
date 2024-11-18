import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLocation } from 'react-router-dom';
import CompareSlider from "./components/compare/CompareSlider";
import CompareRadar from "./components/compare/CompareRadar";
import SpecsSheet from "./components/compare/SpecsSheet";

function Compare() {
	const location = useLocation();
	const compareList = location.state?.compareList || [];

	return (
		<div>
			<Header />
			<div className="px-10 md:px-20 my-10">
				<div className="flex justify-between items-center mb-10">
					<h2 className="text-4xl font-bold">Compare Head-unit Specs</h2>
				</div>

				<div className="flex justify-center">
					{(compareList.length > 1) ? <CompareSlider list={compareList}/>: null}
				</div>

				<div className="flex justify-center">
					<CompareRadar />
				</div>

				<SpecsSheet list={compareList}/>
			</div>
			<Footer />
		</div>
	);
}

export default Compare;
