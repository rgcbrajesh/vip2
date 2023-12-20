import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import bio from "./img-logo/biolab.jpg"

export default function Biolab() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="container-fluid mb-5 mt-5">
                <div className='bio-container'>

                    <h2 style={{ color: "orange" }}>Bio Lab</h2>
                    <div className=' d-lg-flex d-md-block justify-content-around justify-content-center '>
                        <div><p>
                            Our school is fortunate to have a well-equipped biology laboratory, a space that plays a pivotal role in fostering hands-on scientific exploration and discovery. The bio lab is equipped with a variety of essential tools and instruments that enable students to delve into the fascinating world of biology. From high-powered microscopes that unveil the intricacies of cellular structures to an assortment of glassware for precise measurements and experiments, the lab provides a dynamic environment for students to engage in practical learning.</p>
                            <p>Safety is a top priority in our bio lab, with students adhering to established protocols and utilizing protective gear during activities such as dissections and chemical experiments. The lab also houses a collection of preserved specimens and anatomical models, offering tangible examples for a deeper understanding of biological concepts.</p>
                        </div>
                        <div className=' ms-lg-5 p-lg-3'><img width={350} id='bio-img' src={bio} alt="" /></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div >
    )
}