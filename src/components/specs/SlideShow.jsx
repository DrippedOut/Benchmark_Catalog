import {React, useState, useEffect  } from "react";
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import 'animate.css';

function SlideShow( {img} ) {
	const [slides, setSlides] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(()=>{
		console.log(slides[currentIndex])
	},[slides[currentIndex], slides])

	useEffect(() => {
		if (Array.isArray(img) && img.length > 0) {
			const formattedSlides = img.map(item => ({url: item.imageURL}));
		  // After processing images, set slides and stop loading
		  setSlides(formattedSlides);
		  setLoading(false);  // Images are fully loaded
		} else {
		  setLoading(false);  // If no images, stop loading
		}
	  }, [img]);
   
  	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
		console.log("slide #", newIndex)
  	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
		console.log("slide #", newIndex)
 	};

	if (loading || slides.length === 0) {
		return (
			<div className="flex h-full justify-center align-middle items-center">
				<AiOutlineLoading3Quarters className="animate-spin text-5xl text-[#01A981]" />
			</div>
		);
	};

	const isImage = () => {
		const formats = ['jpg', 'jpeg', 'png', 'webp']; 
		const extension = slides[currentIndex]?.url.split('.').pop().split('?')[0].toLowerCase();
		return formats.includes(extension);
	};	
	
  return (
        // <div className="my-12 relative group w-full h-[700px] border rounded-xl bg-black">
		<>
			{isImage() ? (
				<img src={slides[currentIndex].url} key={currentIndex} className="object-contain w-full h-full rounded-2xl animate__animated animate__fadeIn" /> 
			) : (
				<video src={slides[currentIndex].url} key={currentIndex} controls autoPlay muted className="object-contain h-full w-full rounded-2xl animate__animated animate__fadeIn" />
			)}
            {/* Left Arrow */}
				<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactLeft onClick={prevSlide} size={40} />
				</div>

            {/* Right Arrow */}
				<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactRight onClick={nextSlide} size={40} />
				</div>
		</>
        // </div>
  )
}

export default SlideShow
