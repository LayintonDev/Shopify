/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Carousel from './Carousel'
import Product from './Product'
import SelectMarket from './SelectMarket'


export default function Main() {
    return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <SelectMarket />
                    <Carousel />
                    <div className="pplabel">
                        <h2>Popular Products</h2>
                    </div>

                    <Product />


                    {/* /.row */}
                </div>
                {/* /.row */}
            </div>
            {/* /.col-lg-9 */}
        </div>

    )
}
