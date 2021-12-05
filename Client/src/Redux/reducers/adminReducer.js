

const initialState = {

    orders:[],
    admins: [],
    admin:[],
}

export default function adminReducer(state = initialState, action) {

    switch (action.type) {
        case "GET_ORDERS":
            return {
                ...state,
                orders: action.payload
            }
        case 'GET_ADMINS':
            return {
                ...state,
                admins: action.payload
            }

        case 'GET_ADMIN_EMAIL':
            return {
                ...state,
                admin:action.payload
            }
        case 'DEL_ADMIN_REQUEST':
            return {
                ...state
            }  
        case 'DELETE_ORDERS':
            const index = action.payload;
            return{
                ...state,
                orders: state.orders.filter((item, index) => index !== action.payload)
            }
        default: return state;
    }

}