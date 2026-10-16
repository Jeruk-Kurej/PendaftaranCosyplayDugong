import { Head, Link } from '@inertiajs/react';
import { Dugong, Waves } from '@/components/dugong/ocean';
import FestivalLayout from '@/layouts/festival-layout';
import { awards, categories, festival, schedule } from '@/lib/festival';
import { about, registration, schedule as schedulePage } from '@/routes';

type Props = {
    totalRegistered: number;
};

export default function Welcome({ totalRegistered }: Props) {
    const stats = [
        { value: totalRegistered, label: 'Peserta terdaftar' },
        { value: categories.length, label: 'Kategori lomba' },
        { value: awards.length, label: 'Penghargaan' },
    ];

    return (
        <FestivalLayout>
            <Head title="Beranda" />

            <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-8 pb-24 lg:grid-cols-2">
                <div>
                    <p className="mb-4 inline-block rounded-full border border-teal-300/40 bg-teal-300/10 px-4 py-1 text-sm text-teal-200">
                        🗓️ {festival.date} · {festival.time}
                    </p>
                    <h1 className="text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
                        Cosplay{' '}
                        <span className="bg-gradient-to-r from-teal-200 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
                            Dugong
                        </span>{' '}
                        Festival
                    </h1>
                    <p className="mt-5 max-w-lg text-lg text-white/75">
                        Festival cosplay bertema laut. Tampilkan kostum terbaikmu, dari dugong imut, putri
                        duyung, sampai kapten lamun. Semua boleh berenang bareng.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href={registration()}
                            className="rounded-full bg-gradient-to-r from-teal-300 to-sky-400 px-7 py-3 font-bold text-slate-900 shadow-lg shadow-teal-400/30 transition hover:scale-105"
                        >
                            Ikut Berenang →
                        </Link>
                        <Link
                            href={about()}
                            className="rounded-full bg-white/10 px-7 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
                        >
                            Pelajari Festival
                        </Link>
                    </div>
                </div>
                <Dugong className="dugong-float mx-auto w-full max-w-md drop-shadow-[0_20px_40px_rgba(45,212,191,0.35)]" />
            </section>

            <section className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-3">
                {stats.map((stat) => (
                    <div key={stat.label} className="glass rounded-2xl p-6 text-center">
                        <p className="text-4xl font-extrabold text-teal-200">{stat.value}</p>
                        <p className="mt-1 text-sm text-white/70">{stat.label}</p>
                    </div>
                ))}
            </section>

            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-extrabold">Penghargaan</h2>
                        <p className="mt-1 text-white/70">Setiap kostum punya kesempatan untuk bersinar.</p>
                    </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {awards.map((award) => (
                        <div key={award.title} className="glass rounded-2xl p-6">
                            <div className="text-3xl">{award.icon}</div>
                            <h3 className="mt-3 font-bold">{award.title}</h3>
                            <p className="mt-1 text-sm text-white/70">{award.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Waves className="z-0" />

            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-extrabold">Jadwal Singkat</h2>
                        <p className="mt-1 text-white/70">Jadwal lengkap ada di halaman khusus.</p>
                    </div>
                    <Link href={schedulePage()} className="text-sm font-semibold text-teal-200 hover:underline">
                        Lihat semua jadwal →
                    </Link>
                </div>
                <ol className="grid gap-3">
                    {schedule.slice(0, 3).map((item) => (
                        <li key={item.time} className="glass flex items-center gap-5 rounded-2xl p-5">
                            <span className="font-mono text-lg font-bold text-teal-200">{item.time}</span>
                            <div>
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm text-white/65">{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="mx-auto max-w-4xl px-6 pb-24">
                <div className="glass rounded-3xl p-10 text-center">
                    <h2 className="text-3xl font-extrabold">Siap jadi bagian dari lautan?</h2>
                    <p className="mt-3 text-white/70">Pendaftaran terbuka. Kode tiket dikirim langsung ke emailmu.</p>
                    <Link
                        href={registration()}
                        className="mt-7 inline-block rounded-full bg-gradient-to-r from-teal-300 to-sky-400 px-8 py-3.5 font-bold text-slate-900 shadow-lg shadow-teal-400/30 transition hover:scale-105"
                    >
                        Daftar Sekarang 🐋
                    </Link>
                </div>
            </section>
        </FestivalLayout>
    );
}
