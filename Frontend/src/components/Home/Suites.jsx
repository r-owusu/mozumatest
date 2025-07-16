import React from 'react'

const Suites = () => {
  return (
    <div className='suites-container'>
      <h1>Suites</h1>

      {/* carousel */}
      <div className="suites">
        <div className="suite">
          <img src="../../assets/images/home/suites-main.jpeg" alt="Suite 1" />

          <div>
            <h2>Deluxe Suite</h2>
            <p>Wake up to ocean view in this cozy suite with a balcony and king-sized bed</p>
            <p>From <span>$160/night</span></p>
          </div>
        </div>

        <div className="suite">
          <img src="../../assets/images/suites/hotel-18.jpg" alt="Suite 1" />

          <div>
            <h2>Outdoor Suite</h2>
            <p>Step out into our contemporary outdoor suite and enjoy nature's bliss</p>
            <p>From <span>$200/night</span></p>
          </div>
        </div>

        <div className="suite">
          <img src="../../assets/images/suites/room-2.jpg" alt="Suite 1" />

          <div>
            <h2>Luxury Suite</h2>
            <p>Exclusive offers with our Luxury suitfrom free wifi services to mini kitchen suite</p>
            <p>From <span>$299/night</span></p>
          </div>
        </div>
      </div>

      <button>View More</button>
    </div>
  )
}

export default Suites