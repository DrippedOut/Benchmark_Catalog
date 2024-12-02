import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import MyScatterPlot from './MyScatterPlot';
import Mypie from './Mypie';

function Analytics({list}) {
  return (
	// Container
    <div className="shadow-lg rounded-xl p-10 border mt-10">
        <h2 className="text-3xl font-bold mb-10">Analytics</h2>
		{/* Grid */}
        <div className='p-0 md:p-10 grid grid-cols-1 xl:grid-cols-2 gap-10'>
			{/* Charts & Graphs */}
			<div className='bg-white rounded-xl border p-4 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-700'>
				<div className='overflow-auto scrollbar-custom items-center'>
					<MyScatterPlot list={list}/>
					<span className='text-base flex justify-center text-gray-500 p-2'>A Timeline of Display Size</span>
				</div>
			</div>
			<div className='bg-white rounded-xl border p-4 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-700'>
				<div className='overflow-auto scrollbar-custom'>
					<Mypie list={list}/>
					<span className='text-base flex justify-center text-gray-500 p-2'>Distribution of Display Types</span>
				</div>
			</div>
        </div>
    </div>
  )
}

export default Analytics
