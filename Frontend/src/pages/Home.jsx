import React from 'react'



//importing components 
import Welcome from '../components/Home/Welcome'
import About from '../components/Home/About'
import Gallery from '../components/Home/Gallery'
import Suites from '../components/Home/Suites'


const Home = () => {
  return (
    <div className=''>
      <Welcome/>
      <About/>
      <Suites/>
      <Gallery/>

    </div>
  )
}

export default Home