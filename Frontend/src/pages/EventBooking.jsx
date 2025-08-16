import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigate, useLocation } from 'react-router-dom';

export default function EventBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const selectedEvent = query.get('title');

  const [activeTab, setActiveTab] = useState('Events');

  // Guests state
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Date state: default check-in = today, check-out = tomorrow
  const today = new Date();
  const isoDate = (d) => d.toISOString().slice(0, 10);

  const [checkIn, setCheckIn] = useState(isoDate(today));
  const [checkOut, setCheckOut] = useState(
    isoDate(new Date(today.getTime() + 24 * 60 * 60 * 1000))
  );

  // Responsive flag
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Event options (keep your image paths)
  const eventOptions = [
    {
      id: 1,
      title: 'Conference Meetings',
      description:
        'Professional meeting spaces with reliable AV, catering options and ocean views. Perfect for workshops, retreats and corporate gatherings.',
      img: '/assets/images/events/conference.png',
    },
    {
      id: 2,
      title: 'Weddings',
      description:
        'Whether you are planning a romantic dinner or a beachside retreat, Mozuma Oceanfront Suite offers the perfect space — breath-taking views and tailored service.',
      img: '/assets/images/events/wedding.png',
    },
  ];

  // Styles
  const PageWrapperStyle = {
    backgroundColor: '#CFEBEA',
    minHeight: '100vh',
    paddingBottom: '4rem',
  };

  // Darkened inner frame
  const cardOuterStyle = {
    maxWidth: 1000,
    margin: '4rem auto 2.5rem',
    background: '#cdeee9',
    borderRadius: 18,
    padding: '1.25rem',
    border: '2px solid rgba(0,0,0,0.06)',
    boxShadow: '0 6px 18px rgba(0,0,0,0.04)',
  };

  const eventRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1rem',
  };

  const imgWrapStyle = {
    flex: '0 0 44%',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
  };

  const infoCardStyle = {
    flex: '1 1 56%',
    background: '#fff',
    borderRadius: 12,
    padding: '1.25rem',
    minHeight: 180,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
  };

  // tab button style helper
  function tabBtnStyle(active) {
    return {
      borderRadius: 999,
      padding: '8px 16px',
      border: active ? 'none' : '1px solid rgba(0,0,0,0.08)',
      background: active ? '#BFF3F0' : 'transparent',
      boxShadow: active ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
      cursor: 'pointer',
      fontWeight: 600,
    };
  }

  // Helpers
  const formatDisplayDate = (iso) => {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return iso;
    }
  };

  // Ensure check-out is always after check-in (at least +1 day)
  useEffect(() => {
    const ci = new Date(checkIn);
    const co = new Date(checkOut);
    if (co <= ci) {
      const nextDay = new Date(ci.getTime() + 24 * 60 * 60 * 1000);
      setCheckOut(isoDate(nextDay));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkIn]);

  // Guest number guards
  const changeAdults = (delta) => setAdults((a) => Math.max(1, a + delta));
  const changeChildren = (delta) => setChildren((c) => Math.max(0, c + delta));

  // Handler for Pay Now
  const handlePayNow = (e) => {
    const params = new URLSearchParams({
      event: e.title,
      id: e.id,
      checkIn,
      checkOut,
      adults: String(adults),
      children: String(children),
    }).toString();
    navigate(`/payment?${params}`);
  };

  return (
    <div style={PageWrapperStyle}>
      <Header />

      <div style={{ maxWidth: 1100, margin: '4rem auto', padding: '0 1rem' }}>
        <div style={cardOuterStyle}>
          {/* Top controls: Guests / Check-in / Check-out (dynamic) */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Guests control - aligned columns for Adults & Children */}
            <div style={{ flex: '1 1 220px' }}>
              <div style={{ fontSize: 14, color: '#6b6b6b', marginBottom: 6 }}>Guests</div>

              <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                {/* Adults */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Increased font size for Adults label */}
                  <div style={{ fontSize: 16, color: '#333', marginBottom: 6, fontWeight: 600 }}>Adults</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button
                      onClick={() => changeAdults(-1)}
                      aria-label="Decrease adults"
                      style={{
                        padding: 6,
                        borderRadius: 6,
                        cursor: 'pointer',
                        minWidth: 36,
                        textAlign: 'center',
                      }}
                    >
                      −
                    </button>
                    <div style={{ minWidth: 32, textAlign: 'center', fontWeight: 700 }}>{adults}</div>
                    <button
                      onClick={() => changeAdults(1)}
                      aria-label="Increase adults"
                      style={{
                        padding: 6,
                        borderRadius: 6,
                        cursor: 'pointer',
                        minWidth: 36,
                        textAlign: 'center',
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Increased font size for Children label */}
                  <div style={{ fontSize: 16, color: '#333', marginBottom: 6, fontWeight: 600 }}>Children</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button
                      onClick={() => changeChildren(-1)}
                      aria-label="Decrease children"
                      style={{
                        padding: 6,
                        borderRadius: 6,
                        cursor: 'pointer',
                        minWidth: 36,
                        textAlign: 'center',
                      }}
                    >
                      −
                    </button>
                    <div style={{ minWidth: 32, textAlign: 'center', fontWeight: 700 }}>{children}</div>
                    <button
                      onClick={() => changeChildren(1)}
                      aria-label="Increase children"
                      style={{
                        padding: 6,
                        borderRadius: 6,
                        cursor: 'pointer',
                        minWidth: 36,
                        textAlign: 'center',
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Check In */}
            <div style={{ flex: '1 1 160px' }}>
              {/* Increased font size for Check In label */}
              <div style={{ fontSize: 16, color: '#6b6b6b', marginBottom: 6, fontWeight: 600 }}>Check In</div>
              <input
                type="date"
                value={checkIn}
                onChange={(ev) => setCheckIn(ev.target.value)}
                className="form-control"
                aria-label="Check in date"
              />
              <div style={{ fontSize: 12, color: '#444', marginTop: 6 }}>{formatDisplayDate(checkIn)}</div>
            </div>

            {/* Check Out */}
            <div style={{ flex: '1 1 160px' }}>
              {/* Increased font size for Check Out label */}
              <div style={{ fontSize: 16, color: '#6b6b6b', marginBottom: 6, fontWeight: 600 }}>Check Out</div>
              <input
                type="date"
                value={checkOut}
                onChange={(ev) => {
                  const newOut = ev.target.value;
                  if (new Date(newOut) <= new Date(checkIn)) {
                    const ci = new Date(checkIn);
                    const next = new Date(ci.getTime() + 24 * 60 * 60 * 1000);
                    setCheckOut(isoDate(next));
                  } else {
                    setCheckOut(newOut);
                  }
                }}
                className="form-control"
                aria-label="Check out date"
              />
              <div style={{ fontSize: 12, color: '#444', marginTop: 6 }}>{formatDisplayDate(checkOut)}</div>
            </div>
          </div>

          {/* Availability heading */}
          <h2 style={{ marginTop: 8, marginBottom: 14, color: '#6b0b0b', fontFamily: 'Playfair Display, serif' }}>
            Availability
          </h2>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Suites', 'Tours', 'Events'].map((tab) => (
              <button
                key={tab}
                style={tabBtnStyle(activeTab === tab)}
                onClick={() => {
                  if (tab === 'Events') setActiveTab(tab);
                  else navigate(`/${tab.toLowerCase()}`);
                }}
                aria-pressed={activeTab === tab}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div style={{ marginTop: 6 }}>
            {activeTab === 'Events' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {eventOptions.map((e) => (
                  <div
                    key={e.id}
                    style={{
                      ...eventRowStyle,
                      flexDirection: isMobile ? 'column' : 'row',
                    }}
                  >
                    {/* image */}
                    <div style={imgWrapStyle}>
                      <img
                        src={e.img}
                        alt={e.title}
                        style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }}
                      />
                    </div>

                    {/* info card */}
                    <div style={infoCardStyle}>
                      <h3 style={{ margin: 0, fontFamily: 'Playfair Display, serif', fontSize: 22 }}>
                        {e.title}
                      </h3>
                      <p style={{ marginTop: 10, marginBottom: 14, lineHeight: 1.6, color: '#333' }}>
                        {e.description}
                      </p>

                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                        <div style={{ alignSelf: 'center', fontSize: 13, color: '#666' }}>
                          {adults} adults · {children} children
                        </div>

                        <button
                          onClick={() => handlePayNow(e)}
                          style={{
                            padding: '10px 18px',
                            borderRadius: 10,
                            border: 'none',
                            background: '#BFF3F0',
                            boxShadow: '4px 6px 0 rgba(0,0,0,0.12)',
                            cursor: 'pointer',
                            fontWeight: 700,
                          }}
                        >
                          Pay Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.5)', borderRadius: 12 }}>
                <p style={{ margin: 0 }}>Select a tab to view availability.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
