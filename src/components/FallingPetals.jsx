/**
 * FallingPetals — decorative falling flower petals.
 *
 * Props:
 *   count      → number of petals (default 16)
 *   color      → petal fill color (default deep burgundy)
 *   leafColor  → leaf fill color for mixed petals (default olive green)
 *   mixLeaves  → if true, mixes green leaves with red petals (default false)
 *   minSize    → smallest petal size in px (default 12)
 *   maxSize    → largest petal size in px (default 22)
 *   zIndex     → stacking order (default 20)
 */
const FallingPetals = ({
  count = 16,
  color = '#8B1A1A',
  leafColor = '#5A6B3E',
  mixLeaves = false,
  minSize = 12,
  maxSize = 22,
  zIndex = 20,
}) => {
  // Generate randomized petals once per mount
  const petals = Array.from({ length: count }).map((_, i) => {
    const size = minSize + Math.random() * (maxSize - minSize);
    const left = Math.random() * 95;
    const delay = Math.random() * 9;
    const duration = 10 + Math.random() * 6;
    const rotate = Math.random() * 360 - 180;
    const type = mixLeaves && i % 3 === 0 ? 'leaf' : 'petal';

    return {
      id: i,
      left: `${left}%`,
      size,
      delay: `${delay}s`,
      duration: `${duration}s`,
      rotate: `${rotate}deg`,
      type,
    };
  });

  return (
  <div
  className="pointer-events-none fixed inset-0 overflow-hidden"
  style={{ zIndex }}
  aria-hidden="true"
>
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute"
          style={{
            left: p.left,
            top: '-40px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `petalFall ${p.duration} linear ${p.delay} infinite`,
            willChange: 'transform, opacity',
          }}
        >
          {p.type === 'petal' ? (
            <PetalShape color={color} rotate={p.rotate} />
          ) : (
            <LeafShape color={leafColor} rotate={p.rotate} />
          )}
        </span>
      ))}

      <style>{`
        @keyframes petalFall {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) translateX(20px) rotate(180deg);
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh) translateX(-15px) rotate(360deg);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="petalFall"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

// ---------- Shape sub-components ----------

const PetalShape = ({ color, rotate }) => (
  <svg
    viewBox="0 0 24 24"
    style={{
      width: '100%',
      height: '100%',
      transform: `rotate(${rotate})`,
      filter: 'drop-shadow(0 2px 3px rgba(120, 40, 40, 0.15))',
    }}
  >
    <path
      d="M12 2 C 15 6, 20 10, 20 14 C 20 18, 16 22, 12 22 C 8 22, 4 18, 4 14 C 4 10, 9 6, 12 2 Z"
      fill={color}
      opacity="0.85"
    />
    <path
      d="M12 4 C 13 8, 12 14, 12 20"
      stroke="rgba(90, 20, 20, 0.5)"
      strokeWidth="0.6"
      fill="none"
    />
  </svg>
);

const LeafShape = ({ color, rotate }) => (
  <svg
    viewBox="0 0 24 24"
    style={{
      width: '100%',
      height: '100%',
      transform: `rotate(${rotate})`,
      filter: 'drop-shadow(0 2px 3px rgba(40, 60, 30, 0.15))',
    }}
  >
    <path
      d="M12 3 C 6 6, 6 18, 12 21 C 18 18, 18 6, 12 3 Z"
      fill={color}
      opacity="0.75"
    />
    <path
      d="M12 5 L 12 19"
      stroke="rgba(30, 45, 20, 0.6)"
      strokeWidth="0.8"
      fill="none"
    />
  </svg>
);

export default FallingPetals;