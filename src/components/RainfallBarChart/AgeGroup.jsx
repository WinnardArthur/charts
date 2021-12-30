import { useState } from 'react'
import {
    ResponsiveContainer,
    PieChart,
    Pie, 
    Cell,
    Tooltip
} from 'recharts';
import { AGE_GROUP, COLORS } from '../../data/ageGroup';
import Codes from './Codes';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 10;
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" fontSize={12} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

const AgeGroup = () => {
    const [showCode, setShowCode] = useState(false);

    const toggleCodes = () => {
        setShowCode((prevState) => !prevState)
    }

    return (
        <div className="chartContainer" style={{marginTop: '5rem'}}>
            <h1 style={{textAlign: 'center', paddingTop: '2rem', marginBottom: '1rem'}}>Ghana AGE GROUPS</h1>
            
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie 
                        data={AGE_GROUP} 
                        dataKey="percentage"
                        outerRadius={150}
                        innerRadius={60}
                        name="Percentage"
                        unit="%"
                        nameKey="age"
                        label={renderCustomizedLabel}
                        labelLine={false}
                    >
                        {AGE_GROUP.map((entry, index) => {
                            <Cell 
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        })}
                        
                    </Pie>
                    <Tooltip 
                        cursor={false}
                        // contentStyle={}
                        formatter={(value, name) => [`${value}%`, `Age - ${name}`]}
                        labelFormatter ={(label) => `Age: ${label}`}
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="toggleCodes" onClick={toggleCodes}>
                <p className="toggleCodeBtn">{showCode ? 'Close' : 'Show'}</p>
            </div>

            {showCode &&
                <Codes>
                    Hello
                </Codes>
            }
        </div>
    )
}

export default AgeGroup
