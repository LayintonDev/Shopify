import React from 'react'

export default function Carousel() {
    return (
        <div className="col-lg-9">
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src={process.env.PUBLIC_URL + '/images/carosel.jpg'} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={process.env.PUBLIC_URL + '/images/carosel.jpg'} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={process.env.PUBLIC_URL + '/images/carosel.jpg'} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
