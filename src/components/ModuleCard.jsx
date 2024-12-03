import React from "react";
import { Separator } from "./ui/separator";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { FaBluetooth } from "react-icons/fa";
import { Button } from "./ui/button";
import { IoIosAddCircleOutline } from "react-icons/io";
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"
import { useNavigate } from "react-router-dom";
import noImage from './../assets/noImage.jpg'

function ModuleCard({ headunit , compareItem }) {
	const goTo = useNavigate();

	const cardClick = () => {goTo('/specs/'+headunit?.General?.id)}

	const addBtnClick = (event) => {
		event.stopPropagation();
		compareItem(headunit);
	}

	const isImage = (img) => {
		const formats = ['jpg', 'jpeg', 'png', 'webp']; 
		const extension = img?.imageURL.split('.').pop().split('?')[0].toLowerCase();
		return formats.includes(extension);
	};	

	const DisplayImage = headunit?.images?.find(isImage)?.imageURL || noImage;

	return (
		<div onClick={cardClick} className="shadow-md border rounded-xl overflow-hidden cursor-pointer active:scale-100 group">
			<img src={DisplayImage} width={'100%'} className="h-[180px] object-cover rounded-t-xl duration-300 ease-in-out transition-all group-hover:scale-110"/>
			<div className="p-4">
			<h2 className="font-bold text-black text-lg mb-2">{headunit?.General?.model}</h2>
			<Separator />
			<div className=" grid grid-cols-3 mt-5">
				<div className="flex flex-col items-center">
				<MdOutlineScreenshotMonitor className="text-lg mb-2" />
				<h2 className="text-center">{headunit?.General?.displaySize}</h2>
				</div>
				<div className="flex flex-col items-center">
				<FaBuilding className="text-lg mb-2" />
				<h2 className="text-center">{headunit?.General?.manufacturer}</h2>
				</div>
				<div className="flex flex-col items-center">
				<FaBluetooth className="text-xl mb-2" />
				<h2 className="text-center">{headunit?.Bluetooth_Technology?.version}</h2>
				</div>
			</div>
			<Separator className="my-2" />
			<div className="flex items-center justify-between">
				<h2 className="font-bold text-xl">{headunit?.General?.year}</h2>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<div onClick={addBtnClick} className="bg-white border-0 rounded-full p-0">
								<Button className="rounded-full p-0.5 text-3xl"> 
									<IoIosAddCircleOutline />
								</Button>
							</div>
						</TooltipTrigger>
						<TooltipContent>Add to comparison</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			</div>
		</div>
	);
}

export default ModuleCard;
