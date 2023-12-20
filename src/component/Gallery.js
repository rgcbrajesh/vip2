import React from 'react'
import "./Style.css"
import img1 from "./img-logo/sports.jpeg"
import img2 from "./img-logo/dance.jpg"
import img3 from "./img-logo/fancy.jpg"
import { Link } from 'react-router-dom'

export default function Gallery() {
    return (
        <div>
            <h1 className='event-gallery' >Event Gallery</h1>
            <div className='gallery-main-div'>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 " >
                            <h1 className=' ms-3' id='quote'>SCHOOL SPIRIT ON <br /> POINTS !</h1>
                            <h3 className='fw-normal ms-3'>Learning,Laughing,Living...</h3>
                            <Link to='gallery1' > 
                            <button className='gallery-explore-btn' >Explore</button>
                            </Link>
                        </div>
                        <div className="col-md-6 ">
                            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="300">
                                        <img src={img3} className="d-block w-100" alt="..." id='event-img'/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img2} className="d-block w-100" alt="..."id='event-img'/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img1} className="d-block w-100" alt="..."id='event-img'/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
