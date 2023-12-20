import React from 'react'
import "./Style.css"
import computer from "./img-logo/computer.gif"
import football from "./img-logo/football.gif"
import bus from "./img-logo/bus2.gif"
import camera from "./img-logo/camera.gif"
import teacher from "./img-logo/teacher.gif"
import yoga from "./img-logo/yoga.gif"

export default function Facility() {
    return (
        <div>

            
            <div className="facility-div">
                <h1 id='facility' >OUR FACILITY</h1>
                <div className='facility-item'>
                    <div className="item"> <img src={computer} alt="gif" id='img' />
                        <p>Computer Lab</p></div>
                    <div className="item">   <img src={football} alt="gif" id='img'  />
                        <p>Sports Activity</p></div>
                    <div className="item">  <img src={bus} alt="gif" id='img'  />
                        <p>Bus Facility</p></div>
                    <div className="item">   <img src={camera} alt="gif" id='img'  />
                        <p>CCTV Coverage</p></div>
                    <div className="item">   <img src={teacher} alt="gif" id='img'  />
                        <p>Qualified Teacher</p></div>
                    <div className="item">   <img src={yoga} alt="gif"  id='img' />
                        <p>Yoga & Meditation</p></div>
                </div>
            </div>
        </div>
    )
}
