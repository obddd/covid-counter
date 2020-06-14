import React, { useState, useEffect } from 'react';
import './Chart.style.css';
import { fetchDailyData } from '../../api';

import { Line, Bar, Doughnut } from 'react-chartjs-2';

const Chart = ({
  data: { confirmed, recovered, deaths },
  country,
  todaysData,
}) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);
  console.log(todaysData);
  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current condition in ${country}` },
      }}
    />
  ) : null;
  const DoughnutChart = todaysData ? (
    <Doughnut
      data={{
        labels: ['Today Infected', 'Today Recovered', 'Today Deaths'],
        datasets: [
          {
            label: 'People',
            data: [
              todaysData.todayCases,
              todaysData.todayRecovered,
              todaysData.todayDeaths,
            ],
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
          },
        ],
      }}
      options={{
        title: { display: true, text: `Today's Summary in ${country}` },
      }}
    />
  ) : null;
  return (
    <div className="chart-container">
      {country ? (
          <div className='summary-container'>
          {barChart}
          {DoughnutChart}
        </div>
      ) : (
        LineChart
      )}
    </div>
  );
};

export default Chart;
