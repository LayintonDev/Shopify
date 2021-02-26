import { compose, applyMiddleware, createStore, combineReducers } from "redux"
import thunk from "redux-thunk"
import { detailsProductReducer } from "./reducers/productDetailsReducer"
import { productListReducer } from "./reducers/productReducer"
import { addToCartReducer } from "./reducers/CartReducer"



const initialState = {
    cart:{
        cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]
}
}

const reducer = combineReducers({
    cart: addToCartReducer,
    productLists: productListReducer,
    detailsProducts: detailsProductReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store

