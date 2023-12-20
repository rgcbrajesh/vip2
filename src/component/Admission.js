import './Style.css'
import React, { useState } from 'react';
import img from "./img-logo/schoolbuillding.jpg"
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const Admission = () => {
    const [enquiryData, setEnquiryData] = useState({ StudentName: "", ParentName: "", DateofBirth: "", Class: "", ContactNumber: "", Address: "" })

    const HandleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://apigenerator.dronahq.com/api/F13S7ueP/EnquiryForm", enquiryData)
            .then(res => {
                alert("Thank you for Connecting us :)");
            })
            .catch(err => console.log(err));
    };


    return (
        <div className="admission-main">
            <Header />
            <Navbar />
            <div className="form-upper mt-5">
                {/* <h1>Admission </h1> */}
                <div>
                    <h3>Application Procedure</h3>
                    <p>The application procedure is very simple. Follow the bellow mentioned guidelines to get enrolled:</p>
                    <ul>
                        <li>Avail free career counselling with our highly qualified counsellors.</li>
                        <li>Select the course of your choice.</li>
                        <li>Fill the applicaSttion form and submit your documents.</li>
                        <li>Pay directly to the university.</li>
                        <li>Get access to online study material and LMS.</li>
                        <li>Our twenty four cross seven support team is always available to help you resolve any doubt with the university.</li>
                    </ul>
                </div>
            </div>
            <div className="form-down">
                <div className="form-details">
                    <form>
                        <h2>Enquiry Form</h2>
                        <label>
                            Student Name: <br />
                            <input type="text" name="studentName" onChange={e => setEnquiryData({ ...enquiryData, StudentName: e.target.value })} />
                        </label>
                        <br />
                        <label>
                            Parent Name:<br />
                            <input type="text" name="parentName" onChange={e => setEnquiryData({ ...enquiryData, ParentName: e.target.value })} />
                        </label>
                        <br />
                        <label>
                            Date of Birth: <br />
                            <input type="date" name="dateOfBirth" onChange={e => setEnquiryData({ ...enquiryData, DateofBirth: e.target.value })} />
                        </label>
                        <br />
                        <label>
                            Class:<br />
                            <input type="text" name="grade" onChange={e => setEnquiryData({ ...enquiryData, Class: e.target.value })} />
                        </label>
                        <br />
                        <label>
                            Contact Number:<br />
                            <input type="tel" name="contactNumber" onChange={e => setEnquiryData({ ...enquiryData, ContactNumber: e.target.value })} />
                        </label>
                        <br />
                        <label>
                            Address:<br />
                            <textarea name="address" onChange={e => setEnquiryData({ ...enquiryData, Address: e.target.value })} />
                        </label>
                        <br />
                        <button onClick={HandleSubmit} >Submit</button>
                    </form>
                </div>
                <div className="admission-document">
                    <img src={img} alt="" />
                    <h2>Document Requirment</h2>
                    <ul>
                        <li> SSSMID</li>
                        <li> Adhar Card</li>
                        <li> Birth Certificate</li>
                        <li> 2 Photos Student</li>
                        <li> Bank Account Details</li>
                        <li> Last Class Marksheet</li>
                        <li> Original Transfer Certificate</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Admission;