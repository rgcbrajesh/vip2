import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import chemistry from "./img-logo/chemistry.jpg"

export default function Chemistrylab() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="container-fluid mb-5 mt-5">
                <div className='chemistry-container'>

                    <h2 style={{ color: "orange" }}>Chemistry Lab</h2>
                    <div className=' d-lg-flex d-md-block justify-content-around justify-content-center '>
                        <div>
                            <p>
                                A school chemistry lab is a dynamic facility designed to immerse students in the fascinating world of chemical exploration. Equipped with a diverse array of apparatus and instruments, the lab provides dedicated workstations for hands-on experimentation. Glassware, including beakers and test tubes, facilitates precise measurements and mixing for various chemical reactions. Safety is paramount, with students utilizing protective gear and the lab featuring emergency equipment.
                            </p>
                            <p>The lab includes specialized areas for experiments in analytical chemistry, organic chemistry, and inorganic chemistry. Students engage with state-of-the-art equipment such as spectrophotometers, centrifuges, and pH meters to analyze and manipulate substances. Fume hoods and ventilation systems ensure a safe environment when working with volatile or hazardous materials.
                            </p>

                        </div>
                        <div className=' ms-lg-5 p-lg-3'><img width={350} height={250} id='chemistry-img' src={chemistry} alt="" /></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
