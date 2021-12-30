import React from 'react';
import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    LineChart,
    Tooltip,
    Line,
} from 'recharts';
import { TEMPERATURE } from '../../data/monthly-temperature';

const TemperatureLineChart = () => {
    return (
        <div className="chartContainer" style={{marginTop: '5rem'}}>
            <h1 style={{textAlign: 'center', paddingTop: '1rem', marginBottom: '2rem'}}>Ghana 2019 Monthly Temperature</h1>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={TEMPERATURE['2019']}  fontSize={14}>
                    <XAxis dataKey={'month'} tickLine={false}/>
                    <YAxis unit={"oC"} width={50} tickLine={false} axisLine={false} domain={["auto", "auto"]}/>
                    <CartesianGrid vertical={false} strokeDasharray={'3 3'} stroke={'silver'}/>
                    <Line type={'monotone'} dataKey={'temperature'} stroke="tomato" name={"Temperature"}/>
                    <Tooltip cursor={false}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TemperatureLineChart
