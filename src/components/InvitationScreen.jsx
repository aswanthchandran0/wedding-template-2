import MusicController from './MusicController';
import FallingPetals from './FallingPetals';
import couplePhoto from '../assets/couple-photo.jpeg';
import flowerLeft from '../assets/flower-left.png';
import flowerBottomRight from '../assets/flower-bottom-right.png';
import { useEffect, useState, useRef } from 'react';
import { CalendarDays, MapPin, Heart } from 'lucide-react';

import gallary1 from '../assets/gallary1.jpeg';
import gallary2 from '../assets/gallary2.jpeg';
import gallary3 from '../assets/gallary3.jpeg';
import gallary4 from '../assets/gallary4.jpeg';
// import gallary5 from '../assets/gallary5.jpeg';

const galleryImages = [
  { id: 1, image: gallary1 },
  { id: 2, image: gallary2 },
  { id: 3, image: gallary3 },
  { id: 4, image: gallary4 },
//   { id: 5, image: gallary5 },
];

const InvitationScreen = ({ audioRef }) => {
  // Couple details
  const brideName = 'Vaani';
  const groomName = 'Krish';
  const brideFull = 'Vaani Batra';
  const groomFull = 'Krish Kapoor';

  // Countdown timer state
  const weddingDate = new Date('2026-09-05T10:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Gallery ref (used for stagger animation if needed later)
  const galleryImagesRef = useRef([]);

  // Tick every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Google Calendar handler
  const addToGoogleCalendar = () => {
    const title = `${groomFull} & ${brideFull} Wedding`;
    const venue = 'The Taj Mahal Palace, Mumbai';
    const startDate = '20260905T100000';
    const endDate = '20260905T170000';

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&location=${encodeURIComponent(
      venue
    )}&details=${encodeURIComponent('Join us in celebrating our special day!')}`;

    setTimeout(() => window.open(url, '_blank'), 200);
  };

  // Ceremony location
  const viewLocation = () => {
    setTimeout(
      () =>
        window.open(
          'https://maps.google.com/?q=The+Taj+Mahal+Palace+Mumbai',
          '_blank'
        ),
      200
    );
  };

  // Reception location
  const viewReceptionLocation = () => {
    setTimeout(
      () =>
        window.open(
          'https://maps.google.com/?q=The+St+Regis+Mumbai',
          '_blank'
        ),
      200
    );
  };

  // Everloom signature link
  const openEverloom = () => {
    setTimeout(
      () =>
        window.open(
          'https://everloom-ruby.vercel.app/',
          '_blank',
          'noopener,noreferrer'
        ),
      200
    );
  };

  return (
   <div
  className="relative w-full overflow-x-hidden"
  style={{
    backgroundColor: '#EFE4D3',
    minHeight: '100vh',
    animation: 'fadeIn 1s ease forwards',
  }}
>
      <MusicController audioRef={audioRef} />

      {/* Soft palm shadow overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 95% 5%, rgba(80,60,40,0.10) 0%, transparent 35%), radial-gradient(circle at 5% 95%, rgba(80,60,40,0.10) 0%, transparent 35%)',
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 mx-auto flex max-w-[560px] flex-col items-center px-6 py-16">

        {/* ---------- HERO SECTION ---------- */}
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
          <p
            className="mb-2 text-center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#8B1A1A',
              fontWeight: 500,
            }}
          >
            The Beginning Of
          </p>
          <p
            className="text-center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#8B1A1A',
              fontWeight: 500,
            }}
          >
            Our Forever
          </p>

          <Divider />

          <div
            className="relative my-10"
            style={{ width: '100%', maxWidth: '360px' }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: '3 / 4',
                background: '#D9CFBE',
                boxShadow: '0 20px 60px rgba(80, 60, 40, 0.15)',
              }}
            >
              <img
                src={couplePhoto}
                alt="Couple"
                className="h-full w-full object-cover"
                style={{
                  filter: 'sepia(0.35) contrast(1.05) brightness(1.02)',
                }}
              />
            </div>

            <img
              src={flowerLeft}
              alt=""
              className="pointer-events-none absolute"
              style={{
                width: '55%',
                top: '-22%',
                left: '-25%',
              }}
            />

            <img
              src={flowerBottomRight}
              alt=""
              className="pointer-events-none absolute"
              style={{
                width: '55%',
                bottom: '-25%',
                right: '-30%',
              }}
            />
          </div>

          {/* ===== COUPLE NAMES ===== */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(16px, 3.2vw, 24px)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#8B1A1A',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              {groomName}
            </span>

            <span
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: 'clamp(24px, 4.5vw, 32px)',
                color: '#6E0F0F',
                lineHeight: 1,
              }}
            >
              &
            </span>

            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(16px, 3.2vw, 24px)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#8B1A1A',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              {brideName}
            </span>
          </div>

          <p
            className="text-center mt-3"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(11px, 2vw, 13px)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#6E0F0F',
              opacity: 0.75,
              fontWeight: 500,
            }}
          >
            {groomFull} &nbsp;·&nbsp; {brideFull}
          </p>

          <Divider small />

          <p
            className="text-center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '11px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#8B1A1A',
              fontWeight: 500,
            }}
          >
            Two Souls · One Journey
          </p>
        </div>

        {/* ---------- GREETINGS SECTION ---------- */}
        <div className="w-full py-20 text-center">
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: '#8B1A1A',
              fontWeight: 500,
              marginBottom: '24px',
            }}
          >
            You Are Invited To
          </p>

          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(42px, 8vw, 60px)',
              color: '#6E0F0F',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Our Wedding
          </h2>

          <Divider />

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '14px',
              lineHeight: 2,
              color: '#5A3A3A',
              fontWeight: 300,
              maxWidth: '420px',
              margin: '32px auto 56px',
              letterSpacing: '0.02em',
            }}
          >
            We would love for you to be part of this very special moment for us.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: '#8B1A1A',
              fontWeight: 500,
              marginBottom: '8px',
            }}
          >
            Until The
          </p>

          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(42px, 8vw, 60px)',
              color: '#6E0F0F',
              lineHeight: 1.1,
            }}
          >
            Big Day
          </h2>
        </div>

        {/* ---------- COUNTDOWN + SCHEDULE + DATE ---------- */}
        <div className="w-full py-20 flex flex-col items-center">
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: '#8B1A1A',
              fontWeight: 500,
              marginBottom: '32px',
            }}
          >
            Counting The Days
          </p>

          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6">
            {[
              { value: timeLeft.days, label: 'DAYS' },
              { value: timeLeft.hours, label: 'HOURS' },
              { value: timeLeft.minutes, label: 'MINS' },
              { value: timeLeft.seconds, label: 'SECS' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(32px, 6vw, 48px)',
                    fontWeight: 500,
                    color: '#8B1A1A',
                    lineHeight: 1,
                  }}
                >
                  {String(item.value).padStart(2, '0')}
                </h3>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '10px',
                    letterSpacing: '0.25em',
                    color: '#6E0F0F',
                    fontWeight: 500,
                    marginTop: '8px',
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={addToGoogleCalendar}
            className="mt-12 flex items-center gap-2 py-3 px-6 transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'transparent',
              border: '1px solid rgba(139, 26, 26, 0.5)',
              color: '#8B1A1A',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            <CalendarDays size={14} />
            <span>Schedule Reminder</span>
          </button>

          <Divider />

          <div className="flex flex-col items-center">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '20px',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#8B1A1A',
                fontWeight: 500,
                marginBottom: '8px',
              }}
            >
              September
            </p>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(80px, 16vw, 120px)',
                fontWeight: 500,
                color: '#6E0F0F',
                lineHeight: 1,
              }}
            >
              05
            </p>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '20px',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#8B1A1A',
                fontWeight: 500,
                marginTop: '8px',
              }}
            >
              2026
            </p>
          </div>
        </div>

        {/* ---------- CEREMONY SECTION ---------- */}
        <div className="w-full py-20 flex flex-col items-center text-center">
          <Divider />

          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(42px, 8vw, 60px)',
              color: '#6E0F0F',
              lineHeight: 1.1,
              marginTop: '24px',
              marginBottom: '24px',
            }}
          >
            Ceremony
          </h2>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '14px',
              lineHeight: 2,
              color: '#5A3A3A',
              fontWeight: 300,
              maxWidth: '420px',
              margin: '0 auto 40px',
              letterSpacing: '0.02em',
            }}
          >
            We would love for you to be a part of our intimate celebration at
            The Taj Mahal Palace, Mumbai.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: '#8B1A1A',
              fontWeight: 500,
              marginBottom: '12px',
            }}
          >
            Muhurtham
          </p>

          <h3
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(32px, 6vw, 44px)',
              color: '#6E0F0F',
              lineHeight: 1,
              marginBottom: '16px',
            }}
          >
            Nikah
          </h3>

          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '15px',
              color: '#5A3A3A',
              letterSpacing: '0.05em',
              marginBottom: '8px',
            }}
          >
            10:00 AM – 12:00 PM
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '17px',
              color: '#8B1A1A',
              fontWeight: 500,
              letterSpacing: '0.05em',
              marginBottom: '32px',
              maxWidth: '360px',
            }}
          >
            The Taj Mahal Palace, Mumbai
          </p>

          <button
            onClick={viewLocation}
            className="flex items-center gap-2 py-3 px-6 transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: '#8B1A1A',
              color: '#EFE4D3',
              border: 'none',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(139, 26, 26, 0.25)',
            }}
          >
            <MapPin size={14} />
            <span>View Location</span>
          </button>

          <div style={{ marginTop: '40px' }}>
            <Divider />
          </div>
        </div>

        {/* ---------- RECEPTION SECTION ---------- */}
        <div className="w-full py-20 flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(42px, 8vw, 60px)',
              color: '#6E0F0F',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Reception
          </h2>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '14px',
              lineHeight: 2,
              color: '#5A3A3A',
              fontWeight: 300,
              maxWidth: '420px',
              margin: '0 auto 40px',
              letterSpacing: '0.02em',
            }}
          >
            An evening of love, laughter &amp; celebration with our families and friends.
          </p>

          <Divider small />

          <div className="flex flex-col items-center mt-8">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '20px',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#8B1A1A',
                fontWeight: 500,
                marginBottom: '8px',
              }}
            >
              September
            </p>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(80px, 16vw, 120px)',
                fontWeight: 500,
                color: '#6E0F0F',
                lineHeight: 1,
              }}
            >
              07
            </p>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '20px',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#8B1A1A',
                fontWeight: 500,
                marginTop: '8px',
              }}
            >
              2026
            </p>
          </div>

          <div style={{ marginTop: '32px', marginBottom: '32px' }}>
            <Divider small />
          </div>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: '#8B1A1A',
              fontWeight: 500,
              marginBottom: '12px',
            }}
          >
            Time
          </p>

          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '15px',
              color: '#5A3A3A',
              letterSpacing: '0.05em',
              marginBottom: '32px',
            }}
          >
            7:00 PM – 11:00 PM
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: '#8B1A1A',
              fontWeight: 500,
              marginBottom: '12px',
            }}
          >
            Location
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '17px',
              color: '#8B1A1A',
              fontWeight: 500,
              letterSpacing: '0.05em',
              marginBottom: '32px',
              maxWidth: '360px',
            }}
          >
            The St. Regis, Mumbai
          </p>

          <button
            onClick={viewReceptionLocation}
            className="flex items-center gap-2 py-3 px-6 transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: '#8B1A1A',
              color: '#EFE4D3',
              border: 'none',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(139, 26, 26, 0.25)',
            }}
          >
            <MapPin size={14} />
            <span>View Location</span>
          </button>

          <div style={{ marginTop: '40px' }}>
            <Divider />
          </div>
        </div>

        {/* ---------- GALLERY SECTION ---------- */}
        <div className="w-full py-20 flex flex-col items-center text-center">
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: '#8B1A1A',
              fontWeight: 500,
              marginBottom: '16px',
            }}
          >
            Our Moments
          </p>

          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(42px, 8vw, 60px)',
              color: '#6E0F0F',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Gallery
          </h2>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '13px',
              lineHeight: 1.8,
              color: '#5A3A3A',
              fontWeight: 300,
              maxWidth: '420px',
              margin: '0 auto 40px',
              letterSpacing: '0.02em',
            }}
          >
            A glimpse of our beautiful journey together.
          </p>

          <Divider small />

          {/* Photo grid */}
          <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:gap-4">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (galleryImagesRef.current[index] = el)}
                className="overflow-hidden"
                style={{
                  boxShadow: '0 10px 30px rgba(80, 60, 40, 0.10)',
                }}
              >
                <img
                  src={item.image}
                  alt={`Gallery ${item.id}`}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <Divider />
          </div>
        </div>

        {/* ---------- CLOSING / FOOTER SECTION ---------- */}
        <div className="w-full py-20 flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(38px, 7vw, 52px)',
              color: '#6E0F0F',
              lineHeight: 1.1,
              marginBottom: '8px',
            }}
          >
            With the love of
          </h2>
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(38px, 7vw, 52px)',
              color: '#8B1A1A',
              lineHeight: 1.1,
              marginBottom: '32px',
            }}
          >
            friends &amp; family
          </h2>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '17px',
              lineHeight: 1.9,
              color: '#5A3A3A',
              maxWidth: '440px',
              margin: '0 auto 40px',
            }}
          >
            Your presence, blessings, and love mean the world to us.
            Thank you for being part of our forever.
          </p>

          <p
            className="text-center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(11px, 2vw, 13px)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#8B1A1A',
              fontWeight: 500,
              marginBottom: '32px',
            }}
          >
            {groomFull} &nbsp;·&nbsp; {brideFull}
          </p>

          <Divider small />

          {/* Everloom signature */}
          <button
            onClick={openEverloom}
            aria-label="Visit Everloom"
            className="group mt-12 inline-flex flex-col items-center gap-3 cursor-pointer bg-transparent border-none focus:outline-none transition-all duration-500 hover:scale-105 active:scale-95"
          >
            <span
              className="relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-500 group-hover:rotate-12"
              style={{
                background: 'linear-gradient(135deg, #8B1A1A 0%, #A82A2A 100%)',
                boxShadow:
                  '0 6px 20px -6px rgba(139,26,26,0.6), inset 0 1px 1px rgba(255,255,255,0.3)',
              }}
            >
              <Heart
                className="w-5 h-5 transition-transform duration-500 group-hover:scale-110"
                style={{ color: '#EFE4D3' }}
                fill="#EFE4D3"
              />
            </span>

            <span className="flex flex-col items-center leading-tight">
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '11px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#8B1A1A',
                  fontWeight: 500,
                }}
              >
                Designed &amp; Developed by
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  color: '#8B1A1A',
                  marginTop: '4px',
                }}
              >
                EVERLOOM
              </span>
              <span
                style={{
                  height: '1px',
                  width: 0,
                  background: '#8B1A1A',
                  transition: 'width 0.5s',
                  marginTop: '4px',
                }}
                className="group-hover:!w-full"
              />
            </span>
          </button>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#8B1A1A',
              opacity: 0.6,
              marginTop: '40px',
            }}
          >
            With Love — Est. Forever
          </p>
        </div>
      </div>

      {/* ===== FALLING PETALS ===== */}
      <FallingPetals count={16} color="#8B1A1A" mixLeaves={false} zIndex={50} />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.001ms !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </div>
  );
};

// ---------- Reusable small pieces ----------

const Divider = ({ small = false }) => (
  <div
    className="flex items-center justify-center gap-3 mx-auto"
    style={{
      width: small ? '80px' : '140px',
      marginTop: small ? '24px' : '24px',
      marginBottom: small ? '12px' : '0px',
    }}
  >
    <span
      style={{
        flex: 1,
        height: '1px',
        background: 'rgba(139, 26, 26, 0.4)',
      }}
    />
    <span
      style={{
        color: '#8B1A1A',
        fontSize: '8px',
        transform: 'rotate(45deg)',
        lineHeight: 1,
      }}
    >
      ✦
    </span>
    <span
      style={{
        flex: 1,
        height: '1px',
        background: 'rgba(139, 26, 26, 0.4)',
      }}
    />
  </div>
);

export default InvitationScreen;