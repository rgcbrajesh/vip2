import React from 'react'
import Class from '../component/img-logo/smartclass.png'
import './Smart.css'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Smart() {
  return (
    <>
  <Header/>
  <Navbar/>
    <div className='smart-main mt-5'>
      <div className="smart-heading">
        <h1 className='text-warning'>Smart Class Facilities</h1>
        <p>Ask The Question, Learn With Perfection, Lead With Conviction</p>
      </div>

      <div className="smart-div">



        <div className="smart-text">
          <h3>Ask whatever you want</h3>
          <p>Smart Class is a technology-enabled classroom that enhances the
            learning experience of students by incorporating digital resources
            such as interactive whiteboards, digital projectors, multimedia content, and educational software.
            This technology is aimed at creating an engaging and interactive learning environment for students</p>
          <p>
            Smart Class is an innovative and effective solution for
            modern-day classrooms that enhances the learning experience of
            students and promotes a collaborative and interactive learning environment.
            With its numerous benefits,
            it has become an essential tool for educational institutions in today's digital age.
          </p>
        </div>


        <div className="smart-image">
          <img src={Class} alt="" width={'100%'} height={'350px'} />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
