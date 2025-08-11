import React from 'react'



//importing components 
import Welcome from '../components/Home/Welcome'
import About from '../components/Home/About'
import Cusine from '../components/Home/Cuisine'
import Suites from '../components/Home/Suites'
import Event from '../components/Home/Event'
import Map from '../components/Home/Map'



const Home = () => {
  return (
    <div className=''>
      <Welcome/>
      <Suites/>
      <About/>
      <Cusine/>
      <Event/>
      <Map/>

    </div>
  )
}

export default Home