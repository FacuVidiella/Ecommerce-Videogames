import axios from "axios";

export function getOrders() {
    return async function (dispatch) {
        const orders = await axios.get('http://localhost:3001/orders');
        dispatch({
            type: 'GET_ORDERS',
            payload: orders.data
        });
    };
};




