import React from 'react'
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table"
import { FaCheck , FaXmark  } from "react-icons/fa6";


function CompareFeatures({list}) {
	const showIcon = (item) => {
		if (item) {
			return item === 'Yes' ? (
			<span className="flex justify-center">
				<FaCheck className="bg-green-500 rounded-full text-white p-[2.5px] text-lg" />
			</span>
		  	) : (
			<span className="flex justify-center">
				<FaXmark className="bg-red-500 rounded-full text-white p-[2.5px] text-lg" />
			</span>
		  	);
		} else {
			return '-';
		}
	};

	const extPF = (item) => {
		if (!item?.wire && !item?.wireless) {
		  return '-';
		} else if (item?.wire === 'No' && item?.wireless === 'No') {
		  return (
			<span className="flex justify-center">
			  <FaXmark className="bg-red-500 rounded-full text-white p-[2.5px] text-lg" />
			</span>
		  );
		} else {
		  return (
			<span className="flex justify-center">
			  <FaCheck className="bg-green-500 rounded-full text-white p-[2.5px] text-lg" />
			</span>
		  );
		}
	  };

  return (
    //  Container
    <div className='border rounded-xl shadow-lg mt-10 w-full h-auto'>
		<h2 class="text-3xl font-bold mb-10 pl-10 pt-10">Highlights</h2>
        {/* Grid */}
        <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
            {/* Cards Section*/}
            
            {/* Display Card */}
            <div className='bg-white rounded-xl border p-4 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-700'>
                <span className='text-base font-bold p-2'>Display</span>
				<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px] text-left">Models</TableHead>
						<TableHead>Size</TableHead>
						<TableHead>Type</TableHead>
						<TableHead>FPS</TableHead>
						<TableHead>Resolution</TableHead>
						<TableHead>Aspect Ratio</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{list.map((headunit) => (
					<TableRow>
						<TableCell className="font-medium text-left">{headunit?.General?.model}</TableCell>
						<TableCell>{headunit?.General?.displaySize || '-'}</TableCell>
						<TableCell>{headunit?.General?.displayType || '-'}</TableCell>
						<TableCell>{headunit?.General?.displayFrameRate || '-'}</TableCell>
						<TableCell>{headunit?.General?.resolution || '-'}</TableCell>
						<TableCell>{headunit?.General?.aspectRatio || '-'}</TableCell>
					</TableRow>
					))}
				</TableBody>
				</Table>
            </div>

			{/* Tuner Card */}
            {/* <div className='bg-white rounded-xl border p-4 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-700'>
                <span className='text-base font-bold p-2'>Tuner</span>
				<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px] text-left">Models</TableHead>
						<TableHead>Play/Pause</TableHead>
						<TableHead>Volume</TableHead>
						<TableHead>Preset</TableHead>
						<TableHead>Scan</TableHead>
						<TableHead>Favorite</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{list.map((headunit) => (
					<TableRow>
						<TableCell className="font-medium text-left">{headunit?.General?.model}</TableCell>
						<TableCell>{showIcon(headunit?.Tuner?.playPause)}</TableCell>
						<TableCell>{showIcon(headunit?.Tuner?.volume)}</TableCell>
						<TableCell>{showIcon(headunit?.Tuner?.displayFrameRate)}</TableCell>
						<TableCell>{showIcon(headunit?.Tuner?.resolution)}</TableCell>
						<TableCell>{showIcon(headunit?.Tuner?.aspectRatio)}</TableCell>
					</TableRow>
					))}
				</TableBody>
				</Table>
            </div> */}

			{/* Bluetooth Card */}
            <div className='bg-white rounded-xl border p-4 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-700'>
                <span className='text-base font-bold p-2'>Bluetooth</span>
				<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px] text-left">Models</TableHead>
						<TableHead>Synchronization</TableHead>
						<TableHead>Recent Call</TableHead>
						<TableHead>Spotify</TableHead>
						<TableHead>YouTube</TableHead>
						<TableHead>Apple Music</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{list.map((headunit) => (
					<TableRow>
						<TableCell className="font-medium text-left">{headunit?.General?.model}</TableCell>
						<TableCell>{showIcon(headunit?.Bluetooth_Handsfree?.synchronization)}</TableCell>
						<TableCell>{showIcon(headunit?.Bluetooth_Handsfree?.recentCall)}</TableCell>
						<TableCell>{showIcon(headunit?.Bluetooth_Media?.spotify)}</TableCell>
						<TableCell>{showIcon(headunit?.Bluetooth_Media?.youtube)}</TableCell>
						<TableCell>{showIcon(headunit?.Bluetooth_Media?.appleMusic)}</TableCell>
					</TableRow>
					))}
				</TableBody>
				</Table>
            </div>

			{/* Camera Card */}
            <div className='bg-white rounded-xl border p-4 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-700'>
                <span className='text-base font-bold p-2'>Camera</span>
				<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px] text-left">Models</TableHead>
						<TableHead>Rear Camera</TableHead>
						<TableHead>PVM</TableHead>
						<TableHead>BSD</TableHead>
						<TableHead>RCTA</TableHead>
						<TableHead>Back Sensor</TableHead>
						<TableHead>Lane Watch</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{list.map((headunit) => (
					<TableRow>
						<TableCell className="font-medium text-left">{headunit?.General?.model}</TableCell>
						<TableCell>{showIcon(headunit?.Camera?.rearCamera)}</TableCell>
						<TableCell>{showIcon(headunit?.Camera?.pvmCamera)}</TableCell>
						<TableCell>{showIcon(headunit?.Camera?.bsd)}</TableCell>
						<TableCell>{showIcon(headunit?.Camera?.rcta)}</TableCell>
						<TableCell>{showIcon(headunit?.Camera?.backSensor)}</TableCell>
						<TableCell>{showIcon(headunit?.Camera?.laneWatchCamera)}</TableCell>
					</TableRow>
					))}
				</TableBody>
				</Table>
            </div>

			{/* External Platforms Card */}
            <div className='bg-white rounded-xl border p-4 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-700'>
                <span className='text-base font-bold p-2'>External Platforms</span>
				<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px] text-left">Models</TableHead>
						<TableHead>Apple CarPlay</TableHead>
						<TableHead>Android Auto</TableHead>
						<TableHead>Weblink</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{list.map((headunit) => (
					<TableRow>
						<TableCell className="font-medium text-left">{headunit?.General?.model}</TableCell>
						<TableCell>{extPF(headunit?.Carplay)}</TableCell>
						<TableCell>{extPF(headunit?.AndroidAuto)}</TableCell>
						<TableCell>{extPF(headunit?.Weblink)}</TableCell>
					</TableRow>
					))}
				</TableBody>
				</Table>
            </div>

			{/* Connections Card */}
            <div className='bg-white rounded-xl border p-4 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-700'>
                <span className='text-base font-bold p-2'>Connections</span>
				<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px] text-left">Models</TableHead>
						<TableHead>Wi-Fi</TableHead>
						<TableHead>Miracast</TableHead>
						<TableHead>NFC</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{list.map((headunit) => (
					<TableRow>
						<TableCell className="font-medium text-left">{headunit?.General?.model}</TableCell>
						<TableCell>{showIcon(headunit?.OtherConnections?.wifiConnect)}</TableCell>
						<TableCell>{showIcon(headunit?.OtherConnections?.miracast)}</TableCell>
						<TableCell>{showIcon(headunit?.OtherConnections?.nfc)}</TableCell>
					</TableRow>
					))}
				</TableBody>
				</Table>
            </div>           
			{/* Vehicle functions Card */}
            <div className='bg-white rounded-xl border p-4 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-700'>
                <span className='text-base font-bold p-2'>Vehicle functions</span>
				<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px] text-left">Models</TableHead>
						<TableHead>Vehicle info</TableHead>
						<TableHead>Vehicle Setting</TableHead>
						<TableHead>ADAS</TableHead>
						<TableHead>Altimeter</TableHead>
						<TableHead>Battery level</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{list.map((headunit) => (
					<TableRow>
						<TableCell className="font-medium text-left">{headunit?.General?.model}</TableCell>
						<TableCell>{showIcon(headunit?.OtherFunctions?.vehicleInfo)}</TableCell>
						<TableCell>{showIcon(headunit?.OtherFunctions?.vehicleSetting)}</TableCell>
						<TableCell>{showIcon(headunit?.OtherFunctions?.adas)}</TableCell>
						<TableCell>{showIcon(headunit?.OtherFunctions?.altimeter)}</TableCell>
						<TableCell>{showIcon(headunit?.OtherFunctions?.batteryLevel)}</TableCell>
					</TableRow>
					))}
				</TableBody>
				</Table>
            </div>           
        </div>
    </div>
  )
}

export default CompareFeatures
