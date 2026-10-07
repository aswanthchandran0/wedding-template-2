import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
        className="relative z-10 flex min-h-screen w-full cursor-pointer flex-col items-center justify-center border-none bg-transparent px-6 sm:px-8 focus:outline-none"
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
            marginBottom: '48px',
            opacity: 0,
            animation: 'fadeUp 1.4s cubic-bezier(.22,.9,.32,1) .4s forwards',
          }}
        >
          K<span style={{ fontStyle: 'italic', margin: '0 -0.05em' }}>V</span>
        </div>

        {/* Couple names — single line, auto-scaling */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(11px, 2.6vw, 18px)',
            letterSpacing: 'clamp(0.18em, 1.4vw, 0.36em)',
            fontWeight: 400,
            color: '#2B2B2B',
            textTransform: 'uppercase',
            marginBottom: '12px',
            paddingLeft: '0.36em',
            whiteSpace: 'nowrap',
            opacity: 0,
            animation: 'fadeUp 1.4s cubic-bezier(.22,.9,.32,1) .7s forwards',
          }}
        >
          Krish Kapoor · Vaani Batra
        </h1>

        {/* Date — SAME SIZE as original (11px → 15px) */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(11px, 2.4vw, 15px)',
            letterSpacing: '0.5em',
            paddingLeft: '0.5em',
            color: '#7A7372',
            marginBottom: '56px',
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

        {/* TAP TO OPEN */}
        <div
          className="mt-16 flex flex-col items-center gap-3"
          style={{
            opacity: 0,
            animation: 'fadeUp 1.4s cubic-bezier(.22,.9,.32,1) 1.5s forwards',
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '11px',
              letterSpacing: '0.42em',
              paddingLeft: '0.42em',
              textTransform: 'uppercase',
              color: '#2B2B2B',
              fontWeight: 600,
              textShadow: '0 1px 8px rgba(255,255,255,0.9)',
            }}
          >
            Tap to Open
          </span>
        </div>
      </button>

      <style>{`
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(4px); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="bounceDown"], [style*="pulseRing"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CoverScreen;