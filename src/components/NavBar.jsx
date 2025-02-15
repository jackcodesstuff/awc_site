// src/NavBar.js
import React from 'react';

const NavBar = ({ scrollToSection }) => {
  return (
    <nav>
      <button onClick={() => scrollToSection('whoWeAre')}>Who We Are</button>
      <button onClick={() => scrollToSection('locations')}>Locations</button>
      <button onClick={() => scrollToSection('customers')}>Customers</button>
      <button onClick={() => scrollToSection('media')}>Media</button>
      <button onClick={() => scrollToSection('careers')}>Careers</button>
      <button onClick={() => scrollToSection('awcCares')}>AWC Cares</button>
      <button onClick={() => scrollToSection('laborNegotiations')}>Labor Negotiations</button>
      <button onClick={() => scrollToSection('seherRecognition')}>Seher Recognition</button>
    </nav>
  );
};

export default NavBar;