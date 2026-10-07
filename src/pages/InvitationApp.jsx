import { useEffect, useRef, useState } from 'react';
import song from '../assets/song.mp3';
import coverBg from '../assets/cover-bg.png';
import inviteBg from '../assets/invite-bg.jpeg';
import CoverScreen from '../components/CoverScreen';
import InvitationScreen from '../components/InvitationScreen';

const InvitationApp = () => {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  // Countdown
  const weddingDate = new Date('2026-09-05T10:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Start at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Countdown timer
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

  // Handle opening the invitation
  const handleOpen = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    setOpened(true);
    window.scrollTo(0, 0);
  };

  // Google Calendar
  const addToGoogleCalendar = () => {
    if (window.gtag) {
      window.gtag('event', 'calendar_click', {
        event_category: 'engagement',
        event_label: 'Wedding Ceremony',
      });
    }

    const title = 'Aysha & Basim Wedding';
    const venue = 'Masjid Al Noor, Kozhikode';
    const startDate = '20260905T100000';
    const endDate = '20260905T170000';

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&location=${encodeURIComponent(venue)}&details=${encodeURIComponent(
      'Join us in celebrating our special day!'
    )}`;

    setTimeout(() => window.open(url, '_blank'), 200);
  };

  // Location handlers
  const viewLocation = () => {
    if (window.gtag) {
      window.gtag('event', 'location_click', {
        event_category: 'engagement',
        event_label: 'Ceremony - Masjid Al Noor',
      });
    }
    setTimeout(() => window.open('https://www.google.com/maps', '_blank'), 200);
  };

  const ReceptionViewLocation = () => {
    if (window.gtag) {
      window.gtag('event', 'location_click', {
        event_category: 'engagement',
        event_label: 'Reception - The Gateway Hotel',
      });
    }
    setTimeout(() => window.open('https://www.google.com/maps', '_blank'), 200);
  };

  // Everloom signature
  const openPortfolio = () => {
    if (window.gtag) {
      window.gtag('event', 'portfolio_click', {
        event_category: 'engagement',
        event_label: 'Everloom',
        value: 1,
      });
    }
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
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <audio ref={audioRef} src={song} preload="auto" loop />

      {/* Cover (only when not opened) */}
      {!opened && <CoverScreen coverBg={coverBg} onOpen={handleOpen} />}

      {/* Invitation (only when opened) */}
      {opened && (
        <InvitationScreen
          coverBg={coverBg}
          inviteBg={inviteBg}
          timeLeft={timeLeft}
          audioRef={audioRef}
          onCalendarClick={addToGoogleCalendar}
          onLocationClick={viewLocation}
          onReceptionClick={ReceptionViewLocation}
          onPortfolioClick={openPortfolio}
        />
      )}

      {/* Global keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pulseSoft {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
        @keyframes heroReveal {
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(5px); }
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

export default InvitationApp;