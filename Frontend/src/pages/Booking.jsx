import React from 'react';
import suitesInfo from '../data/suitesInfo';

const Booking = () => {

  const getSuite = (id) => {
    console.log("Selected suite ID:", id);
    // You can add navigation or state logic here
  };

  return (
    <div className='main-booking-page'>
      <div className='booking-page-inner'>
        {/* ------Booking Details----------- */}
        <div className='booking-details'>
          <div className='bdetails-main b1 border-left'>
            <h1>
              <img src='/assets/images/suites/guests-icon.png' alt="Guests" />
              Guests
            </h1>
            <p>2 Adults, 0 Children</p>
          </div>

          <div className='bdetails-main bdate border-left'>
            <input type='date' />
            <h1>Check In</h1>
          </div>

          <div className='bdetails-main bdate'>
            <input type='date' />
            <h1>Check Out</h1>
          </div>
        </div>

        {/* ------Suites Details----------- */}
        <div className='booking-suites-details'>
          <h1>Availability</h1>
          <div className='suites-filter'>
            <div>
              <input type='checkbox' />
              <label>Suites</label>
            </div>
            <div>
              <input type='checkbox' />
              <label>Tours</label>
            </div>
            <div>
              <input type='checkbox' />
              <label>Events</label>
            </div>
          </div>
        </div>

        {/* ---------Suites List---------- */}
        <div className='suites-list'>
          {suitesInfo.map((suite) => (
            <div className='booking-page-suites' key={suite.id}>
              <div>
                <img className='suite-img' src={suite.img} alt={suite.name} />
              </div>

              <div className='info'>
                <h1>{suite.name}</h1>

                <div className='icons'>
                  <div>
                    <img src={suite.detailIcon1} alt="Icon1" />
                    <p>{suite.detailMessage1}</p>
                  </div>

                  <div>
                    <img src={suite.detailIcon2} alt="Icon2" />
                    <p>{suite.detailMessage2}</p>
                  </div>
                </div>

                <p className='suite-desc'>{suite.description}</p>

                <div className='suite-button'>
                  <button onClick={() => getSuite(suite.id)}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
