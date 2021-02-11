/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { productData } from "../productsData"
import Rating from './Rating'

export default function Product() {
    return (
        <div className="row products">

            {productData.products.map((product) => {
                return (
                    <div key={product._id} className=" col-md-3 ">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src={product.image} alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">{product.name}</a>
                                </h4>
                                <Rating rating={product.rating} numReviews={product.numReviews} />
                                <p className="card-text">{product.desc}
                                </p>
                                <div className="price">
                                    <h5>${product.price}</h5>
                                </div>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Add to cart </a>
                            </div>
                        </div>
                    </div>

                )
            })}







        </div>
    )
}
