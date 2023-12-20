import React, { useState } from 'react'
import './Gallery.css'
import Garry from './Arry'
import Gimg from '../component/img-logo/sportground.jpg'
import Header from "./Header"
import Navbar from "./Navbar"
// import Footer from "./Footer"


export default function Gallery() {

  const [item, setItem] = useState(Garry)

  const filterItem = (imgItem) => {
    const imageItem = Garry.filter((imgIlem) => {
      return imgIlem.catogoery === imgItem;

    });
    setItem(imageItem);
  }
  return (
    <div>
      <Header />
      <Navbar />
      <div className="galler-main mt-3">
        <div className="gallery-text">
          <h1>SCHOOL SPIRIT ON POINTS!</h1>
          <p>Learning,Laughing,Living....</p>
          <button id='more'>Rede More</button>
        </div>

        <div className="gallery-img">
          <img src={Gimg} alt="" width={"90%"}  height={"90%"}  />
        </div>
      </div>
      <div className="more-photo">
        <div className="button-group">
          <button id='btn' onClick={() => filterItem('Dance')}>CULTURE</button>
          <button id='btn' onClick={() => filterItem('Activity')}>ACTIVITY</button>
          <button id='btn' onClick={() => filterItem('Sport')}>SPORTS</button>
          <button id='btn' onClick={() => setItem(Garry)}>All</button>
        </div>
        <div className="more-gallery">
          <div className="gallery-photo">
            {

              item.map((elem) => {
                const { image, } = elem;
                return (

                  <img src={image} alt="Gallery" id='map-img' />

                )
              })
            }
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>


  )
}


