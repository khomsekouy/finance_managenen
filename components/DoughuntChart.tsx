'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughuntChart = ({accounts} : DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [20282, 29422, 48880],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
            }
        ],
        labels: ['Bank of America', 'Chase',]
    }
  return <Doughnut 
        data={data}
        options={{
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
   />
}

export default DoughuntChart