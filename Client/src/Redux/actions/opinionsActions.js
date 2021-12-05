import axios from "axios";

export const GET_RATINGS = "GET_RATINGS";


export function getRatings (payload) {
    return {
        type: GET_RATINGS,
        payload
    }
}

export function removeReview (email,body) {
    console.log(body)
    return async function (dispatch) {
        try {
            /* const opinions =  */axios.put("/adRoutes/ropinion/"+ email, body)
        } catch (error) {
            console.log(error)
        }
        
    }
}