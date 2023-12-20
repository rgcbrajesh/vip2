import React,{useState,useEffect} from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AdmissionData() {
  const [Column2, setColumn2] = useState([]);
  const [record2, setRecord2] = useState([]);

  useEffect(() => {
    axios.get("https://apigenerator.dronahq.com/api/F13S7ueP/EnquiryForm")
        .then((res) => {
            setColumn2(Object.keys(res.data[0]));
            setRecord2(res.data);
        })
}, [])


function handleDelete(id) {
    const confirmDelete = window.confirm('Do you want to delete?');
    if (confirmDelete) {
      axios
        .delete('https://apigenerator.dronahq.com/api/F13S7ueP/EnquiryForm/' + id)
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
                    {Column2.map((c, i) => (
                        <th key={i}>{c}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    record2.map((d, i) => (
                        <tr key={i} >
                            <td>{d.StudentName}</td>
                            <td>{d.ParentName}</td>
                            <td>{d.DateofBirth}</td>
                            <td>{d.Class}</td>
                            <td>{d.ContactNumber}</td>
                            <td>{d.Address}</td>
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
