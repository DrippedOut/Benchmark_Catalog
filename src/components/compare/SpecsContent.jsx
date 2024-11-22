import React from 'react'
import IconField from "./../IconField";
import categories from './../../shared/showSpecs';
  
function SpecsContent( {category , list} ) {
  return (
	<div className='overflow-x-scroll scrollbar-custom'>
		{categories[category]?.map((item) => (
      		<div key={item.name} className="mt-5 p-4 border flex flex-row min-w-fit"> 
			{/* Label column */}
				<h2 className="flex gap-2 col-span-1 items-center min-w-60">
					<span className="p-[6px] text-[#01A981] rounded-full bg-[#01A981]/20"><IconField icon={item.icon} /></span>
					<span className="mt-1 font-medium">{item.label}</span>
				</h2>
			{/* Specs columns */}
			<div className='flex'>
				{list.map((HUDetail, index) => (
				<div key={index} className='text-right w-60 p-1 '>
					<span className="mt-1 font-medium">
						{HUDetail && HUDetail[category] && HUDetail[category][item.name]
						? HUDetail[category][item.name]
						: "-"}       {/* if null then display '-' */}
					</span> 
				</div>
				))}
        	</div>
			</div>
      	))}
    </div>
  )
}

export default SpecsContent
