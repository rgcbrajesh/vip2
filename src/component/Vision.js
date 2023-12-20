import React from 'react'
import './Style.css'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
export default function Vision() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="Vision-main ">
                <h1>Vision And Mission</h1>
                <i>
                    <p>We are committed to providing a positive, safe and stimulating environment for children to learn, where all are valued. We intend that all children should enjoy their learning, achieve their potential and become independent life-long learners.</p>
                    <p>We believe that a happy child is a successful one. We are committed to providing a positive, safe and stimulating environment for children to learn, where all are valued. We intend that all children should enjoy their learning, achieve their potential and become independent life-long learners.</p>
                    <p>We foster our students’ love for learning, encourage them to try new and exciting things, and give them a solid foundation to build on.
                        Our vision is to develop well rounded, confident and responsible individuals who aspire to achieve their full potential. We will do this by providing a welcoming, happy, safe, and supportive learning environment in which everyone is equal and all achievements are celebrated.
                    </p>
                </i>
            </div>
            <Footer />
        </div>
    )
}
