// src/pages/About.jsx
import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* Hero / About Us Section */}
      <section
       className="position-relative d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          height: '100vh',
          backgroundImage: "url('../../assets/images/about us/mozuma 2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* stacked, centered text with click action */}
        <div
          className="position-relative px-4 text-start"
          style={{ maxWidth: '783px', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
           <h1
            className="mb-4"
            style={{
              fontFamily: 'Playfair Display',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '64px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#3F96CD',
            }}
          >
            About Us
          </h1>
          <div
            style={{
              width: '783px',
              height: '376px',
              transform: 'rotate(0deg)',
              opacity: 1,
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '32px',
              lineHeight: '47px',
              letterSpacing: '0%',
              color: '#FFFFFF', 
            }}
          >
            <p>
              Mozuma Oceanfront Suite is a captivating oceanfront hotel situated near the Takoradi beach
              in the Western Region of Ghana.
            </p>
            <p>
              Our hotel offers spectacular ocean views with suitable in-room amenities, beautiful decor
              and an outdoor pool—you can relax by the sea and unwind without spending much of a fortune.
            </p>
          </div>
        </div>
      </section>

       {/* Our Story Section */}
       <section
        className="py-5"
        style={{ backgroundColor: '#CFEBEA' }}
      >
        <div className="container text-dark">
          <h2
            className="text-center mb-5 fw-bold"
            style={{
              fontFamily: 'Playfair Display',
              fontWeight: 600,
              fontSize: '64px',
              fontStyle: 'SemiBold',
              lineHeight: '100%',
              letterSpacing: '0%',
              opacity: 1,
              textAlign: 'right'
            }}
          >
            OUR STORY
          </h2>
          <div className="row align-items-right">
            <div className="col-md-6 mb-4 mb-md-0">
              <div
                className="overflow-hidden mx-auto"
                style={{
                  width: '675px',
                  height: '465px',
                  borderRadius: '20px',
                  marginTop: '-30px'
                }}
              >
                <img
                  src='../assets/images/about us/OUR STORY 2.png'
                  alt="Our Story"
                  className="img-fluid"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className="col-md-6 ps-md-5">
              <p
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '1.6',
                  opacity: 1,
                  textAlign: 'justify'
                }}
              >
                At Mozuma OceanFront Suite, our story begins with a love for nature, simplicity, and unforgettable experiences. Nestled between golden sands and lush palms, Mozuma was born out of a vision: to create a place where guests could truly escape, breathe deeply, and feel at home.
              </p>
              <p
                style={{
                  fontFamily: 'Arial',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '1.6',
                  opacity: 1,
                  textAlign: 'justify'
                }}
              >
                From the moment you arrive, you’ll be greeted by the soothing sound of the waves and treated to locally inspired cuisine prepared by our chefs. Every corner is designed to connect you with the serene beauty of Ghana’s coastline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
