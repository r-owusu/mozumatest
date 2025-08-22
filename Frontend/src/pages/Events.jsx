import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
export default function Events() {
  const navigate = useNavigate();

  
const WeddingsImg = '../../public/assets/images/events/wedding.png'; 
const DinnerImg = '../../public/assets/images/events/dinner.png';
const MovieImg = '../../public/assets/images/events/movie.png';
const BirthdayImg = '../../public/assets/images/events/birthday.png';
const ConferenceImg = '../../public/assets/images/events/conference.png';
=======




const WeddingsImg = '../../assets/images/events/wedding.png';
const DinnerImg = '../../assets/images/events/dinner.png';
const MovieImg = '../../assets/images/events/movie.png';
const BirthdayImg = '../../assets/images/events/birthday.png';
const ConferenceImg = '../../assets/images/events/conference.png';


export default function Events() {
  const navigate = useNavigate();

>>>>>>> b73d966d561d21b998a6cc481dd9b5f94d98e4ce
  const events = [
    {
      id: 1,
      title: 'Weddings',
      description:
        'Whether you are planning a romantic dinner, or a beachside retreat, Mozuma Oceanfront Suite offers the perfect space. Breath-taking views, tailored service, and unforgettable moments await.',
      img: WeddingsImg,
    },
    {
      id: 2,
      title: 'Dinner Nights',
      description:
        'Enjoy an intimate evening of curated menus and ocean breeze. A perfect setting for couples, families, and small groups to celebrate together.',
      img: DinnerImg,
    },
    {
      id: 3,
      title: 'Movie Nights',
      description:
        'Cozy up in our private screening room for themed movie nights—popcorn included. Great for family nights, team building, and private previews.',
      img: MovieImg,
    },
    {
      id: 4,
      title: 'Birthday Bash',
      description:
        'Celebrate under the palms with a personalized setup, cake, and sunset views. From small gatherings to larger parties we make birthdays special.',
      img: BirthdayImg,
    },
    {
      id: 5,
      title: 'Conference Meetings',
      description:
        'Professional meeting spaces with reliable AV, catering options and ocean views. Perfect for workshops, retreats and corporate gatherings.',
      img: ConferenceImg,
    },
  ];

  return (
    <div style={{ backgroundColor: '#CFEBEA', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          height: '60vh',
<<<<<<< HEAD
           backgroundImage: "url('../../assets/images/events/bgimg.jpg')",
=======
          backgroundImage: "url('../../assets/images/events/bgimg.jpg')",
>>>>>>> b73d966d561d21b998a6cc481dd9b5f94d98e4ce
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.35)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '48px',
              color: '#FFFFFF',
              marginBottom: '1rem',
            }}
          >
            Events
          </h1>
          <button
            className="btn btn-link text-white"
            onClick={() => window.scrollTo({ top: window.innerHeight - 40, behavior: 'smooth' })}
            aria-label="Scroll to events"
          >
            <span style={{ fontSize: '32px' }}>⌄</span>
          </button>
        </div>
      </section>

<<<<<<< HEAD
      {/* Events list */}
      <main className="container py-5">
        <div className="row gy-5">
          {events.map((e) => (
=======
      {/* Events list (scrollable by default) */}
      <main className="container py-5">
        <div className="row gy-5">
          {events.map((e, idx) => (
>>>>>>> b73d966d561d21b998a6cc481dd9b5f94d98e4ce
            <div key={e.id} className="col-12">
              <div className="row align-items-center">
                {/* image */}
                <div className="col-md-5 mb-3 mb-md-0">
                  <div style={{ overflow: 'hidden', borderRadius: '12px' }}>
                    <img
                      src={e.img}
                      alt={e.title}
                      className="img-fluid w-100"
                      style={{ height: '260px', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                {/* content */}
                <div className="col-md-7">
<<<<<<< HEAD
                  <h3
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '28px',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {e.title}
                  </h3>
=======
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', marginBottom: '0.5rem' }}>{e.title}</h3>
>>>>>>> b73d966d561d21b998a6cc481dd9b5f94d98e4ce
                  <p style={{ textAlign: 'justify', lineHeight: 1.7 }}>{e.description}</p>

                  <button
                    className="btn"
                    style={{ backgroundColor: '#BFF3F0', boxShadow: '4px 6px 0 rgba(0,0,0,0.12)' }}
<<<<<<< HEAD
                    onClick={() => navigate(`/booking?event=${e.id}&title=${encodeURIComponent(e.title)}`)}
                  >
                    Book Now
=======
                    onClick={() => navigate(`/events/${e.id}`)}
                  >
                    View Details
>>>>>>> b73d966d561d21b998a6cc481dd9b5f94d98e4ce
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
