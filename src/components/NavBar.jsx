// src/NavBar.js
import React from 'react';
import "/src/App.css";

const NavBar = ({ scrollToSection }) => {
  return (
    <div className='nav-bar'>
      <img src={awc_logo} className='img-logo'></img>
      <button onClick={() => scrollToSection('whoWeAre')} className='button'>Who We Are</button>
      <button onClick={() => scrollToSection('locations')} className='button'>Locations</button>
      <button onClick={() => scrollToSection('customers')} className='button'>Customers</button>
      <button onClick={() => scrollToSection('media')} className='button'>Media</button>
      <button onClick={() => scrollToSection('careers')} className='button'>Careers</button>
      <button onClick={() => scrollToSection('awcCares')} className='button'>AWC Cares</button>
      <button onClick={() => scrollToSection('laborNegotiations')} className='button'>Labor Negotiations</button>
      <button onClick={() => scrollToSection('seherRecognition')} className='button'>Seher Recognition</button>
    </div>
  );
};

export default NavBar;