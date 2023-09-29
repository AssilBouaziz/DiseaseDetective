import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
function PieChart(props) {
  let className = [""]
  if (props.className) {
      className.push(props.className)
      
  }
  return (
    <Pie className={className.join(' ')} data={props.data} />
  )
}

export default PieChart