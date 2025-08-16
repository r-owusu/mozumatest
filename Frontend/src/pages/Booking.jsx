import React from 'react'
import suitesInfo from '../data/suitesInfo'



const Booking = () => {
  return (
    <div className='main-booking-page'>
      {/* ------booking details----------- */}
      <div>
        <div>
          <div>
            <img src='../../public/assets/images/events/wedding.png' />
            <p>Guests</p>
          </div>

          <p>2 Adults, 0 Children</p>
        </div>

         <div>
          <div>
            <img src='../../public/assets/images/events/wedding.png' />
            <p>Guests</p>
          </div>

          <p>2 Adults, 0 Children</p>
        </div>

         <div>
          <div>
            <img src='../../public/assets/images/events/wedding.png' />
            <p>Guests</p>
          </div>

          <p>2 Adults, 0 Children</p>
        </div>
      </div>

      {/* ------suites details----------- */}
      <div>
      {/* header */}
      <div>
        <h1>Availability</h1>   

        <div>
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
      </div>

      {/* ---------suites list---------- */}
       <div className='suites-list'>
              {suitesInfo.map((suite) => (
                <div className='suite-inner booking-page-suites' key={suite.id}>
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
                      <a href='/booking' onClick={() => getSuite(suite.id)}>Book Now</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>

    </div>
  )
}

export default Booking