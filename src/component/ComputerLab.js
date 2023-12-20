import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import computer from "./img-logo/computer-lab.png"
import Footer from './Footer'

export default function ComputerLab() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="container" id='computer-div'>
                <div className="row mt-5">
                    <div className="col-md-6 ">
                        <h1 className='text-warning mb-3' >Computer Lab</h1>
                        <i><h5>In todays era no one can remain untouched by the world of Computers. So we, at Greenway, have provided the best of Infra-structure and facilities in terms of imparting the best education of computers to our students.

                            It is well equipped modern Lab with latest innovation and technology being used in imparting computer education to the students.  The lab boasts of network running on windows server 8.0 on the dedicated server that is attached/networked to 32 individual workstations for students. All computers are upgraded with latest versions of Software.   </h5></i>
                    </div>
                    <div className="col-md-6 ">
                        <img src={computer} alt="" className='w-100 mt-5' />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
