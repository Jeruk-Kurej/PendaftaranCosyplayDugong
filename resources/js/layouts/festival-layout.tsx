import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { OceanPage } from '@/components/dugong/ocean';
import { festival } from '@/lib/festival';
import { about, faq, gallery, home, registration, schedule } from '@/routes';

const navItems = [
    { label: 'Tentang', href: about() },
    { label: 'Jadwal', href: schedule() },
    { label: 'Galeri', href: gallery() },
    { label: 'FAQ', href: faq() },
];

export default function FestivalLayout({ children }: { children: ReactNode }) {
    return (
        <OceanPage>
            <header className="relative z-20 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
                <Link
                    href={home()}
                    className="text-lg font-bold tracking-tight"
                >
                    🌊 {festival.name}
                </Link>
                <nav className="flex flex-wrap items-center gap-1 text-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="rounded-full px-3 py-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href={registration()}
                        className="ml-2 rounded-full bg-gradient-to-r from-teal-300 to-sky-400 px-4 py-2 font-bold text-slate-900 shadow-lg shadow-teal-400/20 transition hover:scale-105"
                    >
                        Daftar
                    </Link>
                </nav>
            </header>

            <main className="relative z-10">{children}</main>

            <footer className="relative z-10 mt-24 border-t border-white/10 bg-slate-950/30 backdrop-blur">
                <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
                    <div>
                        <p className="font-bold">🌊 {festival.name}</p>
                        <p className="mt-2 text-sm text-white/60">
                            {festival.tagline}
                        </p>
                    </div>
                    <div className="text-sm text-white/70">
                        <p className="font-semibold text-white">Kontak</p>
                        <p className="mt-2">{festival.email}</p>
                        <p>{festival.instagram}</p>
                    </div>
                    <div className="text-sm text-white/70">
                        <p className="font-semibold text-white">Acara</p>
                        <p className="mt-2">{festival.date}</p>
                        <p>{festival.time}</p>
                        <p>{festival.venue}</p>
                    </div>
                </div>
                <p className="pb-8 text-center text-xs text-white/40">
                    © {new Date().getFullYear()} {festival.name}. Dibuat dengan
                    💙
                </p>
            </footer>
        </OceanPage>
    );
}
