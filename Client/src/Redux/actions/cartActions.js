

//funcion para traer todos las categorias
export function openCart() {
    return function (dispatch) {
        dispatch({
            type: 'CART_OPEN',
        });
    };
};

export function closeCart() {
    return function (dispatch) {
        dispatch({
            type: 'CART_CLOSE',
        });
    };
};

export function addCartProduct(payload) {
    return function (dispatch) {
        dispatch({
            type: 'CART_ADD',
            payload: payload
        });
    };
};

export function addCant(payload){
    return function (dispatch) {
        dispatch({
            type: "ADD_CANT",
            payload: payload
        })
    }
}

export function lessCant(payload){
    return function (dispatch) {
        dispatch({
            type: "LESS_CANT",
            payload: payload
        })
    }
}

export function removeCartProduct(payload) {
    return function (dispatch) {
        dispatch({
            type: 'CART_REMOVE',
            payload:payload
        });
    };
};


export function emptyCart (){
    return function (dispatch){
        dispatch({
            type: 'EMPTY_CART'
        })
    }
}