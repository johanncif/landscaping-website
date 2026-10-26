export function HeroScene() {
  return (
    <div
      className="relative w-full min-h-[280px] overflow-hidden rounded-2xl ring-1 ring-sky-200 lg:min-h-[420px]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 640 480"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Illustration of a green lawn beside a swimming pool"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b9e0f2" />
            <stop offset="100%" stopColor="#e7f4ea" />
          </linearGradient>
          <linearGradient id="lawn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f9a6a" />
            <stop offset="100%" stopColor="#0c6b54" />
          </linearGradient>
          <linearGradient id="pool" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7ec8e3" />
            <stop offset="45%" stopColor="#2a8fc4" />
            <stop offset="100%" stopColor="#0a3a58" />
          </linearGradient>
          <linearGradient id="deck" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8d9bc" />
            <stop offset="100%" stopColor="#c9b48a" />
          </linearGradient>
        </defs>

        <rect width="640" height="480" fill="url(#sky)" />
        <circle cx="540" cy="78" r="38" fill="#ffe08a" />
        <circle cx="540" cy="78" r="54" fill="#ffe08a" opacity="0.28" />

        <ellipse cx="118" cy="168" rx="86" ry="28" fill="#d7eee0" />
        <ellipse cx="210" cy="152" rx="54" ry="20" fill="#d7eee0" opacity="0.8" />

        <rect x="0" y="210" width="640" height="270" fill="url(#lawn)" />
        <path
          d="M0 430 q 40 12 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0"
          fill="none"
          stroke="#0a5a47"
          strokeWidth="10"
          opacity="0.18"
        />
        <path
          d="M0 452 q 50 10 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0"
          fill="none"
          stroke="#0a5a47"
          strokeWidth="8"
          opacity="0.12"
        />

        <rect x="78" y="248" width="484" height="196" rx="18" fill="url(#deck)" />
        <rect x="102" y="268" width="436" height="156" rx="14" fill="url(#pool)" />
        <ellipse cx="250" cy="318" rx="90" ry="18" fill="#d7f3ff" opacity="0.35" />
        <ellipse cx="400" cy="352" rx="70" ry="12" fill="#ffffff" opacity="0.18" />
        <path
          d="M130 310 q 80 18 160 0 t 160 8"
          fill="none"
          stroke="#e8f7ff"
          strokeWidth="3"
          opacity="0.45"
        />
        <path
          d="M160 360 q 90 14 180 0"
          fill="none"
          stroke="#e8f7ff"
          strokeWidth="2"
          opacity="0.3"
        />

        <rect x="468" y="236" width="18" height="44" rx="3" fill="#8b6b3d" />
        <rect x="428" y="228" width="98" height="12" rx="4" fill="#d7c09a" />

        <g transform="translate(70 150)">
          <path d="M36 0 C 18 38, 18 70, 36 118 C 54 70, 54 38, 36 0 Z" fill="#146c4a" />
          <path d="M36 8 C 8 42, 0 78, 22 112" fill="#0c6b54" />
          <path d="M36 8 C 64 42, 72 78, 50 112" fill="#1d8a5c" />
          <rect x="32" y="110" width="8" height="92" rx="3" fill="#6b4a2a" />
        </g>

        <g transform="translate(500 175)">
          <ellipse cx="28" cy="42" rx="34" ry="22" fill="#1d8a5c" />
          <ellipse cx="48" cy="36" rx="22" ry="16" fill="#146c4a" />
          <rect x="24" y="42" width="7" height="48" rx="2" fill="#6b4a2a" />
        </g>

        <rect x="24" y="198" width="42" height="22" rx="4" fill="#0d5f8a" />
        <rect x="38" y="176" width="14" height="24" fill="#0d5f8a" />
      </svg>
    </div>
  );
}
