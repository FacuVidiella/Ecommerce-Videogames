
import React from 'react';
import { Bar } from 'react-chartjs-2';
import theme from '../../styles/theme';
import orderData from '../functions';
import BarTableComponent from '../Table/barComponent';


const BarChart = ({ state }) => {

    const result = orderData(state, 'money')

    const data = {

        labels: result.months,
        datasets: [
            {
                label: 'Dinero recaudado este mes',
                data: result.sales,
                fill: true,
                backgroundColor: `${theme.colors.mainGreen}`,
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
            <h4>Ganancias por mes</h4>
            <Bar data={data} options={options} />
            <hr></hr>
            <h4>Total</h4>
            <BarTableComponent result={result}/>
        </>
    )

};

export default BarChart;