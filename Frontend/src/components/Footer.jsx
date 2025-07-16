import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='main'>
        {/* navigations */}
        <nav>
          <ul>
            <li><Link to=''>About</Link></li>
            <li><Link to=''>FAQs</Link></li>
            <li><Link to=''>Contact Us</Link></li>
          </ul>
        </nav>

        {/* logo and documents */}
        <div className='center'>
          <img src='../../assets/images/logo.jpg'/>

          <nav>
            <ul>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Terms and Conidtions</a></li>
            </ul>
          </nav>
        </div>

        {/* details */}
        <div className='details'>
          <h1>Need more information? <br /> contact us</h1>
          <p>Phone: 1214235343242</p>
          <p>Email: mozuma@gmail.com</p>
          <p>Location: Takoradi 100 Street, Ghana </p>

          <nav>
            <ul>
              <li>
                <a href=''><img src='../../assets/icons/facebook.svg' /></a>
              </li>

              <li>
                <a href=''><img src='../../assets/icons/twitter.svg' /></a>
              </li>

              <li>
                <a href=''><img src='../../assets/icons/instagram.svg' /></a>
              </li>

              <li>
                <a href=''><img src='../../assets/icons/linkedin.svg' /></a>
              </li>

            </ul>
          </nav>
        </div>
      </div>

      <div className='bottom'>
        <p>@ 2025 Mozuma Hotel | All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer