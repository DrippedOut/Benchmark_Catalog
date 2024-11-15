import React, { useEffect } from 'react'
import { FaListUl } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function CompareList( { list } ) {
    
    useEffect(() => {
        console.log(list)
    }, [ list ]);

    if (list.length < 1) return null;

    const onRemove = () => {

    }

  return (
    <div class="h-min p-6 shadow-lg rounded-xl">
        {/* <!-- Centering wrapper --> */}
        <div class="relative flex flex-col rounded-xl bg-clip-border text-gray-700">
            <h2 className="flex gap-2 col-span-1 items-center mb-4">
                <span className="p-[6px] text-[#01A981] text-xl rounded-full bg-[#01A981]/20"><FaListUl /></span>
                <span className="text-2xl font-semibold my-4">Compare List</span>
            </h2>
            <div class="divide-y divide-gray-200">
                {list.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-xl transition-all hover:bg-red-700 group cursor-pointer">
                        <div className="flex items-center gap-x-3">
                            <img
                                src={item?.images[0]?.imageURL}
                                className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                            />
                            <div>
                                <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                    {item?.General?.model}
                                </h6>
                                <p className="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                                    {item?.General?.manufacturer || ''}
                                </p>
                            </div>
                        </div>
                        <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                            {item?.General?.year}
                        </h6>
                        <FaTrash className="opacity-0 group-hover:opacity-100 absolute right-32 text-4xl text-red-500" onClick={onRemove}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CompareList
