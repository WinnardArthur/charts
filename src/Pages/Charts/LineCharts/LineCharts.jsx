import React from 'react'
import DashedLineChart from '../../../components/charts/LineCharts/DashedLineChart'
import SimpleLineChart from '../../../components/charts/LineCharts/SimpleLineChart'
import TinyLineChart from '../../../components/charts/LineCharts/TinyLineChart'

const LineCharts = () => {
    return (
        <div className="lineCharts-Container chartContainer">
            <h1>LineChart</h1>
            <div className="lineCharts">
                <div className='item'>
                    <SimpleLineChart />
                </div>
                <div className="itemDivider"></div>
                <div className='item'>
                    <TinyLineChart />
                </div>
                <div className="itemDivider"></div>
                <div className='item'>
                    <DashedLineChart />
                </div>

            </div>
        </div>
    )
}

export default LineCharts
