import React, { useState } from 'react';
import './Style.css';
import Typewriter from "typewriter-effect";
import dropdown from "./img-logo/dropdown.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-bar">
      <nav className="navbar">
        <div className="navbar-brand ">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to VIP School")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Education is the Most Powerfull Weapon")
                .deleteAll()
                .typeString("Learning Never Ends")
                .deleteAll()
                .typeString("Education is the Most Powerfull Weapon")
                .start();
            }}
          />
        </div>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li id='home'><a href="/">Home</a></li>

            <li> <span><a href="#.">About-us</a><img src={dropdown} id='dropdown-icon' alt="..." /></span>
              <div class="dropdown-menu">
                <ul>
                  <li> <Link to='/vision' ><a href="/">Vision and Mission</a></Link> </li>
                  <li> <Link to='/aim'><a href="/">Aims</a></Link> </li>
                  <li> <Link to='/conduct'> <a href="/">Conduct At a Glance</a></Link></li>
                  <li> <Link to='/login'> <a href="/">Login</a></Link></li>
                </ul>
              </div>
            </li>
            <li><span><a href="#." className='mt-4'>Academic</a><img src={dropdown} id='dropdown-icon' alt="..." /></span>

              <div class="dropdown-menu">
                <ul>
                  <li> <Link to="/rules" ><a href="/">Rules</a></Link> </li>
                  <li> <Link to='/news' ><a href="/">News</a></Link> </li> 
                  <li> <Link to='/library' ><a href="/">Library</a></Link> </li> 
                  <li> <Link to='/smartclass' ><a href="/">Smart Class</a></Link> </li> 
                  <li> <Link to='/musicroom' ><a href="/">Music Room</a></Link> </li> 
                  <li> <Link to='/sport' ><a href="/">Sports Room</a></Link> </li> 
                  <li> <Link to='/faq' ><a href="/">FAQ</a></Link> </li> 
                </ul>
              </div>
            </li>

            <li><span><a href="#." className='mt-4'>Infastructure</a><img src={dropdown} id='dropdown-icon' alt="..." /></span>

              <div class="dropdown-menu">
                <ul>
                  <li> <Link to="/building"><a href="/">School Building</a></Link> </li>
                  <li> <Link to="/ground" ><a href="/">School Playground</a></Link> </li>
                  <li><Link to="/computer"> <a href="/">Computer Lab</a></Link></li>
                  <li><Link to="/chemistry"> <a href="/">Chemistry Lab</a></Link></li>
                  <li><Link to="/bio"> <a href="/">Bio Lab</a></Link></li>
                  <li><Link to="/physics"> <a href="/">Physics Lab</a></Link></li>
                </ul>
              </div>
            </li>
            <li> <Link to='/gallery1'> <a href="/">Gallery</a></Link></li>

            <li><Link to='/contactus'  ><a href="/">Contact us</a></Link> </li>
            <li><Link to='/result' > <button>RESULT</button></Link></li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={handleToggleMenu}>
          ☰
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
