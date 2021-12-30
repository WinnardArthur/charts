import React from 'react';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    CartesianAxis
} from 'recharts';
import { RAINFALL } from '../../data/monthy-rainfall';

const RainfallAreaChart = () => {
    return (
        <div className="chartContainer" style={{marginTop: '5rem'}}>
            <h1 style={{textAlign: 'center', paddingTop: '2rem', marginBottom: '1rem'}}>Ghana 2019 Monthly Rainfall</h1>
            <ResponsiveContainer width={"100%"} height={300}>
                <AreaChart data={RAINFALL['2019']} fontSize={14}>
                    <XAxis dataKey={"month"} tickLine={false}/>
                    <YAxis unit={"ml"} tickLine={false} axisLine={false} width={50}/>
                    <CartesianGrid vertical={false} strokeDasharray={'3 3'} />
                    <Area type={"monotone"} dataKey={"rainfall"} name="Rainfall" fill={'url(#rainFill)'}/>
                    <Tooltip cursor={false} contentStyle={{color: 'teal', padding: '0', textAlign: 'center'}}/>
                    <defs>
                        <linearGradient id="rainFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="purple"/>
                            <stop offset="100%" stopColor="teal"/>
                        </linearGradient>
                    </defs>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RainfallAreaChart
