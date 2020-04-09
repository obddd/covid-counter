import React, { useState, useEffect } from 'react';
import './Chart.style.scss';
import { fetchDailyData } from '../../api'

import { Line } from 'react-chartjs-2';



const Chart = () => {
    const [dailyData, setDailyData] =useState([]);
    useEffect(() => {
        const fetchAPI = async() => {
            setDailyData( await fetchDailyData());
        }
        fetchAPI()
    }, [])

    const LineChart = (
        <Line 
        data = {{
            labels:dailyData.map(({date}) => date),
            datasets: [{
                data: dailyData.map(({confirmed}) => confirmed),
                label:'Infected',
                borderColor: '#3333ff',
                fill: true
            }, {
                data: dailyData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true
            }]
        }}
        />
    )

    return(
        <div className='chart-container'>
            {LineChart}
        </div>
    )
}

export default Chart;