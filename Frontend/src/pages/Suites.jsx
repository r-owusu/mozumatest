import React from 'react'
import suitesInfo from '../data/suitesInfo'


const Suites = () => {
  const getSuite = (id) => {
    console.log(id)
  }


  return (
    <div className='suites-main'>
      {/* header */}
      <div className='starter'>
        <div>
          <h1>Explore Mozuma Oceanfront <br /> Suite</h1>
          <p>and discover our refined varieties of suites just for you</p>
        </div>
      </div>

      {/* suites map */}
      <div className='suites-list'>
        {suitesInfo.map((suite) => (
          <div className='suite-inner' key={suite.id}>
            <img className='suite-img' src={suite.img} />

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
              <button onClick={() => getSuite(suite.id)}>Book Now</button>
            </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Suites