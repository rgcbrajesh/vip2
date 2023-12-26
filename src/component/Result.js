import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import ArrayPdf from './ArrayPdf';
import Footer from "./Footer";
import "./Style.css";

export default function Result() {
    const [item, setItem] = useState(ArrayPdf);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = () => {
        const filteredItems = item.filter((elem) => {
            return search.trim() === '' ? false : elem.Name.toString().includes(search.toString());
        });
        setSearchResult(filteredItems);
    };

    return (
        <div>
            <Header />
            <Navbar />
            <div className="container">
                <h1 className='result'>Result</h1>
                <div className="row mt-5" id='search-box'>
                    <form>
                        <input type="text" placeholder='Enter Roll No...' id='search' onChange={e => setSearch(e.target.value)} />
                        <button type="button" className='search-btn' onClick={handleSearch}>Search</button>
                    </form>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className='main-pdf'>
                            {searchResult.map((elem) => {
                                const { Name, Pdf } = elem;
                                return (
                                    <div className='pdf' key={Name}>
                                        <a href={Pdf}><button className='pdf-view'>{Name} <br />View PDF</button></a>
                                    </div>
                                );
                            })}
                            {searchResult.length === 0 && <p>Please Enter your Roll No. then your result Pdf in Now Available.</p>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
