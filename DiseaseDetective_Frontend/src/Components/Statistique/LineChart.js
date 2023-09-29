import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
function LineChart(props) {
     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' 
          },
          title: {
            display: true,
            text: 'Statistique',
          },
        },
      };
      const today= new Date()
      const date =today.getDay()
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const labels = [daysOfWeek[(date+1)%7], daysOfWeek[(date+2)%7], daysOfWeek[(date+3)%7], daysOfWeek[(date+4)%7], daysOfWeek[(date+5)%7], daysOfWeek[(date+6)%7], daysOfWeek[date]+' (Today)'];
       const data = {
        labels,
        datasets: [
          {
            label: 'Number of visitors',
            data: props.data.connections ? props.data.connections.slice().reverse() : [],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          
          {
            label: 'Number of surveys',
            data: props.data.connections ? props.data.surveysPos.map((num, i) => num + props.data.surveysNega[i]).reverse() : [],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
  let className = [""]
  if (props.className) {
      className.push(props.className)
      
  }
  return (
    <Line className={className.join(' ')} options={options} data={data} />
  )
}

export default LineChart