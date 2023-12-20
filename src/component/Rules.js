import React from 'react'
import './Style.css'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Rules() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="Rules-main">
                <h1>Rules And Regulations</h1>
                <h4>PARENTS-TEACHERS MEETINGS</h4>
                <p>Parents teachers Meeting are arranged periodically and information about the same will be communicated. The parents should make it a point to take this opportunity to discuss the progress of their children.</p>
                <p>However should any parent feel that he / she needs to meet the Principal or any other teacher with regard to the work or conduct of his / her child or any problem faced by the child he / she is encouraged to do so after making an appointment with the Principal or teacher concerned.</p>
                <p>The school administration will take serious view of parents who regularly absent themselves from such meetings or show indifference towards their childrenâ€™s education</p>
            </div>
            <Footer />
        </div>
    )
}
