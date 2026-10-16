import { Head } from '@inertiajs/react';
import FestivalLayout from '@/layouts/festival-layout';
import { festival, schedule } from '@/lib/festival';

export default function Schedule() {
    return (
        <FestivalLayout>
            <Head title="Jadwal" />

            <section className="mx-auto max-w-3xl px-6 pt-8 pb-16">
                <p className="text-sm font-semibold tracking-widest text-teal-200 uppercase">Jadwal</p>
                <h1 className="mt-3 text-5xl font-extrabold tracking-tight">Rundown Acara</h1>
                <p className="mt-3 text-white/70">
                    {festival.date} · {festival.time}
                </p>
                <p className="mt-2 text-xs text-white/50">Jadwal ini bersifat sementara dan dapat berubah.</p>

                <ol className="relative mt-12 border-l border-white/15 pl-8">
                    {schedule.map((item) => (
                        <li key={item.time} className="mb-10 last:mb-0">
                            <span className="absolute -left-[7px] mt-1.5 size-3.5 rounded-full bg-teal-300 shadow-[0_0_16px_rgba(94,234,212,0.8)]" />
                            <p className="font-mono text-sm font-bold text-teal-200">{item.time} WIB</p>
                            <h2 className="mt-1 text-xl font-bold">{item.title}</h2>
                            <p className="mt-1 text-white/70">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </section>
        </FestivalLayout>
    );
}
