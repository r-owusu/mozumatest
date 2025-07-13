import React from 'react'

const Cuisine = () => {
  return (
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
          <div className='inner'>
            <img src='../../assets/images/home/food-2.jpg' />

            <div>
              <p>Enjoy authentic Ghanaian flavors and modern cuisine crafted with care.</p>
              <p>Dine with an ocean view, order or grab something delightful on the go.</p>
            </div>

          </div>

          <button>Visit Restaurant</button>
        </div>

        <div>
          <img src='../../assets/images/home/food-1.jpg' />
        </div>
      </div>



    </div>
  )
}

export default Cuisine