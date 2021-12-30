import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar, 
    CartesianAxis
} from 'recharts';
import { RAINFALL } from '../../data/monthy-rainfall';

const RainfallBarChart = () => {
    return (
        <div className="chartContainer">
            <h1 style={{textAlign: 'center', paddingTop: '2rem', marginBottom: '1rem'}}>Ghana 2019 Monthly Rainfall</h1>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={RAINFALL["2019"]} fontSize={14}>
                    <Bar dataKey={"rainfall"} name={"Rainfall"} fill={"teal"} unit={"ml"}/>
                    <XAxis dataKey={"month"} tickLine={false}/>
                    <YAxis unit={"ml"} tickLine={false} axisLine={false} width={45}/>
                    <CartesianGrid vertical={false} stroke="teal" strokeDasharray={'3 3'}/>
                    <Tooltip contentStyle={{borderRadius: ' 5px', fontSize: '14px'}} cursor={false}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RainfallBarChart
