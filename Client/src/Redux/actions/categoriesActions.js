import axios from "axios";
export const GETCATEGORIES = "GET_CATEGORIES";
export const CREATECATEGORY = "CREATECATEGORY"

//funcion para traer todos las categorias
export function getCategories() {
    return async function (dispatch) {
        var res = await axios.get("/categories")
        dispatch({
            type: GETCATEGORIES,
            payload: res.data
        });
    };
};

const createCategory = (category) => {
    return {
        type: CREATECATEGORY,
        category
    };
};
export const addCategory = (category) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`/products/category`, { ...category });
            dispatch(createCategory(res.data));
        } catch (err) {
            console.log(err);
        }
    };
};