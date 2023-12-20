import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import music from "./img-logo/musicroom.jpg"
import "./Style.css"

export default function Musicroom() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="container-fluid mb-5 mt-5">
                <div className='music-container'>

                    <h2 style={{ color: "orange" }}>Music Room</h2>
                    <div className=' d-lg-flex d-md-block justify-content-around justify-content-center '>
                        <div>
                            <p>
                                A school music room is a dedicated space designed to inspire and cultivate musical creativity among students. This specialized facility is equipped with a variety of instruments and resources to support music education and practice. Key features of a school music room facility include:
                            </p>
                            <p> <b> Instruments:</b> A diverse array of musical instruments is provided to cater to different genres and styles. This may include pianos, keyboards, guitars, drums, brass instruments, string instruments, and more.
                            </p><p><b> Sound System:</b> In addition to traditional instruments, a school music room may be equipped with a sound system for playback and amplification. This allows students to practice with recorded accompaniments or to perform for an audience.</p>
                            <p>  <b> Sheet Music and Learning Resources:</b> A collection of sheet music, songbooks, and educational materials is available to support students in their learning and practice. This may include music stands for holding sheet music.</p>
                            <p></p>
                        </div>
                        <div className=' mt-lg-3 ms-lg-5 p-lg-3'><img width={350} className='music-img' src={music} alt="" /></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
    }