/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Product(props) {
    const products = props.products
    return (
        <div className="row products">

            {products.map((product) => {
                return (
                    <div key={product._id} className=" col-md-3 ">
                        <div className="card h-100">
                            <Link to ={"/product/" + product._id} ><img className="card-img-top" src={process.env.PUBLIC_URL + product.image} alt="" /></Link>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <Link to ={"/product/" + product._id}>{product.name}</Link>
                                </h4>
                                <Rating rating={product.rating} numReviews={product.numReviews} />
                                <p className="card-text">{product.desc}
                                </p>
                                <div className="price">
                                    <h5>${product.price}</h5>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to ={"/product/" + product._id} className="btn btn-primary">Add to cart </Link>
                            </div>
                        </div>
                    </div>

                )
            })}







        </div>
    )
}
