/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

export default function Header() {
    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart
    return (
        <div>
            <header className="section-header ">
                <section className="header-main border-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-4">
                                <a href="/" className="brand-wrap">
                                    <img className="logo" src={process.env.PUBLIC_URL + '/images/myLogo.png'} />
                                </a> {/* brand-wrap.// */}
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <form action="#" className="search">
                                    <div className="input-group w-100">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit">
                                                <i className="fa fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                </form> {/* search-wrap .end// */}
                            </div> {/* col.// */}
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="widgets-wrap float-md-right">
                                    <div className="widget-header  mr-3">
                                        <Link to="/cart" className="icon icon-sm rounded-circle border">
                                            <i className="fa fa-shopping-cart" /></Link>
                                            {cartItems.length > 0 &&(
                                                <span className="badge badge-pill badge-danger notify">{cartItems.length}</span>
                                            )}
                                        
                                    </div>
                                    <div className="widget-header icontext">
                                        <Link to ="/my-profile" className="icon icon-sm rounded-circle border"><i className="fa fa-user" /></Link>
                                        <div className="text">
                                            <span className="text-muted">Welcome!</span>
                                            <div>
                                                <Link to="/sign-in">Sign in</Link>
                                                <Link to="/register"> | Register</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* widgets-wrap.// */}
                            </div> {/* col.// */}
                        </div> {/* row.// */}
                    </div> {/* container.// */}
                </section> {/* header-main .// */}
            </header> {/* section-header.// */}
            <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">

                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Electronics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Phone/Laptops</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Clothing</Link>
                            </li>
                            <li className="nav-item">

                                <Link className="nav-link" to="/">Baby &amp; Toys</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Fitness &amp;Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home Interiors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Furnitures</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> More</a>
                                <div className="dropdown-menu">

                                    <Link className="dropdown-item" to="/">Foods and Drink</Link>
                                    <Link className="dropdown-item" to="/">Foods and Drink</Link>
                                    <div className="dropdown-divider" />
                                    <Link className="dropdown-item" to="/">Category 1</Link>
                                    <Link className="dropdown-item" to="/">Category 2</Link>
                                    <Link className="dropdown-item" to="/">Category 3</Link>
                                </div>
                            </li>
                        </ul>
                    </div> {/* collapse .// */}
                </div> {/* container .// */}
            </nav>
        </div>
    )
}
