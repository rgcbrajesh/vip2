import React from 'react'
import Header from "./Header"
import Navbar from "./Navbar"
import Main from "./Main"
import Facility from "./Facility"
import Counter from "./Counter"
import Image from "./Image"
import Gallery from "./Gallery"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Main/>
      <Facility/>
      <Counter/>
      <Image/>
      <Gallery/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
