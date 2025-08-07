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
import Suites from './pages/Suites'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/restaurant' element={<Restaurant />}/>
        <Route path='/tours' element={<Tours />}/>
        <Route path='/suites' element={<Suites />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/booking' element={<Booking />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
         <Route path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
