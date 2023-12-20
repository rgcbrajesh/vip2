import React from 'react'
import './Style.css'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Cunduct() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="cunduct-main">
                <h2>School Conduct At A Glance</h2>
                <ul>
                    <li>80% attendance is a must for every student.</li>
                    <li>School Calendar to be brought to School daily without fail.</li>
                    <li>Punctuality is a must and late comers will be suitably checkedwith corrective measures.</li>
                    <li>Students are discouraged to come to school by private van using gas kits or vans overloaded.</li>
                    <li>Students should come to school in complete school uniform,on all school days (including Parents Teachers Meet)</li>
                    <li>Parents / Guardians can meet the Principal in his office from 9.00 am to 10.00 am on all school working days.</li>
                    <li>It is compulsory for all students to participate in sports, games and other co-curricular activities of the school.</li>
                    <li>Parents / Guardians should meet teachers only on, Parents Teachers Meet or after school hours from 2.00 pm to 2.30 pm</li>
                    <li>In case of accidents, school will provide only First Aid, other related expenses will be borne by Parents / Guardians.</li>
                    <li>Students of Class XI and XII having permanent licence are allowed to bring two wheelers. Four Wheelers are not permitted in school campus.</li>
                    <li>No mobile phones to be brought to school for what-so-ever reason. The set will be confiscated and very strict action will be taken against the user. The set will be returned only at the end of the session.</li>
                </ul>
            </div>
            <Footer/>
        </div>
    )
}