import React, { useState } from 'react'
import './News.css'
import Arry from './NewsArry'
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
export default function News() {
  const [news, setNews] = useState(Arry);
  return (
    <>

      <Header />
      <Navbar />
      <div className="news-contanor">
        <h1 className='text-warning mt-5'>News</h1>
        <div className='news-div'>


          {
            news.map((elem) => {
              const { image, Heading, News, Date, } = elem;
              return (
                <div class="card">
                  <img src={image} class="card-img-top" alt="..." id='news-img' />
                  <div class="card-body">

                  </div>
                </div>
              )
            })
          }


        </div>
      </div>
      <Footer />
    </>
  )
}
