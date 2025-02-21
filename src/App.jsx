import React, { useRef } from 'react';
import './App.css';
import awc_logo from "/src/assets/imgs/awc_logo.png";
import location from "./assets/imgs/chicago-ford.png";
import vehicle_customers from "./assets/imgs/vehicle-customers.png";
import railroad_customers from "./assets/imgs/railroad-customers.png";

function App() {
  return (
      <div className="main">

        <img src={awc_logo} className='img-logo'></img>

        <div className="side-bar">
          <div className="side-bar-item">
            Who We Are
            <div className="tooltip">
              <div className="who-we-are"> 
                {/* <h2>AUTO WAREHOUSING COMPANY</h2> */}

                <div className="flex" style={{backgroundColor: 'aliceblue'}}> 
                  <div className='card'>
                    <p>
                      Services such as body shop repair, vehicle inspections, lease vehicle reconditioning, vehicle storage, warehousing,
                      surveys and many other services can all be performed by AWC and it's highly trained associates.
                      <br></br>
                      <br></br>
                      AWC offers many standard services expected in the automobile processing industry but is also capable of fast start-ups where a
                      customer will need AWC onsite with little to no notice.
                      <br></br>
                      <br></br>
                      AWC can handle many different kinds of vehicles from
                      full size cargo trucks to full electric vehicles.
                    </p>
                    
                  </div>

                  <div className='column'>
                    <div className='card'>
                      <p>
                        Glass roofs, back-up cameras, vehicle graphics, navigation systems, vehicle alarms, spoilers, and many other
                        accessories can be installed (or uninstalled) with precision and care using our highly trained workforce.
                      </p>
                      
                    </div>

                    <div className='card'>
                      <p>
                        AWC performs many logistics functions.  Some of these are real time yard management, real time data transfers,
                        real time vehicle direct locating, dealer delivery, import / export preparations, rail car preparation and
                        switching, rail car loading and unloading, and extensive assembly plant operations.
                      </p>
                    </div>
                  </div>

                  <div className='card'>
                    <p>
                      VIPS, AWC’s proprietary, award winning, state-of-the-art software sets us apart from our competitors.  Since its
                      inception, VIPS has been continuously refined and enhanced, enabling AWC to maintain its technological lead
                      in the vehicle processing industry.  Thanks to VIPS, AWC continues to be more responsive and efficient than
                      our competitors, enabling us to provide superior services to our customers.  VIPS can be accessed from any
                      device with a current generation web browser.  Our customers’ management can now review productivity
                      information via the web for not only a specific AWC site but for all of their sites AWC is present at.
                      While customers still can pick up the phone or send an email requesting information about their vehicles,
                      they can just as easily open a browser, log into VIPS and get the information themselves.  Free standing
                      kiosks are available at many AWC locations that allow haul away truck drivers to review any information
                      about their loads thus speeding up their turnaround times.  AWC has begun offering VIPS as Software as
                      a Service (SaaS).  By leveraging our virtual environment along with our highly available data center
                      AWC can reliably offer VIPS purely over the internet with no AWC network infrastructure needed at
                      the remote site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-bar-item">
            Locations
            <div className="tooltip">
              <div className="flex">
                <div className="column">
                  <h1>West</h1>
                  <div className='map'>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1KdXFFhfPwYM70X0XySQPM6C6jWU&ehbc=2E312F" width="700" height="400"></iframe>
                  </div>
                </div>

                <div className="column">
                  <h1>Mid-West / Canada</h1>
                  <div className='map'>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1KdXFFhfPwYM70X0XySQPM6C6jWU&ehbc=2E312F" width="700" height="400"></iframe>
                  </div>
                </div>

                <div className="column">
                  <h1>East</h1>
                  <div className='map'>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1KdXFFhfPwYM70X0XySQPM6C6jWU&ehbc=2E312F" width="700" height="400"></iframe>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Alliston, ON
                  </h3>
                  <div className='p-locations'>
                    4700 Industrial Parkway
                    Allston, ON L9R 1W7
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Baltimore - BTC
                  </h3>
                  <div className='p-locations'>
                    1301 Chesapeake Ave
                    Baltimore, MD 21226
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Baltimore - Fairfield
                  </h3>
                  <div className='p-locations'>
                    2900 Childs Street
                    Baltimore, MD 21226
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Chicago - NS
                  </h3>
                  <div className='p-locations'>
                    13227 South Torrence Ave
                    Chicago, IL 60633
                  </div>
                  
                </div>
              </div>

              <div className="flex">
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Alliston, ON
                  </h3>
                  <div className='p-locations'>
                    4700 Industrial Parkway
                    Allston, ON L9R 1W7
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Baltimore - BTC
                  </h3>
                  <div className='p-locations'>
                    1301 Chesapeake Ave
                    Baltimore, MD 21226
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Baltimore - Fairfield
                  </h3>
                  <div className='p-locations'>
                    2900 Childs Street
                    Baltimore, MD 21226
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Chicago - NS
                  </h3>
                  <div className='p-locations'>
                    13227 South Torrence Ave
                    Chicago, IL 60633
                  </div>
                  
                </div>
              </div>
              
              <div className="flex">
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Alliston, ON
                  </h3>
                  <div className='p-locations'>
                    4700 Industrial Parkway
                    Allston, ON L9R 1W7
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Baltimore - BTC
                  </h3>
                  <div className='p-locations'>
                    1301 Chesapeake Ave
                    Baltimore, MD 21226
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Baltimore - Fairfield
                  </h3>
                  <div className='p-locations'>
                    2900 Childs Street
                    Baltimore, MD 21226
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Chicago - NS
                  </h3>
                  <div className='p-locations'>
                    13227 South Torrence Ave
                    Chicago, IL 60633
                  </div>
                  
                </div>
              </div>

              <div className="flex">
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Alliston, ON
                  </h3>
                  <div className='p-locations'>
                    4700 Industrial Parkway
                    Allston, ON L9R 1W7
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Baltimore - BTC
                  </h3>
                  <div className='p-locations'>
                    1301 Chesapeake Ave
                    Baltimore, MD 21226
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Baltimore - Fairfield
                  </h3>
                  <div className='p-locations'>
                    2900 Childs Street
                    Baltimore, MD 21226
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Chicago - NS
                  </h3>
                  <div className='p-locations'>
                    13227 South Torrence Ave
                    Chicago, IL 60633
                  </div>
                  
                </div>
              </div>

              <div className="flex">
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Alliston, ON
                  </h3>
                  <div className='p-locations'>
                    4700 Industrial Parkway
                    Allston, ON L9R 1W7
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Baltimore - BTC
                  </h3>
                  <div className='p-locations'>
                    1301 Chesapeake Ave
                    Baltimore, MD 21226
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Baltimore - Fairfield
                  </h3>
                  <div className='p-locations'>
                    2900 Childs Street
                    Baltimore, MD 21226
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Chicago - NS
                  </h3>
                  <div className='p-locations'>
                    13227 South Torrence Ave
                    Chicago, IL 60633
                  </div>
                  
                </div>
              </div>

              <div className="flex">
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Alliston, ON
                  </h3>
                  <div className='p-locations'>
                    4700 Industrial Parkway
                    Allston, ON L9R 1W7
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Baltimore - BTC
                  </h3>
                  <div className='p-locations'>
                    1301 Chesapeake Ave
                    Baltimore, MD 21226
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Baltimore - Fairfield
                  </h3>
                  <div className='p-locations'>
                    2900 Childs Street
                    Baltimore, MD 21226
                  </div>
                  
                </div>
                <div className="img-area">
                  <img src={location} className='img'></img>
                  
                  <h3>
                    Chicago - NS
                  </h3>
                  <div className='p-locations'>
                    13227 South Torrence Ave
                    Chicago, IL 60633
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="side-bar-item">
            Our Customers
            <div className="tooltip">
              Tooltip content for Item 1
            </div>
          </div>
          <div className="side-bar-item">
            Media
            
          </div>
          <div className="side-bar-item">
            Careers
          </div>
          <div className="side-bar-item">
            AWC Cares
          </div>
          <div className="side-bar-item">
            Labor Negotiations
          </div>
          <div className="side-bar-item">
            Seher Recognition
          </div>
        </div>

        {/* WHO WE ARE */}
        {/* <div className="who-we-are"> 
          <h2>AUTO WAREHOUSING COMPANY</h2>

          <div ref={sections.whoWeAre} className="flex-who-we-are" style={{backgroundColor: 'aliceblue'}}> 
            <div className='card'>
              <p>
                Services such as body shop repair, vehicle inspections, lease vehicle reconditioning, vehicle storage, warehousing,
                surveys and many other services can all be performed by AWC and it's highly trained associates.
                <br></br>
                <br></br>
                AWC offers many standard services expected in the automobile processing industry but is also capable of fast start-ups where a
                customer will need AWC onsite with little to no notice.
                <br></br>
                <br></br>
                AWC can handle many different kinds of vehicles from
                full size cargo trucks to full electric vehicles.
              </p>
              
            </div>

            <div className='column'>
              <div className='card'>
                <p>
                  Glass roofs, back-up cameras, vehicle graphics, navigation systems, vehicle alarms, spoilers, and many other
                  accessories can be installed (or uninstalled) with precision and care using our highly trained workforce.
                </p>
                
              </div>

              <div className='card'>
                <p>
                  AWC performs many logistics functions.  Some of these are real time yard management, real time data transfers,
                  real time vehicle direct locating, dealer delivery, import / export preparations, rail car preparation and
                  switching, rail car loading and unloading, and extensive assembly plant operations.
                </p>
              </div>
            </div>

            <div className='card'>
              <p>
                VIPS, AWC’s proprietary, award winning, state-of-the-art software sets us apart from our competitors.  Since its
                inception, VIPS has been continuously refined and enhanced, enabling AWC to maintain its technological lead
                in the vehicle processing industry.  Thanks to VIPS, AWC continues to be more responsive and efficient than
                our competitors, enabling us to provide superior services to our customers.  VIPS can be accessed from any
                device with a current generation web browser.  Our customers’ management can now review productivity
                information via the web for not only a specific AWC site but for all of their sites AWC is present at.
                While customers still can pick up the phone or send an email requesting information about their vehicles,
                they can just as easily open a browser, log into VIPS and get the information themselves.  Free standing
                kiosks are available at many AWC locations that allow haul away truck drivers to review any information
                about their loads thus speeding up their turnaround times.  AWC has begun offering VIPS as Software as
                a Service (SaaS).  By leveraging our virtual environment along with our highly available data center
                AWC can reliably offer VIPS purely over the internet with no AWC network infrastructure needed at
                the remote site.
              </p>
            </div>
          </div>
        </div> */}

        {/* LOCATIONS */}
        {/* <div ref={sections.locations} style ={{backgroundColor: 'aliceblue'}}>
          <h2>Locations</h2>

          <div className="flex">
            <div className="column">
              <h1>West</h1>
              <div className='map'>
                <iframe src="https://www.google.com/maps/d/embed?mid=1KdXFFhfPwYM70X0XySQPM6C6jWU&ehbc=2E312F" width="700" height="400"></iframe>
              </div>
            </div>

            <div className="column">
              <h1>Mid-West / Canada</h1>
              <div className='map'>
                <iframe src="https://www.google.com/maps/d/embed?mid=1KdXFFhfPwYM70X0XySQPM6C6jWU&ehbc=2E312F" width="700" height="400"></iframe>
              </div>
            </div>

            <div className="column">
              <h1>East</h1>
              <div className='map'>
                <iframe src="https://www.google.com/maps/d/embed?mid=1KdXFFhfPwYM70X0XySQPM6C6jWU&ehbc=2E312F" width="700" height="400"></iframe>
              </div>
            </div>
          </div>
          
          <div className="flex">
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Alliston, ON
              </h3>
              <div className='p-locations'>
                4700 Industrial Parkway
                Allston, ON L9R 1W7
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Baltimore - BTC
              </h3>
              <div className='p-locations'>
                1301 Chesapeake Ave
                Baltimore, MD 21226
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Baltimore - Fairfield
              </h3>
              <div className='p-locations'>
                2900 Childs Street
                Baltimore, MD 21226
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Chicago - NS
              </h3>
              <div className='p-locations'>
                13227 South Torrence Ave
                Chicago, IL 60633
              </div>
              
            </div>
          </div>

          <div className="flex">
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Alliston, ON
              </h3>
              <div className='p-locations'>
                4700 Industrial Parkway
                Allston, ON L9R 1W7
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Baltimore - BTC
              </h3>
              <div className='p-locations'>
                1301 Chesapeake Ave
                Baltimore, MD 21226
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Baltimore - Fairfield
              </h3>
              <div className='p-locations'>
                2900 Childs Street
                Baltimore, MD 21226
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Chicago - NS
              </h3>
              <div className='p-locations'>
                13227 South Torrence Ave
                Chicago, IL 60633
              </div>
              
            </div>
          </div>
          
          <div className="flex">
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Alliston, ON
              </h3>
              <div className='p-locations'>
                4700 Industrial Parkway
                Allston, ON L9R 1W7
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Baltimore - BTC
              </h3>
              <div className='p-locations'>
                1301 Chesapeake Ave
                Baltimore, MD 21226
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Baltimore - Fairfield
              </h3>
              <div className='p-locations'>
                2900 Childs Street
                Baltimore, MD 21226
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Chicago - NS
              </h3>
              <div className='p-locations'>
                13227 South Torrence Ave
                Chicago, IL 60633
              </div>
              
            </div>
          </div>

          <div className="flex">
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Alliston, ON
              </h3>
              <div className='p-locations'>
                4700 Industrial Parkway
                Allston, ON L9R 1W7
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Baltimore - BTC
              </h3>
              <div className='p-locations'>
                1301 Chesapeake Ave
                Baltimore, MD 21226
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Baltimore - Fairfield
              </h3>
              <div className='p-locations'>
                2900 Childs Street
                Baltimore, MD 21226
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Chicago - NS
              </h3>
              <div className='p-locations'>
                13227 South Torrence Ave
                Chicago, IL 60633
              </div>
              
            </div>
          </div>

          <div className="flex">
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Alliston, ON
              </h3>
              <div className='p-locations'>
                4700 Industrial Parkway
                Allston, ON L9R 1W7
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Baltimore - BTC
              </h3>
              <div className='p-locations'>
                1301 Chesapeake Ave
                Baltimore, MD 21226
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Baltimore - Fairfield
              </h3>
              <div className='p-locations'>
                2900 Childs Street
                Baltimore, MD 21226
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Chicago - NS
              </h3>
              <div className='p-locations'>
                13227 South Torrence Ave
                Chicago, IL 60633
              </div>
              
            </div>
          </div>

          <div className="flex">
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Alliston, ON
              </h3>
              <div className='p-locations'>
                4700 Industrial Parkway
                Allston, ON L9R 1W7
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Baltimore - BTC
              </h3>
              <div className='p-locations'>
                1301 Chesapeake Ave
                Baltimore, MD 21226
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Baltimore - Fairfield
              </h3>
              <div className='p-locations'>
                2900 Childs Street
                Baltimore, MD 21226
              </div>
              
            </div>
            <div className="img-area">
              <img src={location} className='img'></img>
              
              <h3>
                Chicago - NS
              </h3>
              <div className='p-locations'>
                13227 South Torrence Ave
                Chicago, IL 60633
              </div>
              
            </div>
          </div>
        </div> */}

        {/* <div ref={sections.customers} className='main'>
          <h2>Our Customers</h2>
          
          <div className="flex">
            <div className="img-area-customers">
              <img src={vehicle_customers} className='img-customers'></img>
            </div>

            <div className="img-area-customers">
              <img src={railroad_customers} className='img-customers'></img>
            </div>
          </div>
        </div>

        <div ref={sections.media}>
          <h2>Media</h2>
          <p>Details about Media.</p>
        </div>

        <div ref={sections.careers}>
          <h2>Careers</h2>
          <p>Details about Careers.</p>
        </div>

        <div ref={sections.awcCares}>
          <h2>AWC Cares</h2>
          <p>Details about AWC Cares.</p>
        </div>

        <div ref={sections.laborNegotiations}>
          <h2>Labor Negotiations</h2>
          <p>Details about Labor Negotiations.</p>
        </div>

        <div ref={sections.seherRecognition}>
          <h2>Seher Recognition</h2>
          <p>Details about Seher Recognition.</p>
        </div> */}
          
      </div>
  );
}

export default App;