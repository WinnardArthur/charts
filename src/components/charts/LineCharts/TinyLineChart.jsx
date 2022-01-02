import React from 'react';
import {
    LineChart,
    Line,
    ResponsiveContainer
} from 'recharts';
import { data } from '../../../data/chartData';

const TinyLineChart = () => {
    return (
        <div className='lineChart'>
            <h1>Tiny Line Chart</h1>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TinyLineChart
