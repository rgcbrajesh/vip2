import React from 'react'
import './Style.css'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Aims() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="aims-main">
                <h2>Aims And Objective</h2>
                <p>VISION INTERNATIONAL PUBLIC SCHOOL HARDA is fully recognized by the  (I.C.S.E.) Board . The course of the school studies are designed as per I.C.S.E. norms.</p>
                <p>It instills in the pupils the values of love, freedom, forgiveness, honesty and justice. It takes full cognizance of the fact that education by its very nature requires community style and environment and can not allow itself to be isolated from the social context. It aims at developing the body, mind spirit to the greatest extent.</p>
                  <p>It pays attention to the development of the society to engage in relationships marked by sincerity and self determination and to understand the complex political reality and to enter it in a constructive way. It imparts an appreciation of Indian heritage and enables the students to imbibe its culture and ethos for building a harmonious society, irrespective of differences of faith, language, caste and class and at the same time to remain open to positive elements of the other cultures.</p>
                <p>Education has a very wide connotation. Vision international public school seeks to work for the total development of the young. They are helped to discover their God given talents and work towards their fullest development in order to place them at the service of the society. It seeks to enable the young to search for the truth by training them to analyse reality by critical judgement, search for solutions and work out a synthesis. It is concerned with forming a conscience that is capable of discerning what is good and choosing it.</p>
            </div>
            <Footer/>
        </div>
    )
}