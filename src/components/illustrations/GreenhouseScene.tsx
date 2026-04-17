export default function GreenhouseScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Greenhouse illustration"
    >
      <defs>
        <linearGradient id="ghSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0f7f4" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="ghRoof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e4f0ea" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="ghLeaf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#40916c" />
          <stop offset="100%" stopColor="#2d6a4f" />
        </linearGradient>
        <radialGradient id="ghTomato" cx="0.35" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="#c41e4a" />
          <stop offset="100%" stopColor="#7b0c30" />
        </radialGradient>
      </defs>

      {/* Sky / background */}
      <rect width="480" height="360" fill="url(#ghSky)" />

      {/* Sun glow */}
      <circle cx="380" cy="80" r="48" fill="#fdf2f5" opacity="0.6" />

      {/* Ground */}
      <rect x="0" y="290" width="480" height="70" fill="#f5f5f5" />
      <line x1="0" y1="290" x2="480" y2="290" stroke="#e8e8e8" strokeWidth="1" />

      {/* Greenhouse structure */}
      <g>
        {/* Left wall */}
        <line x1="60" y1="290" x2="60" y2="180" stroke="#9a9a9a" strokeWidth="1.5" />
        {/* Right wall */}
        <line x1="420" y1="290" x2="420" y2="180" stroke="#9a9a9a" strokeWidth="1.5" />
        {/* Roof */}
        <polygon
          points="60,180 240,90 420,180 420,290 60,290"
          fill="url(#ghRoof)"
          stroke="#9a9a9a"
          strokeWidth="1.5"
        />
        {/* Roof ridge */}
        <line x1="240" y1="90" x2="240" y2="290" stroke="#c4c4c4" strokeWidth="1" />
        {/* Roof panels */}
        <line x1="150" y1="135" x2="150" y2="290" stroke="#d4d4d4" strokeWidth="1" opacity="0.7" />
        <line x1="330" y1="135" x2="330" y2="290" stroke="#d4d4d4" strokeWidth="1" opacity="0.7" />
        {/* Cross beams */}
        <line x1="60" y1="180" x2="420" y2="180" stroke="#c4c4c4" strokeWidth="1" />
        <line x1="60" y1="230" x2="420" y2="230" stroke="#e8e8e8" strokeWidth="1" />
      </g>

      {/* Tomato vines inside */}
      <g>
        {/* Vine 1 */}
        <line x1="120" y1="290" x2="120" y2="210" stroke="#2d6a4f" strokeWidth="1.5" />
        <ellipse cx="115" cy="240" rx="12" ry="6" fill="url(#ghLeaf)" transform="rotate(-25 115 240)" />
        <ellipse cx="128" cy="225" rx="10" ry="5" fill="url(#ghLeaf)" transform="rotate(20 128 225)" />
        <circle cx="118" cy="265" r="6" fill="url(#ghTomato)" />
        <circle cx="125" cy="275" r="5" fill="url(#ghTomato)" />

        {/* Vine 2 */}
        <line x1="200" y1="290" x2="200" y2="200" stroke="#2d6a4f" strokeWidth="1.5" />
        <ellipse cx="195" cy="230" rx="13" ry="6" fill="url(#ghLeaf)" transform="rotate(-25 195 230)" />
        <ellipse cx="208" cy="215" rx="11" ry="5" fill="url(#ghLeaf)" transform="rotate(20 208 215)" />
        <circle cx="198" cy="258" r="6.5" fill="url(#ghTomato)" />
        <circle cx="206" cy="268" r="5.5" fill="url(#ghTomato)" />
        <circle cx="194" cy="275" r="5" fill="url(#ghTomato)" />

        {/* Vine 3 */}
        <line x1="280" y1="290" x2="280" y2="205" stroke="#2d6a4f" strokeWidth="1.5" />
        <ellipse cx="275" cy="235" rx="12" ry="6" fill="url(#ghLeaf)" transform="rotate(-25 275 235)" />
        <ellipse cx="288" cy="220" rx="10" ry="5" fill="url(#ghLeaf)" transform="rotate(20 288 220)" />
        <circle cx="278" cy="262" r="6" fill="url(#ghTomato)" />
        <circle cx="286" cy="272" r="5" fill="url(#ghTomato)" />

        {/* Vine 4 */}
        <line x1="360" y1="290" x2="360" y2="210" stroke="#2d6a4f" strokeWidth="1.5" />
        <ellipse cx="355" cy="240" rx="12" ry="6" fill="url(#ghLeaf)" transform="rotate(-25 355 240)" />
        <ellipse cx="368" cy="225" rx="10" ry="5" fill="url(#ghLeaf)" transform="rotate(20 368 225)" />
        <circle cx="358" cy="265" r="6" fill="url(#ghTomato)" />
        <circle cx="365" cy="275" r="5" fill="url(#ghTomato)" />
      </g>

      {/* Subtle accent dot */}
      <circle cx="240" cy="90" r="3" fill="#7b0c30" />
    </svg>
  );
}
