import axios from "axios";
export const GET_WISHLIST = "GET_WISHLIST";
export const REMOVE_WISHLIST = "REMOVE_WISHLIST"

export function addWishList(mail, name) {
  return async function (dispatch) {
    try {
      const wish = await axios.post("/wishes/" + mail, name);
      console.log(wish)
      dispatch({ 
        type: GET_WISHLIST, 
        payload: wish.data 
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function removeWishList(name) {
  return async function (dispatch) {
    try {
      await axios.delete("/wishes/" + name);
      dispatch({ 
        type: REMOVE_WISHLIST,
        payload: name 
      })
    } catch (error) {
      console.log(error)
    }
  }
}
