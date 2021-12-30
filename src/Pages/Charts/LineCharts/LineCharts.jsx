import React from 'react'
import SimpleLineChart from '../../../components/charts/LineCharts/SimpleLineChart'

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
                    <SimpleLineChart />
                </div>

                <div className="itemDivider"></div>

            </div>
        </div>
    )
}

export default LineCharts
