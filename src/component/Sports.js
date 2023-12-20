import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import sports from "./img-logo/sportroom.jpg"
import "./Style.css"

export default function Sports() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="container-fluid mb-5 mt-5">
                <div className='sport-container'>

                    <h2 style={{ color: "orange" }}>Sports Room</h2>
                    <div className=' d-lg-flex d-md-block justify-content-around justify-content-center '>
                        <div><p>
                            The school sports room is a vibrant and energetic space dedicated to physical activity, fitness, and sportsmanship. Equipped with a variety of sports equipment, it serves as a hub for students to engage in diverse athletic pursuits. Colorful sports gear lines the walls, creating an inviting atmosphere that encourages participation and teamwork. The room accommodates various activities, from cardio workouts to strength training, with well-maintained exercise machines and free weights. Mirrors and open spaces facilitate movement and technique practice, promoting a dynamic environment for skill development. The sports room is not just a place for physical exertion; it also fosters camaraderie, teamwork, and a healthy lifestyle. With its energetic ambiance, the school sports room is a cornerstone of promoting holistic well-being and instilling a lifelong appreciation for fitness and sports.</p></div>
                        <div className=' ms-lg-5 p-lg-3'><img width={350} src={sports} id='sport-img' alt="" /></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div >
    )
}