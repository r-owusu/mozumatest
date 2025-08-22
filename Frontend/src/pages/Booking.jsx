import React from 'react'
import suitesInfo from '../data/suitesInfo'



const Booking = () => {
  return (
    <div className='main-booking-page'>
      <div className='booking-page-inner'>
        {/* ------booking details----------- */}
        <div className='booking-details'>
          <div className='bdetails-main b1 border-right'>
            <h1 className='m-0'>
              <img src='../../public/assets/images/suites/guests-icon.png' />
              Guests
            </h1>
            <p>2 Adults, 0 Children</p>
          </div>

          <div className='bdetails-main border-right py-1'>
            <input type='date' />
            <h1>Check In</h1>
          </div>

          <div className='bdetails-main'>
            <input type='date' />
            <h1>Check Out</h1>
          </div>
        </div>

        {/* ------suites details----------- */}
        <div>
          {/* header */}
          {/* <div className='booking-suites-details'>
          <h1>Availability</h1>   

          <div className='suites-filter'>
            <div>
              <input type='checkbox'/>
              <label>Suites</label>
            </div>

            <div>
              <input type='checkbox'/>
              <label>Tours</label>
            </div>

            <div>
              <input type='checkbox'/>
              <label>Events</label>
            </div>
          </div>     
        </div> */}

          {/* ---------suites list---------- */}
          <div className='suites-list'>
            {suitesInfo.map((suite) => (
              <div className='suite-inner mb-5' style={{width: '90%'}} key={suite.id}>
                <div>
                  <img className='suite-img' src={suite.img} />
                </div>

                <div className='info'>
                  <h1>{suite.name}</h1>

                  <div className='icons'>
                    <div>
                      <img src={suite.detailIcon1} />
                      <p>{suite.detailMessage1}</p>
                    </div>

                    <div>
                      <img src={suite.detailIcon2} />
                      <p>{suite.detailMessage2}</p>
                    </div>
                  </div>

                  <p className='suite-desc'>{suite.description}</p>

                  <div className='suite-button'>
                    <a href='/booking' className='bg-green' onClick={() => getSuite(suite.id)}>Book Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Booking