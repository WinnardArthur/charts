import React from 'react';
import { 
    LineChart, Line, XAxis, YAxis,  
    CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { data } from '../../../data/chartData';


const SimpleLineChart = () => {
    return (
        <div className="lineChart">
            <h1>Simple Line Chart</h1>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data = {data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8}} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" activeDot={{r: 8 }}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SimpleLineChart
