import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div>
        <nav>
          <ul>
            <li><Link to=''>About</Link></li>
            <li><Link to=''>FAQs</Link></li>
            <li><Link to=''>Contact Us</Link></li>
          </ul>
        </nav>

        <div></div>

        <div>
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
                <a href=''><img src='' /></a>
              </li>

              <li>
                <a href=''><img src='' /></a>
              </li>

              <li>
                <a href=''><img src='' /></a>
              </li>

            </ul>
          </nav>
        </div>
      </div>

      <div>
        <p>@ 2025 Mozuma Hotel | All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer