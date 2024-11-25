import React , {useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLocation } from 'react-router-dom';
import CompareSlider from "./components/compare/CompareSlider";
import SpecsSheet from "./components/compare/SpecsSheet";
import CompareFeatures from "./components/compare/CompareFeatures";
import Analytics from "./components/compare/AnalyticsSection/Analytics";
import { IoSearch } from "react-icons/io5";

function Compare() {
	const location = useLocation();
	const compareList = location.state?.compareList || [];

	useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

	if (compareList.length < 1) {
		return 	<div>
					<Header />
						<div className="px-10 md:px-20 my-10">
							<div className="h-[477px] flex justify-center items-center flex-col">
								<h2 className="font-black text-3xl">Hm...it seems like you haven't selected any headunit for comparison yet</h2>
								<h2 className="text-lg text-gray-600 mt-5 inline-flex gap-2">You can add headunits for comparison from the 
									<a href="/" className="text-black hover:text-black/70 inline-flex">
										<IoSearch className="relative top-1"/> Search page
									</a> 
								</h2>
							</div>
						</div>
					<Footer />
				</div>
	}
	return (
		<div>
			<Header />
			<div className="px-10 md:px-20 my-10">
				<h2 className="text-4xl font-bold">Compare Head-units</h2>

				<div className="flex justify-center">
					{(compareList.length > 1) ? <CompareSlider list={compareList} />: null}
				</div>

				<CompareFeatures list={compareList} />

				<SpecsSheet list={compareList} />

				<Analytics list={compareList}/>
			</div>
			<Footer />
		</div>
	);
}

export default Compare;
