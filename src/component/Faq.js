import React from 'react'
import './Style.css'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Faq() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="faq-main">
                <h2>Frequently Asked Questions (FAQs)</h2>
                <h6>What is the admission procedure?</h6>
                <p>A: For those seeking admissions, an informal interaction will be conducted in which pupil and both the parents have to be present. The final decision of the admission committee will be binding.</p>
                <h6>What is the fee structure?</h6>
                <p>A: Please call the school for fee details </p>
                <h6>What curriculum will the school follow?</h6>
                <p>A: SPS follows CBSE curriculum </p>
                <h6>How many terms will the school have?</h6>
                <p>A: We will be having only two semesters as per ICSE </p>
                <h6>What will be the school timings?</h6>
                <p>A: School timings are: 7:15 am to 1:30 pm </p>
                <h6>What is the kind of security offered to the students?</h6>
                <p>A: The school has installed CCTV in all classrooms. Students are always accompanied by teachers or the class monitors when they are moving from one block to the other.</p>
                <h6>How many students will be there per division?</h6>
                <p>A: We strive to maintain a ratio of 30 Students in each class</p>
            </div>
            <Footer/>
        </div>
    )
}