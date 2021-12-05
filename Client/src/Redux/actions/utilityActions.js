import axios from 'axios';
export const LOGGER = 'LOGGER';

export function logger(data) {
    return function (dispatch) {
        axios.post("/users/login", data)
            .then(res => res.data)
            .then(r => dispatch({
                type: LOGGER,
                payload: r
            }))
    };
}

export function dislogg() {
    return {
        type: 'DISLOGG',
    }
}

export function generateOrders(data) {
    return function (dispatch) {
        dispatch({
            type: 'NEWORDER',
            payload: data
        })
    }
}

export function deleteOrders() {
    return function (dispatch) {
        dispatch({
            type: 'DELETEORDERS',
        })
    }
}

export function createOrderOnPayment(email, price, productId) {
    return function (dispatch) {
        axios.post('/orders', {
                data: {
                    email,
                    price,
                    productId
                }
            })
            .then(res => res.data)
            .then(r => {
                dispatch({
                    type: 'ORDERONPAYMENT',
                    payload: r
                })
            })
    }
}

export function productsBought(id, email) {
    return function (dispatch) {
        axios.post('/payment', {
                data: {
                    id,
                    email
                }
            })
            .then(res => res.data)
            .then(r => {
                dispatch({
                    type: 'ProductsId',
                    payload: id,
                    email
                })
            })
    }
}
export function getAdmins() {
    return function (dispatch) {
        axios.get("/spAdmin")
            .then(res => res.data)
            .then(r => dispatch({
                type: 'GET_ADMINS',
                payload: r
            }))
    };
}

export function getAdminWithEmail(email) {
    return function (dispatch) {
        axios.get(`/spAdmin/admin/${email}`)
            .then(res => res.data)
            .then(r => dispatch({
                type: 'GET_ADMIN_EMAIL',
                payload: r
            }))
    };
}

export function removeAdmin(email, solicitud) {
    return function (dispatch) {
        axios.post(`/spAdmin/${email}`, {
                solicitud
            })
            .then(res => res.data)
    }
}

export function getUsers() {
    return function (dispatch) {
        axios.get('/users')
            .then(r=>r.data)
            .then(res => dispatch({
                type: 'GET_USERS',
                payload: res
            }))
    }
}

export function delUser(email) {
    return function (dispatch) {
        axios.post(`/users/delUser/${email}`)
            .then(r=>r.data);
        axios.get('/users')
            .then(r=>r.data)
            .then(res => dispatch({
                type: 'GET_USERS',
                payload: res
            }))
    }
}

export function getOrdersForUserPanel() {
    return async function (dispatch) {
        const orders = await axios.get('http://localhost:3001/orders');
        dispatch({
            type: 'GET_ORDERS_FOR_USER',
            payload: orders.data
        });
    };
};

export const sendEmail = (email,games) => {
    return async function (dispatch) {
        axios.post(`/sendMail?email=${email}`,{games:games}).then((e)=>console.log(e))
    }
}
