import React, { useEffect, useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Data() {

    const [Column, setColumn] = useState([]);
    const [record, setRecord] = useState([]);

    useEffect(() => {
        axios.get("https://apigenerator.dronahq.com/api/XMsQj47E/ContactData")
            .then((res) => {
                setColumn(Object.keys(res.data[0]));
                setRecord(res.data);
            })
    }, [])


    function handleDelete(id) {
        const confirmDelete = window.confirm('Do you want to delete?');
        if (confirmDelete) {
          axios
            .delete('https://apigenerator.dronahq.com/api/XMsQj47E/ContactData/' + id)
            .then(() => {
              alert('Record has been deleted');
            //   history('/show');
            })
            .catch((err) => console.log(err));
        }
      }


    return (
        <div>
            <Header />
            <Navbar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <Link to='/data'>
                            <button className='btn btn-warning float-end fw-bold'>Contact Data</button>
                        </Link>
                        <Link to='/admissiondata'>
                            <button className='btn btn-warning me-3 float-end fw-bold'>Admission Data</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="data">
                <table>
                    <thead>

                        <tr>
                            {Column.map((c, i) => (
                                <th key={i}>{c}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record.map((d, i) => (
                                <tr key={i} >
                                    <td>{d.Name}</td>
                                    <td>{d.FatherName}</td>
                                    <td>{d.PhoneNumber}</td>
                                    <td>{d.Email}</td>
                                    <td>{d.Message}</td>
                                    <td>{d.id}</td>
                                    <button onClick={() => handleDelete(d.id)} className='btn btn-danger fw-bold ms-5 mt-3'>Delete</button>

                                    {/* <button onClick={handleDelete} className='btn btn-danger fw-bold ms-5 mt-3'>Delete</button> */}
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
            <Footer />

        </div>
    )
}
