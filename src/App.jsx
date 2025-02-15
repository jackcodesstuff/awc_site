// src/App.js
import React, { useRef } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const sections = {
    whoWeAre: useRef(null),
    locations: useRef(null),
    customers: useRef(null),
    media: useRef(null),
    careers: useRef(null),
    awcCares: useRef(null),
    laborNegotiations: useRef(null),
    seherRecognition: useRef(null)
  };

  const scrollToSection = (section) => {
    sections[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className="layout">
        <Home></Home>
        <NavBar scrollToSection={scrollToSection} />

        <div className="services-card">
          <div className="card-text">
            Services such as body shop repair, vehicle inspections, lease vehicle reconditioning, vehicle storage, warehousing,
            surveys and many other services can all be performed by AWC and it's highly trained associates. AWC offers many
            standard services expected in the automobile processing industry but is also capable of fast start-ups where a
            customer will need AWC onsite with little to no notice. AWC can handle many different kinds of vehicles from
            full size cargo trucks to full electric vehicles.
          </div>
        </div>

        <div className="who-we-are">
          <div className="section-row">
            <div ref={sections.whoWeAre} className='who-we-are-section'>
              <h2>Auto Warehousing Company</h2>
              <div className="card-text">Details about Who We Are.</div>
            </div>

            <div ref={sections.locations} style={{ height: '50vh', background: '#add8e6', width: '40%' }}>
              <h2>Locations</h2>
              <div className="card-text">Details about Locations.</div>
            </div>
          </div>

          <div className="section-row">
          <div ref={sections.customers} style={{ height: '50vh', background: '#f0f0f0', width: '40%' }}>
            <h2>Customers</h2>
            <p>Details about Customers.</p>
          </div>

          <div ref={sections.media} style={{ height: '50vh', background: '#add8e6', width: '40%' }}>
            <h2>Media</h2>
            <p>Details about Media.</p>
          </div>
          </div>

          <div ref={sections.careers} style={{ height: '50vh', background: '#f0f0f0', width: '40%' }}>
            <h2>Careers</h2>
            <p>Details about Careers.</p>
          </div>

          <div ref={sections.awcCares} style={{ height: '50vh', background: '#add8e6', width: '40%' }}>
            <h2>AWC Cares</h2>
            <p>Details about AWC Cares.</p>
          </div>

          <div ref={sections.laborNegotiations} style={{ height: '50vh', background: '#f0f0f0', width: '40%' }}>
            <h2>Labor Negotiations</h2>
            <p>Details about Labor Negotiations.</p>
          </div>

          <div ref={sections.seherRecognition} style={{ height: '50vh', background: '#add8e6', width: '40%' }}>
            <h2>Seher Recognition</h2>
            <p>Details about Seher Recognition.</p>
          </div>
        </div>
      </div>
  );
}

export default App;