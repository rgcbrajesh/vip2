import React from 'react'
import './Style.css'
import img from './img-logo/schoolbuillding.jpg'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Build() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="building-container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="build-text">
                            <h1>School Building</h1>
                            <p>A vast expanse of 7 acres provides a perfect ambience for an aesthetically chartered
                                school building. The lung space, the open lawns are marked with a colourful bonanza of
                                fresh floral bounty.
                            </p>
                            <p>
                                An awe
                                inspiring infrastructure comprising of 50 well ventilated classrooms, science,
                                maths and language laboratories and libraries where books span time,
                                space, culture and genre. To aid  the process of learning we have a auditorium,
                                an AV room, one resource centre for teachers, a sports field, a basement to
                                scientific temperament and an art gallery to showcase the creative flair of the
                                facilitate physical fitness and indoor games, a discovery room to enhance the
                                students.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img ">
                            <img src={img} alt="" id='build-img' width={'500px'} height={'400px'} className='mb-5 mt-3' />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
