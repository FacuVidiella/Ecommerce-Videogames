import axios from "axios";
export const GETDETAIL = "GET_DETAIL";
export const RESET_DETAIL = "RESET_DETAIL";



export function getDetail (id) {
  console.log(id)
   return async function (dispatch) {
    try {
      let resp = await axios.get("/products/" + id)
      return dispatch({
      type:GETDETAIL,
      payload:resp.data
      })
    } catch(error) {
        console.log(error);
    }
   }
}

export function resetDetail () {
   return {
    type: RESET_DETAIL
   }
}

export const reviewAction = (review, email) => {
  console.log(email)
     return async function (dispatch) {
    try {
      await axios.post("/opinions/" + email, review)
    } catch (error) {
        console.error(error.message)
    }
  }
}
  




