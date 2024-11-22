import React from 'react'
import { ResponsiveScatterPlotCanvas } from '@nivo/scatterplot'

function MyScatterPlot({list}) {
    const data = list.reduce((acc, HUDetail) => {
        const groupId = HUDetail.General.model; // Group by manufacturer
        const year = parseInt(HUDetail.General.year, 10); // X-axis
        const displaySize = parseFloat(HUDetail.General.displaySize.replace('"', '')); // Y-axis (removing the inch symbol)

        // Find or create the group
        let group = acc.find(g => g.id === groupId);
        if (!group) {
            group = { id: groupId, data: [] };
            acc.push(group);
        }

        // Add the data point to the group
        group.data.push({ x: year, y: displaySize });

        return acc;
    }, []);

  return (
    <div style={{ width: 500 , height: 350 }}>
      <ResponsiveScatterPlotCanvas
        data={data}
        margin={{ top: 30, right: 120, bottom: 65, left: 80 }}
        xScale={{ type: 'linear', min: 'auto', max: 'auto'}}
        xFormat=">-.0f"
        yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
        yFormat=">-.0f"
        colors={{ scheme: 'category10' }}
        pixelRatio={2}
        nodeSize={10}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: 'Year',
            legendPosition: 'middle',
            legendOffset: 46,
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Display Size (Inch)',
            legendPosition: 'middle',
            legendOffset: -60,
        }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 130,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 12,
            itemsSpacing: 5,
            itemDirection: 'left-to-right',
            symbolSize: 12,
            symbolShape: 'rect',
            effects: [
              {
                on: 'hover',
                style: {itemOpacity: 1,},
              },
            ],
          },
        ]}
        
      />
    </div>
  );
}
  
export default MyScatterPlot;