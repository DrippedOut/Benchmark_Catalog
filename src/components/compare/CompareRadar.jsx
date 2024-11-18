import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
    
function CompareRadar({ list }) {
    // Sample data
    const data = [
        { name: 'Screen', x: 14 },
        { name: 'RAM', x: 8 },
        { name: 'ROM', x: 4 },
        { name: 'FPS', x: 7 },
        { name: 'Languages', x: 16 },
        { name: 'Type A ports', x: 7 },
        { name: 'Type C ports', x: 8 },
    ];
    
  return (
    <div>
      <RadarChart height={500} width={500} 
            outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="x" stroke="green"
                fill="green" fillOpacity={0.5} />
        </RadarChart>
    </div>
  )
}

export default CompareRadar
