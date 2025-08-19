import React from 'react'



const Home = () => {
  return (
    <div className=''>
      {/* ---------------welcome---------- */}
      <div className='home-welcome'>
        <video autoPlay loop muted playsInline>
          <source src='./assets/images/HOME/intro-video.mp4' type='video/mp4' />
        </video>

        <div className='home-welcome-info'>
          <div>
            <h1>AKWAABA</h1>
            <h3>MOZUMA OCEANFRONT SUITES</h3>
            <p>Where Comfort Meets The Ocean</p>
          </div>
        </div>
      </div>

      {/* ---------------suites---------- */}
      <div className='suites-container'>
        <h1>Suites</h1>

        {/* carousel */}
        <div className="suites">
          <div className="suite">
            <img src="../../assets/images/HOME/suites-main.jpeg" alt="Suite 1" />

            <div>
              <h2>Deluxe Suite</h2>
              <p>Wake up to ocean view in this cozy suite with a balcony and king-sized bed</p>
              <p>From <span>$160/night</span></p>
            </div>
          </div>

          <div className="suite">
            <img src="../../assets/images/HOME/suites-main.jpeg" alt="Suite 1" />

            <div>
              <h2>Modern Suite</h2>
              <p>Wake up to ocean view in this cozy suite with a balcony and king-sized bed</p>
              <p>From <span>$120/night</span></p>
            </div>
          </div>

          <div className="suite">
            <img src="../../assets/images/suites/suite-6.jpg" alt="Suite 1" />

            <div>
              <h2>Outdoor Suite</h2>
              <p>Step out into our contemporary outdoor suite and enjoy nature's bliss</p>
              <p>From <span>$200/night</span></p>
            </div>
          </div>

          <div className="suite">
            <img src="../../assets/images/suites/suite-2.jpg" alt="Suite 1" />

            <div>
              <h2>Luxury Suite</h2>
              <p>Exclusive offers with our Luxury suitfrom free wifi services to mini kitchen suite</p>
              <p>From <span>$299/night</span></p>
            </div>
          </div>
        </div>


        <a className='linkButton' href='/booking'>View More</a>
      </div>

      {/* ---------------about---------- */}
      <div className='home-about'>
        <div>
          <h1>Your OceanFront Escape Begins Here</h1>
          <h3>Experience Luxury in comfort - <br /> designed just for You</h3>
          <a className='linkButton' href='/booking'>Book Now</a>

        </div>
      </div>

      {/* ---------------cusine---------- */}
      <div className='h-cuisine'>
        <div className='h-cuisine-header'>
          <h1>Mozuma Cuisine</h1>

          <div>
            <hr />
            <img src='../../assets/images/suites/arrow.png' />
            <hr />
          </div>
        </div>

        <div className='h-cuisine-info'>
          <div>
            <div className='inner mb-4'>
              <img src='../../assets/images/HOME/food-2.jpg' />

              <div>
                <p>Enjoy authentic Ghanaian flavors and modern cuisine crafted with care.</p>
                <p>Dine with an ocean view, order or grab something delightful on the go.</p>
              </div>

            </div>

            <a className='linkButton' href='/restaurant'>Visit Restaurant</a>
          </div>

          <div className='h-cuisine-img'>
            <img src='../../assets/images/HOME/food-1.jpg' />
          </div>
        </div>
      </div>

      {/* ---------------event---------- */}
      <div className='h-event'>
        <div>
          <h1>Host Your Private <br /> <span>Event</span> in Style</h1>

          <a className='linkButton' href='/events'>Book a Space!</a>
        </div>
      </div>

      {/* ---------------map---------- */}
      <div className='map-container'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508838!2d144.9537353153159!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjAiUyAxNDTCsDU3JzE0LjMiRQ!5e0!3m2!1sen!2sgh!4v1618533381245!5m2!1sen!2sgh"
          // width="900"
          // height="650"
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen=""
          loading="lazy">
        </iframe>

      </div>
    </div>
  )
}

export default Home