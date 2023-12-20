import React from 'react'
import "./Style.css"
import img2 from "./img-logo/main1.jpg"
import img1 from "./img-logo/main2.jpg"
import img3 from "./img-logo/main3.jpg"
import {Link} from "react-router-dom"

export default function Main() {
    return (
        <div className='containerMain' >
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="500">
                        <img src={img1} className="d-block w-100" alt="..." id='MainImg'  />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..."id='MainImg' />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..."id='MainImg' />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h1 className='one'>Welcome to High <br /> Smart Education <br /> Way of School</h1>
            <button className='btn-two'>VISIT CAMPUS</button>
            <Link to='/admission'>
            <button className='btn-three'>ADMISSION</button>
            </Link>
        </div>
        
    )
}
