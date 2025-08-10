import React from 'react'

const Welcome = () => {
  return (
    <div className='home-welcome'>
      <video autoPlay loop muted playsInline>
        <source src='./public/assets/images/HOME/intro-video.mp4' type='video/mp4' />
      </video>



      <div className='home-welcome-info'>
        <div>
          <h1>AKWAABA</h1>
          <h3>MOZUMA OCEANFRONT SUITES</h3>
          <p>Where Comfort Meets The Ocean</p>
        </div>
      </div>
    </div>
  )
}

export default Welcome