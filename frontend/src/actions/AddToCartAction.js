import axios from "axios"
import { ADD_TO_CART, ADD_TO_CART_FAIL, REMOVE_FROM_CART } from "../constants/CartConstants"
export const addToCart = (productId, qty) =>async(dispatch,getState)=>{
try {
    const {data} = await axios.get("/api/product/"+productId)
    dispatch({
        type:ADD_TO_CART,
        payload:{
            name:data.name,
            image:data.image,
            countInStock:data.countInStock,
            price:data.price,
            product:data._id,
            qty

        }
    })
} catch (error) {
    dispatch({
        type:ADD_TO_CART_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
}
localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))

}

export const removeFromCart = (productId ) => (dispatch, getState) => {
dispatch({
    type:REMOVE_FROM_CART,
    payload:productId
})
localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}