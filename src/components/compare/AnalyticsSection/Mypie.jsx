import React from 'react';
import { ResponsivePie } from '@nivo/pie';

function Mypie({ list }) {
    // Group the models by displayType
    const displayModels = list.reduce((acc, HUDetail) => {
        const displayType = HUDetail?.General?.displayType || 'Unknown';
        if (!acc[displayType]) acc[displayType] = [];
        acc[displayType].push(HUDetail?.General?.model);
        return acc;
    }, {});

    // console.log(displayModels)

    // Create the data for the pie chart
    const data = Object.entries(displayModels).map(([displayType, models]) => ({
        id: displayType,
        label: displayType,
        value: models.length,
        models: models, // Add models list to each entry
    }));

    // console.log(data)

    // Custom tooltip to display the models for each display type
    const customTooltip = ({ datum }) => {
        const color = datum.color;
        const label = datum.label;
        const value = datum.value;
        const models = datum.data.models

        return (
            <div style={{ borderColor: color, color: color }} className='bg-white rounded-xl shadow-lg p-3 border-2'>
                <h2 className='font-medium inline'>Display Type: </h2> <span>{label}</span>
                <h2 className='font-medium inline ml-4'>Value: </h2><span>{value}</span>
                <h2 className='font-medium'>Models: </h2>
                <ul>
                    {models.length > 0 ? (
                        models.map((model, index) => (
                            <li key={index}>{model}</li>
                        ))
                    ) : (
                        <li>No models available</li>
                    )}
                </ul>
            </div>
        );
    };
    return (
        <div style={{ width: 500, height: 350 }}>
            <ResponsivePie
                data={data}
                margin={{ top: 110, right: 80, bottom: 50, left: 80 }}
                cornerRadius={5}
                colors={{ scheme: 'category10' }}
                innerRadius={0.5}
                padAngle={0.7}
                activeOuterRadiusOffset={8}
                borderWidth={2}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.2]],
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [['darker', 2]],
                }}
                tooltip={customTooltip}
            />
        </div>
    );
}

export default Mypie;
