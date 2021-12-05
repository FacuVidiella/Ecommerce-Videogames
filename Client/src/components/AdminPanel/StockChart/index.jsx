import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import theme from '../../styles/theme';
import orderData from '../functions';


const StockChart = ({ state }) => {

    const result = orderData(state, 'money')

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [

                    '#a03f54',
                    '#06acac',
                    '#c8a03a',
                    '#812e7a',
                    '#3c1f75',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <h4>Stock de juegos</h4>
            <Doughnut data={data} options={{ maintainAspectRatio: false }} />
        </>
    )

};

export default StockChart;