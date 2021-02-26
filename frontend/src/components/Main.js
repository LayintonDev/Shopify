/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productListAction'
import Carousel from './Carousel'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import Product from './Product'
import SelectMarket from './SelectMarket'


export default function Main() {
    const dispatch = useDispatch()
    const productLists = useSelector((state) => state.productLists)
    const { loading, error, products } = productLists
    useEffect(() => {
        dispatch(listProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) :

                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <SelectMarket />
                                <Carousel />
                                <div className="pplabel">
                                    <h2>Popular Products</h2>
                                </div>

                                <Product products={products} />


                                {/* /.row */}
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.col-lg-9 */}
                    </div>}
        </div>

    )
}
