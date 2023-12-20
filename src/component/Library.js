import React from 'react'
import LibraryI from './img-logo/library.jpeg'
import './Library.css'
import Header from './Header'
import Navbar from "./Navbar"
import Footer from './Footer'
export default function Library() {
  return (
    <>
   <Header/>
   <Navbar/>
    <div className='library-main mt-5'>
      <div className="smart-heading">
        <h1 className='text-warning'>Library Facilitie's</h1>
        <p>Ask The Question, Learn With Perfection, Lead With Conviction</p>
      </div>

      <div className="library-div">
        <div className="library-text">
          <h3 className='text-warning'>Library whatever you want</h3>
          <p>A library is a collection of books, and possibly other materials and media,
            that is accessible for use by its members and members of allied institutions.
            Libraries provide physical (hard copies) or digital (soft copies) materials,
            and may be a physical location, a virtual space, or both. A library's collection
            normally includes printed materials which may be borrowed, and usually also includes
            a reference section of publications which may only be utilized inside the premises</p>
          <p>
            Library buildings often provide quiet areas for studying, as well as common areas
            for group study and collaboration, and may provide
            public facilities for access to their electronic resources, such as computers and
            access to the Internet
          </p>
        </div>


        <div className="library-image">
          <img src={LibraryI} alt="" width={'100%'} height={'350px'} />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
