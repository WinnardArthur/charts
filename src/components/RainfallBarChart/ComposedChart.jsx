import {
    ResponsiveContainer,
    ComposedChart,
    XAxis,
    CartesianGrid,                                                              
    Tooltip,
    Area,
    YAxis,
    Line,
    Legend
} from 'recharts';
import { RAINFALL } from '../../data/monthy-rainfall';
import { TEMPERATURE } from '../../data/monthly-temperature';

const ComposedRainTempChart = () => {

    const data = RAINFALL["2019"].map((rainfall, index) => ({
        ...rainfall,
        temperature: TEMPERATURE["2019"][index].temperature
    }))

    return (
        <div className="chartContainer" style={{marginTop: '5rem'}}>
            <h1 style={{textAlign: 'center', paddingTop: '2rem', marginBottom: '1rem'}}>Ghana 2019 Monthly Rainfall And Temperature</h1>
            <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={data} fontSize={14}>
                    <defs>
                        <linearGradient id="rainGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3066BE"/>
                            <stop offset="100%" stopColor="#3066BE22" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#d6d9da" />
                    <XAxis dataKey="month" scale="point"/>
                    <YAxis 
                        unit="ml" 
                        orientation="left" 
                        widh={50} 
                        axisLine={false} 
                        tickLine={false} 
                        yAxisId="rainfall" 
                        domain={["auto", "auto"]}
                    />
                    <YAxis 
                        unit="oC" 
                        orientation="right" 
                        width={50} 
                        axisLine={false} 
                        tickLine={false} 
                        yAxisId="temperature"
                    />
                    <Tooltip cursor={false}/>
                    <Area 
                        name="Rainfall" 
                        dataKey={"rainfall"} 
                        fill="url(#rainGradient)" 
                        type="basis" 
                        yAxisId="rainfall"
                    />
                    <Line 
                        name="Temperature" 
                        dataKey={"temperature"} 
                        stoke="tomato" 
                        fill="#EF5858" 
                        unit="oC" 
                        type="monotone" 
                        yAxisId="temperature"
                    />
                    <Legend />
                </ComposedChart>
            </ResponsiveContainer>

        </div>
    )
}

export default ComposedRainTempChart
