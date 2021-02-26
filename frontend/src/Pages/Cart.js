/* eslint-disable array-callback-return */
import React from 'react';
import { addToCart, removeFromCart, } from '../actions/AddToCartAction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from "../components/MessageBox"
import { Link } from "react-router-dom"
// import { useState } from 'react';

const Cart = (props) => {
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    const dispatch = useDispatch()
    const productId = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(
            removeFromCart(id)
        )
    }
    const checkOutHandler = () => {
        //TODO: CHECKOUT ACTION
        props.history.push("/sign-in?redirect=shipping")
    }

    return (

        <div>
            {/* <div className="jumbotron color-grey-light mt-70">
                <div className="d-flex align-items-center h-100">
                    <div className="container text-center py-5">
                        <h1 >My cart</h1>
                    </div>
                </div>
            </div> */}

            <div className="container">
                {/*Section: Block Content*/}
                <section className="mt-5 mb-4">
                    {/*Grid row*/}
                    <div className="row">
                        {/*Grid column*/}
                        <div className="col-lg-8">
                            {/* Card */}
                            <div className="card wish-list mb-4">
                                <div className="card-body">
                                    <h5 className="mb-4">Cart (<span>{cartItems.length}</span> items)</h5>
                                    {
                                        cartItems.length === 0 ? (
                                            <MessageBox>
                                                Your Cart Is Empty. <Link to="/">Go Shopping</Link>
                                            </MessageBox>
                                        ) :

                                            cartItems.map((item) => {
                                                return (
                                                    <div className="row mb-4">
                                                        <div className="col-md-5 col-lg-3 col-xl-3">
                                                            <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                                                <img className="img-fluid w-100" src={process.env.PUBLIC_URL + item.image} alt={item.name} />
                                                                <a href="#!">
                                                                    <div className="mask waves-effect waves-light">
                                                                        <img className="img-fluid w-100" src={process.env.PUBLIC_URL + item.image} alt={item.name} /> />
                                                        <div className="mask rgba-black-slight waves-effect waves-light" />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-7 col-lg-9 col-xl-9">
                                                            <div>
                                                                <div className="d-flex justify-content-between">
                                                                    <div>
                                                                        <h5>{item.name}</h5>
                                                                        {/* <p className="mb-3 text-muted text-uppercase small">Hoodie - red</p>
                                                        <p className="mb-2 text-muted text-uppercase small">Color: red</p>
                                                        <p className="mb-3 text-muted text-uppercase small">Size: M</p> */}
                                                                    </div>
                                                                    <div>
                                                                        <div className="def-number-input number-input safari_only mb-0 w-100">
                                                                            <select value={item.qty} onChange={e => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                                                {
                                                                                    [...Array(item.countInStock).keys()].map((x) => {
                                                                                        return <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                                                    })
                                                                                }
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div>
                                                                        <button type="button" onClick={() => removeFromCartHandler(item.product)} className="card-link-secondary small text-uppercase mr-3"><i className="fas fa-trash-alt mr-1" /> Remove item </button>
                                                                        {/* <Link to ="#!" type="button" className="card-link-secondary small text-uppercase"><i className="fas fa-heart mr-1" /> Move to wish list </a> */}
                                                                    </div>
                                                                    <p className="mb-0"><span><strong>${item.price}</strong></span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                    }
                                    <hr className="mb-4" />

                                    <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1" /> Do not delay the purchase, adding
              items to your cart does not mean booking them.</p>
                                </div>
                            </div>
                            {/* Card */}
                            {/* Card */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="mb-4">Expected shipping delivery</h5>
                                    <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
                                </div>
                            </div>
                            {/* Card */}
                            {/* Card */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="mb-4">We accept</h5>
                                    <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                                    <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                                    <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                                    <img className="mr-2" width="45px" src="https://z9t4u9f6.stackpathcdn.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png" alt="PayPal acceptance mark" />
                                </div>
                            </div>
                            {/* Card */}
                        </div>
                        {/*Grid column*/}
                        {/*Grid column*/}
                        <div className="col-lg-4">
                            {/* Card */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="mb-3">SUB TOTAL</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Total No Of Items
                <span>{cartItems.reduce((a, c) => a + c.qty, 0)} items</span>
                                        </li>
                                        {/* <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                <span>Gratis</span>
                                        </li> */}
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>The total amount </strong>
                                                <strong>
                                                    <p className="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span><strong>${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</strong></span>
                                        </li>
                                    </ul>
                                    <button type="button"  onClick ={checkOutHandler} disabled={cartItems.length === 0} className="btn btn-primary btn-block waves-effect waves-light">go to
              checkout</button>
                                </div>
                            </div>
                            {/* Card */}
                            {/* Card */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Add a discount code (optional)
              <span><i className="fas fa-chevron-down pt-1" /></span>
                                    </a>
                                    <div className="collapse" id="collapseExample">
                                        <div className="mt-3">
                                            <div className="md-form md-outline mb-0">
                                                <input type="text" id="discount-code" className="form-control font-weight-light" placeholder="Enter discount code" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card */}
                        </div>
                        {/*Grid column*/}
                    </div>
                    {/*Grid row*/}
                </section>
                {/*Section: Block Content*/}
            </div>

        </div>

    );
}

export default Cart;
