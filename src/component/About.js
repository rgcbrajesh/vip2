import React, { useState } from 'react'
import Dogne from "./img-logo/dogneji.jpg"
import Kunal from './img-logo/kunaldogne-removebg-preview.png'
import "./Style.css"


export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);

  };

  return (
    <>

      <h1 className='about-text' >ABOUT-US</h1>
      <div className='main'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="dogneji">
                <div id='div-name' >


                  <img src={Dogne} alt="" width={'500px'} height={'500px'} id='img-about' />

                  <div className="row" id='name'>
                    <div className="col-md-12">

                      <h1  >Dr. Ramkishor Dogne</h1>
                      <div>
                        <button id='btn-message' onClick={toggleVisibility}>
                          {isVisible ? 'Hide Message' : 'Show Message'}
                        </button>
                        {isVisible && <div className="pera-m">
                          <p><h2>From the Desk of the Founder</h2>
                            <p>As the Founder of the society I am very happy to share thoughts with you.
                              Truly inspired by the visions of the eminent educationists of our country
                              and rest of the globe, we have decided to come up with a significant and
                              creative step in school education. </p>
                          </p>
                        </div>}

                      </div>

                    </div>
                  </div>
                </div>
                <div className="text">
                  <h1>Dr. Ramkishor Dogne</h1>
                  <h2>From the Desk of the Founder</h2>
                  <p>As the Founder of the society I am very happy to share thoughts with you.
                    Truly inspired by the visions of the eminent educationists of our country
                    and rest of the globe, we have decided to come up with a significant and
                    creative step in school education. I am very delighted that you are considering
                    “Vision International Public School” as a place of learning and growth for your
                    child. We will be dedicated to inculcate strong moral values, qualities, honesty,
                    discipline, creativity, benevolence beside academic excellence.
                    We seek your vital corporation and a great support for all time to accomplish the high standard.</p>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">


              <div className="dogneji">
                <div id='div-name' >
                  <img src={Kunal} alt="" width={'500px'} className='mt-5' height={'500px'} id='img-about' />
                  <div className="row" id='name'>
                    <div className="col-md-12">

                      <h1 className='ms-5' > Kunal Dogne</h1>
                      <div>
                        <button id='btn-message' onClick={toggleVisibility}>
                          {isVisible ? 'Hide Message' : 'Show Message'}
                        </button>
                        {isVisible && <p><h2>From the Desk of the Director</h2>
                          <p>Welcome to the school, our commitment at Vision International Public School Harda is to provide safe and positive environment that will make students to become creative, thinkers and inspired learners</p>
                        </p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text">
                  <h1>Kunal Dogne</h1>
                  <h2>From the Desk of the Director</h2>
                  <p>Welcome to the school, our commitment at Vision International Public School Harda is to provide safe and positive environment that will make students to become creative, thinkers and inspired learners.
                    This is our third year and we would like to set high expectations for our students in regards to academic performance, participation in co curricular activities as well as responsible citizens at school and in the community. Our focus is to train children to become autonomous learners. Our earnest efforts is to provide students with an education that allows them to recognise and realise their “dreams” and skills and to be able to Ignite the passion to excel.</p>
                </div>
              </div>

            </div>


            <div class="carousel-item" data-bs-interval="3000">

              <div className="dogneji">
                <div id='div-name' >
                  <img src="" alt="" className='SoniSir' id='img' />
                  <div className="row" id='name'>
                    <div className="col-md-12">

                      <h1>Mr. Dev Soni </h1>
                      <div>
                        <button id='btn-message' onClick={toggleVisibility}>
                          {isVisible ? 'Hide Message' : 'Show Message'}
                        </button>
                        {isVisible && <p><h2>From the Desk of the Principle</h2>
                          <p>When educating the minds of our youth, we must not forget to educate their hearts”. As the Principal of Vision International Public School Harda we focus on discovering, developing and drawing out the hidden talents lying inside in all of our students.</p>
                        </p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text">
                  <h1>Mr. dev Soni</h1>
                  <h2>From the Desk of the Principle</h2>
                  <p> When educating the minds of our youth, we must not forget to educate their hearts”. As the Principal of Vision International Public School Harda we focus on discovering, developing and drawing out the hidden talents lying inside in all of our students. As I think, value based education that has life skills weaved into its very curriculum is the need of the hour. It is my strong belief that team efforts, role of a teacher and a healthy parent-teacher relationship is the only path that leads towards a bright future full of opportunities and success for every child entrusted to our care.
                    So let us then work together towards raising ethical and happy children and send them out into the world as the flag bearers of a brighter tomorrow, citizens of the world and the pride of our nation.</p>
                </div>
              </div>

            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}
