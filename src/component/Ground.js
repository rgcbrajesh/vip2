import React from 'react'
import './Style.css'
import ground from './img-logo/sportground.jpg'
import kids from "./img-logo/kidsground.jpg"
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Ground() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="ground-main">
                <div className="container">
                    <h1 className='playground' >School Play Ground</h1>
                    <div className="row">
                        <div className="ground">
                            <div className="col-md-6">
                                <div className="ground-text"> <p>
                                    <h1> Sport Ground</h1>
                                    Extensive and well maintained play fields of
                                    courts for volleyball, basketball, kabaddi,
                                    throw ball and badminton are available to
                                    students.
                                    throw ball and badminton are available to
                                    students.</p></div>
                            </div>
                            <div className="col-md-6 ms-5">
                                <img src={ground} alt="" width={'80%'} height={'90%'} />
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="ground">
                            <div className="col-md-6">
                                <div className="ground-text"> <p>
                                    <h1> Kids Ground</h1>
                                    Extensive and well maintained play fields of
                                    courts for volleyball, basketball, kabaddi,
                                    throw ball and badminton are available to
                                    students.
                                    throw ball and badminton are available to
                                    students.</p></div>
                            </div>
                            <div className="col-md-6 ms-5">
                                <img src={kids} alt="" width={'80%'} height={'90%'} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}
