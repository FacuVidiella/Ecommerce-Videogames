import React from 'react';
import { Line } from 'react-chartjs-2';
import theme from '../../styles/theme';
import orderData from '../functions';
import LineTableComponent from "../Table/lineComponent.jsx";


const LineChart = ({ state }) => {

  const result = orderData(state, 'sales')

  const data = {

    labels: result.months,
    datasets: [
      {
        label: 'Ventas en este mes',
        data: result.sales,
        fill: false,
        backgroundColor: `${theme.colors.terGreen}`,
        borderColor: `${theme.colors.mainGreen}`,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <>
      <h4>Ventas por mes</h4>
      <Line data={data} options={options} />
      <hr></hr>
      <h4>Total</h4>
      <LineTableComponent result={result} />
    </>
  )

};

export default LineChart;