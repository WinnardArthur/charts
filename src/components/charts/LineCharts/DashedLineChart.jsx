import React from 'react'
import { 
    LineChart, 
    ResponsiveContainer, 
    Line, 
    CartesianGrid, 
    Legend, 
    Tooltip, 
    XAxis,
    YAxis
} from 'recharts'
import { data } from '../../../data/chartData';

const DashedLineChart = () => {
    return (
        <div className='lineChart'>
            <h1>Dashed Line Chart</h1>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="tomato" strokeDasharray='5 5' activeDot={{ r: 7}}/>
                    <Line type="monotone" dataKey="uv"stroke='teal'strokeDasharray='3 4 5 2'/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DashedLineChart
