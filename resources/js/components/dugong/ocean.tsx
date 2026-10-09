import type { ReactNode } from 'react';

const bubbles = Array.from({ length: 16 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    size: 8 + ((i * 13) % 26),
    duration: 9 + ((i * 7) % 11),
    delay: -((i * 5) % 14),
}));

export function Bubbles() {
    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            {bubbles.map((b, i) => (
                <span
                    key={i}
                    className="bubble"
                    style={{
                        left: b.left,
                        width: b.size,
                        height: b.size,
                        animationDuration: `${b.duration}s`,
                        animationDelay: `${b.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}

export function Waves({ className = '' }: { className?: string }) {
    const path =
        'M0 40 C 150 80 350 0 600 40 C 850 80 1050 0 1200 40 L1200 120 L0 120 Z';
    return (
        <div aria-hidden className={`absolute inset-x-0 bottom-0 overflow-hidden ${className}`}>
            <svg className="wave-track h-24 text-teal-300/15" viewBox="0 0 2400 120" preserveAspectRatio="none" fill="currentColor">
                <path d={path} />
                <path d={path} transform="translate(1200 0)" />
            </svg>
        </div>
    );
}

export function OceanPage({ children }: { children: ReactNode }) {
    return (
        <div className="ocean-bg relative min-h-screen overflow-hidden text-white">
            <Bubbles />
            {children}
        </div>
    );
}

export function Dugong({ className = '' }: { className?: string }) {
    return (
        <svg viewBox="0 0 400 240" className={className} role="img" aria-label="Ilustrasi dugong lucu">
            <defs>
                <linearGradient id="dg-body" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#9bb8d9" />
                    <stop offset="1" stopColor="#6f8fbf" />
                </linearGradient>
            </defs>
            {/* tail */}
            <path d="M40 120 C 10 90 0 60 20 40 C 40 60 60 70 85 85 C 60 90 50 100 40 120 C 50 140 60 150 85 160 C 60 175 40 190 20 200 C 0 180 10 150 40 120Z" fill="#6f8fbf" />
            {/* body */}
            <path d="M70 120 C 70 60 170 40 250 60 C 320 75 360 100 358 135 C 356 175 300 195 220 195 C 130 195 70 175 70 120Z" fill="url(#dg-body)" />
            {/* belly */}
            <path d="M120 165 C 180 190 280 190 335 150 C 320 185 270 200 220 200 C 170 200 135 188 120 165Z" fill="#cfe0f2" opacity=".7" />
            {/* flipper */}
            <path d="M200 150 C 215 175 190 205 160 205 C 175 190 180 170 200 150Z" fill="#5d7dae" />
            {/* snout */}
            <ellipse cx="350" cy="135" rx="22" ry="26" fill="#86a4cc" />
            <circle cx="358" cy="128" r="3" fill="#2b3a55" />
            <circle cx="358" cy="142" r="3" fill="#2b3a55" />
            {/* eye */}
            <circle cx="300" cy="105" r="9" fill="#fff" />
            <circle cx="303" cy="106" r="5" fill="#1d2a44" />
            <circle cx="305" cy="104" r="1.8" fill="#fff" />
            {/* blush */}
            <ellipse cx="318" cy="130" rx="9" ry="5" fill="#ff9db5" opacity=".6" />
            {/* cosplay crown */}
            <path d="M255 62 L265 30 L282 52 L298 26 L308 62Z" fill="#ffd166" stroke="#e8a317" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="265" cy="30" r="4" fill="#ff6b9d" />
            <circle cx="298" cy="26" r="4" fill="#5eead4" />
            {/* seagrass */}
            <path d="M120 240 C 115 210 130 200 120 175" stroke="#34d399" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M140 240 C 150 215 135 205 148 185" stroke="#10b981" strokeWidth="5" fill="none" strokeLinecap="round" />
        </svg>
    );
}
