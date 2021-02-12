/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* Footer */}
            <section className="section-name padding-y bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Download app demo text</h3>
                            <p>Get an amazing app to make Your life easy</p>
                        </div>
                        <div className="col-md-6 text-md-right">
                            <a href="#"><img src="/public/images/appstore.png" height={40} /></a>
                            <a href="#"><img src="/public/images/appstore.png" height={40} /></a>
                        </div>
                    </div> {/* row.// */}
                </div>{/* container // */}
            </section>
            {/* ========================= SECTION  END// ======================= */}
            {/* ========================= FOOTER ========================= */}
            <footer className="section-footer border-top">
                <div className="container">
                    <section className="footer-top padding-y">
                        <div className="row">
                            <aside className="col-md col-6">
                                <h6 className="title">Brands</h6>
                                <ul className="list-unstyled">
                                    <li> <a href="#">Adidas</a></li>
                                    <li> <a href="#">Puma</a></li>
                                    <li> <a href="#">Reebok</a></li>
                                    <li> <a href="#">Nike</a></li>
                                </ul>
                            </aside>
                            <aside className="col-md col-6">
                                <h6 className="title">Company</h6>
                                <ul className="list-unstyled">
                                    <li> <a href="#">About us</a></li>
                                    <li> <a href="#">Career</a></li>
                                    <li> <a href="#">Find a store</a></li>
                                    <li> <a href="#">Rules and terms</a></li>
                                    <li> <a href="#">Sitemap</a></li>
                                </ul>
                            </aside>
                            <aside className="col-md col-6">
                                <h6 className="title">Help</h6>
                                <ul className="list-unstyled">
                                    <li> <a href="#">Contact us</a></li>
                                    <li> <a href="#">Money refund</a></li>
                                    <li> <a href="#">Order status</a></li>
                                    <li> <a href="#">Shipping info</a></li>
                                    <li> <a href="#">Open dispute</a></li>
                                </ul>
                            </aside>
                            <aside className="col-md col-6">
                                <h6 className="title">Account</h6>
                                <ul className="list-unstyled">
                                    <li> <a href="#"> User Login </a></li>
                                    <li> <a href="#"> User register </a></li>
                                    <li> <a href="#"> Account Setting </a></li>
                                    <li> <a href="#"> My Orders </a></li>
                                </ul>
                            </aside>
                            <aside className="col-md">
                                <h6 className="title">Social</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#"> <i className="fab fa-facebook" /> Facebook </a></li>
                                    <li><a href="#"> <i className="fab fa-twitter" /> Twitter </a></li>
                                    <li><a href="#"> <i className="fab fa-instagram" /> Instagram </a></li>
                                    <li><a href="#"> <i className="fab fa-youtube" /> Youtube </a></li>
                                </ul>
                            </aside>
                        </div> {/* row.// */}
                    </section> {/* footer-top.// */}
                    <section className="footer-bottom border-top row">
                        <div className="col-md-2">
                            <p className="text-muted"> © 2021 LayintonDev </p>
                        </div>
                        <div className="col-md-8 text-md-center">
                            <span className="px-2">info@LayintonDev.com</span>
                            <span className="px-2">+234-805-929-9184</span>
                            <span className="px-2">Ogberin, Fed Poly Ede</span>
                        </div>
                        <div className="col-md-2 text-md-right text-muted">
                            <i className="fab fa-lg fa-cc-visa" />
                            <i className="fab fa-lg fa-cc-paypal" />
                            <i className="fab fa-lg fa-cc-mastercard" />
                        </div>
                    </section>
                </div>{/* //container */}
                {/* ========================= FOOTER END // ========================= */}
            </footer>
        </div>

    )
}
