import { Route, Routes } from 'react-router-dom'



//importing components 
import Footer from './components/Footer'
import Header from './components/Header'


//importing pages 
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Tours from './pages/Tours'
import Events from './pages/Events'
import Booking from './pages/Booking'
import Login from './components/authenticaton/Login'
import Signup from './components/authenticaton/Signup'


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/restaurant' element={<Restaurant />}/>
        <Route path='/tours' element={<Tours />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/booking' element={<Booking />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
