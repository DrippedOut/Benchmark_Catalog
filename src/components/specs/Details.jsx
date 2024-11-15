import React from "react";
import IconField from "./../IconField";
import categories from './../../shared/showSpecs';

const Details = ({ category, HUDetail }) => {
    // console.log("Processing Category: " + category + " --> ",  HUDetail[category]);
    return (
        <>
            {categories[category]?.map((item) => (
                <div key={item.name} className="mt-5 border p-4 grid grid-cols-3 relative">
                    <h2 className="flex gap-2 col-span-1 items-center">
                        <span className="p-[6px] text-[#01A981] rounded-full bg-[#01A981]/20"><IconField icon={item.icon} /></span>
                        <span className="mt-1 font-medium">{item.label}</span>
                    </h2>
                    <span className="mt-1 col-span-1">{item.description}</span> 
                    <span className="mt-1 font-medium col-span-1 text-right">
                        {HUDetail && HUDetail[category] && HUDetail[category][item.name]
                        ? HUDetail[category][item.name]
                        : "-"}       {/* if null then display '-' */}
                    </span>
                </div>
            ))}
        </>
    );
};

export default Details;
