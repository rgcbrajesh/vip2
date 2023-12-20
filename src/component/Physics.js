import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Physics from "./img-logo/physic.jpg"

export default function Physicslab() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="container-fluid mb-5 mt-5">
                <div className='physics-container'>

                    <h2 style={{ color: "orange" }}>Physics Lab</h2>
                    <div className=' d-lg-flex d-md-block justify-content-between justify-content-center '>
                        <div>
                            <p> A school physics laboratory, or physics lab, is a specialized facility designed to provide students with hands-on experiences and experiments that complement theoretical learning in the field of physics. This facility is equipped with a range of instruments and apparatus to conduct experiments that explore fundamental principles of physics. Here is a description of some common elements found in a school physics lab:</p>
                            <p> <b> Experiment Stations:</b> Dedicated areas equipped with apparatus for conducting specific experiments, allowing students to apply theoretical concepts in a practical setting.</p>
                            <p> <b> Measurement Tools: </b> Instruments such as rulers, calipers, and micrometers for accurate measurements, reinforcing precision and accuracy in scientific investigations.</p>
                            <p> <b> Oscilloscopes and Meters: </b> Electronic equipment for measuring and analyzing electrical signals, voltage, current, and other electrical parameters.</p>

                        </div>
                        <div className='mt-lg-3 ms-lg-5 p-lg-3'><img width={350} height={250} src={Physics} alt="" /></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}