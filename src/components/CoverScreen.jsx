import { useState } from 'react';

/**
 * CoverScreen — the initial "Tap to Open" splash screen.
 *
 * @param {string} coverBg - Background image URL
 * @param {function} onOpen - Called when the user taps to open the invitation
 */
const CoverScreen = ({ coverBg, onOpen }) => {
  const [leaving, setLeaving] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLeaving(true);
    setTimeout(() => onOpen(), 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center transition-all duration-700"
      style={{
        backgroundColor: '#F5F3F7',
        opacity: leaving ? 0 : 1,
        transform: leaving ? 'scale(1.04)' : 'scale(1)',
        pointerEvents: leaving ? 'none' : 'auto',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${coverBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.95,
        }}
      />

      <button
        onClick={handleClick}
        aria-label="Open invitation"
        className="relative z-10 flex min-h-screen w-full cursor-pointer flex-col items-center justify-center border-none bg-transparent px-8 focus:outline-none"
      >
        {/* Monogram */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(60px, 14vw, 120px)',
            fontWeight: 300,
            letterSpacing: '0.05em',
            color: '#2B2B2B',
            lineHeight: 1,
            marginBottom: '56px',
            opacity: 0,
            animation: 'fadeUp 1.4s cubic-bezier(.22,.9,.32,1) .4s forwards',
          }}
        >
          Z<span style={{ fontStyle: 'italic', margin: '0 -0.05em' }}>F</span>
        </div>

        {/* Couple names */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(14px, 3.2vw, 20px)',
            letterSpacing: '0.42em',
            fontWeight: 400,
            color: '#2B2B2B',
            textTransform: 'uppercase',
            marginBottom: '12px',
            opacity: 0,
            animation: 'fadeUp 1.4s cubic-bezier(.22,.9,.32,1) .7s forwards',
          }}
        >
          Zaynab · Fahad
        </h1>

        {/* Date */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(11px, 2.4vw, 15px)',
            letterSpacing: '0.5em',
            color: '#7A7372',
            marginBottom: '64px',
            opacity: 0,
            animation: 'fadeUp 1.4s cubic-bezier(.22,.9,.32,1) .95s forwards',
          }}
        >
          5 · 9 · 2026
        </p>

        {/* Blessing */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(14px, 3vw, 18px)',
            lineHeight: 1.9,
            color: '#7A7372',
            fontStyle: 'italic',
            maxWidth: '380px',
            opacity: 0,
            animation: 'fadeUp 1.4s cubic-bezier(.22,.9,.32,1) 1.2s forwards',
          }}
        >
          <p>"May this union be filled with joy,</p>
          <p>and may your blessings light our way."</p>
        </div>

        {/* Tap to Open */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '11px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#7A7372',
            marginTop: '80px',
            opacity: 0,
            animation:
              'fadeUp 1.4s cubic-bezier(.22,.9,.32,1) 1.5s forwards, pulseSoft 3s ease-in-out 2.5s infinite',
          }}
        >
          Tap to Open
        </p>
      </button>
    </div>
  );
};

export default CoverScreen;