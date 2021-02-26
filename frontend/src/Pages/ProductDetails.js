/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../actions/productDetailsAction'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import Rating from '../components/Rating'





export default function ProductDetails(props) {
    const [qty, setQty] = useState(1)
    const productId = props.match.params.id
    const dispatch = useDispatch()
    const detailsProducts = useSelector((state) => state.detailsProducts)
    const { loading, error, product } = detailsProducts

    useEffect(() => {
        dispatch(detailsProduct(productId))

    }, [dispatch, productId])
    const addToCartHandler = () => {
        props.history.push("/cart/" + productId + "?qty=" + Number(qty))
    }


    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) :

                    < div className="container" >



                        {/* Portfolio Item Heading */}
                        < h3 className="my-4" >Product Details  </h3 >

                        {/* Portfolio Item Row */}
                        < div className="row" >
                            <div className="col-md-6">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + product.image} alt={product.name} />
                            </div>
                            <div className="col-md-3" id="productDetailsRow">

                                <ul>
                                    <li><h3>{product.name}</h3></li>
                                    <li><Rating rating={product.rating} numReviews={product.numReviews}></Rating></li>
                                    <li className="details">Price: ${product.price}</li>
                                    <li className="details">Description:<p>{product.desc}</p></li>
                                    <li><img className="gallImg" src={process.env.PUBLIC_URL + product.image} alt="gallery img"></img></li>

                                </ul>

                            </div>
                            <div className="col-md-3">
                                <div className="card card-body">
                                    <ul>
                                        <li className="details">
                                            <div className="row">
                                                <div className="price">Price</div>
                                                <div className="price">${product.price}</div>

                                            </div>
                                        </li>
                                        <li className="details">
                                            <div className="row">
                                                <div className="status">Status</div>
                                                <div>
                                                    {product.countInStock > 0 ? (<span className="success">In Stock</span>)
                                                        : (<span className="danger">Unavailable</span>)}
                                                </div>

                                            </div>
                                        </li>
                                        {
                                            product.countInStock > 0 && (
                                                <>
                                                    <li>
                                                        <div className="row">
                                                            <div className="qty">Qty</div>
                                                            <div>
                                                                <select value={qty} onChange={e => setQty(e.target.value)}>
                                                                    {
                                                                        [...Array(product.countInStock).keys()].map((x) => {
                                                                            return <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                                        })
                                                                    }
                                                                </select>

                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button onClick={addToCartHandler} className="btn btn-primary">Add To Cart</button>
                                                    </li>
                                                </>
                                            )
                                        }

                                    </ul>
                                </div>
                            </div>

                        </div >
                        {/* /.row */}
                        {/* Related Projects Row */}
                        <h3 className="my-4">Related Products</h3>
                        <div className="row">
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + product.image} alt="" />
                                </a>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + product.image} alt="" />
                                </a>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + product.image} alt="" />
                                </a>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + product.image} alt="" />
                                </a>
                            </div>
                        </div>
                        {/* /.row */}
                    </div >}

        </div>


    )




}




