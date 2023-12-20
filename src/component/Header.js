import React from 'react'
import './Style.css'
import logo from "./img-logo/vip-logo.png"

export default function Header() {
  return (
    <React.Fragment>
      <div className='Main-Container'>
        <header>
          <img src={logo} alt="logo-img" id='logo' width={"70px"} />
          <div className="name">
            <h1 id='school-name'>VISION INTERNATIONAL PUBLIC SCHOOL HARDA </h1>
            <h3>SINCE - 2018   ICSE AFFILIATED - MP049 </h3>
          </div>
        </header>
        <nav>
        </nav>
      </div>
    </React.Fragment>
  )
}
