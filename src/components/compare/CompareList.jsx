import React, {useEffect} from 'react'
import { FaListUl } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Button } from '../ui/button';
import { Link } from "react-router-dom";

function CompareList( { compareList , itemRemoved } ) {
    // const goTo = useNavigate();

    if (compareList.length < 1) return null;
    
    useEffect(() => {
        if (compareList && compareList.length > 0) {
            console.log(compareList)   
        }
    }, [compareList]);

    const removeItem = (item) => {
        itemRemoved(item);
        console.log("REMOVE ", item);
    }

    const onCompare = () => {
        console.log("onCompare init")
        goTo('/compare', { state: { compareList } });
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
                {compareList.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-xl transition-all hover:bg-red-500/50 group cursor-pointer"  onClick={() => removeItem(item.General)}>
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
                        <span className="opacity-0 group-hover:opacity-100 absolute right-[45%] text-4xl text-red-500">
                            <FaTrash/>
                        </span>
                    </div>
                ))}
                <div className="flex justify-end pt-10">
                    <Link to="/compare" state={{ compareList }} className='w-full'>
                        <Button className='w-full' onClick={() => onCompare}>COMPARE</Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompareList
