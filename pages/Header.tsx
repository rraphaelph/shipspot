import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
    if(mobileNavOpen){
      $('#navbar').removeClass('collapse');
    }else{
      $('#navbar').addClass('navbar');
    }
  }


  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span>ShipSpot</span>
        </a>
        <nav id="navbar" className="navbar navbar-expand-lg ">
            <button
            className="navbar-toggler"
            type="button"
            onClick={handleMobileNavToggle}
            aria-controls="navbarNav"
            aria-expanded={mobileNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${mobileNavOpen ? 'navbar-mobile' : 'collapse navbar-collapse '}`} >
            <ul className="navbar-nav d-flex align-items-center justify-content-center">
              <li className="nav-item">
                <a className="nav-link scrollto" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto" href="#about">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto" href="#team">
                  Time
                </a>
              </li>
              <li className="nav-item">
                <a className="getstarted scrollto" href="#services">
                  Serviços
                </a>
              </li>
            </ul>
            {mobileNavOpen ?            <button
              className="mobile-nav-toggle bi-x "
              onClick={() => setMobileNavOpen(false)}>
                      X
            </button> :''}

          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;
