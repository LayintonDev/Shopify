/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Header() {
    return (
        <div>
            <header className="section-header ">
                <section className="header-main border-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-4">
                                <a href="#" className="brand-wrap">
                                    <img className="logo" src="/images/mylogo.png" />
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
                                        <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart" /></a>
                                        <span className="badge badge-pill badge-danger notify">0</span>
                                    </div>
                                    <div className="widget-header icontext">
                                        <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-user" /></a>
                                        <div className="text">
                                            <span className="text-muted">Welcome!</span>
                                            <div>
                                                <a href="#">Sign in</a>
                                                <a href="#"> | Register</a>
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
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Electronics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Phone/laptops</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Clothing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Baby &amp; Toys</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Fitness sport</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">home interiors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Furnitures</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> More</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Foods and Drink</a>
                                    <a className="dropdown-item" href="#">Home interior</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Category 1</a>
                                    <a className="dropdown-item" href="#">Category 2</a>
                                    <a className="dropdown-item" href="#">Category 3</a>
                                </div>
                            </li>
                        </ul>
                    </div> {/* collapse .// */}
                </div> {/* container .// */}
            </nav>
        </div>
    )
}
