import { Head } from '@inertiajs/react';
import FestivalLayout from '@/layouts/festival-layout';

// Ganti dengan foto asli dari festival. Taruh file di public/images/gallery/ lalu isi "src".
const shots = [
    { title: 'Sesi Foto Samudra', tone: 'from-teal-400 to-sky-600' },
    { title: 'Putri Duyung', tone: 'from-fuchsia-400 to-violet-600' },
    { title: 'Kapten Lamun', tone: 'from-emerald-400 to-teal-700' },
    { title: 'Dugong Samudra', tone: 'from-sky-300 to-indigo-600' },
    { title: 'Penampilan Grup', tone: 'from-amber-300 to-rose-500' },
    { title: 'Momen Pemenang', tone: 'from-cyan-300 to-blue-700' },
];

export default function Gallery() {
    return (
        <FestivalLayout>
            <Head title="Galeri" />

            <section className="mx-auto max-w-6xl px-6 pt-8 pb-16">
                <p className="text-sm font-semibold tracking-widest text-teal-200 uppercase">
                    Galeri
                </p>
                <h1 className="mt-3 text-5xl font-extrabold tracking-tight">
                    Momen dari Lautan
                </h1>
                <p className="mt-3 max-w-xl text-white/70">
                    Dokumentasi edisi sebelumnya. Foto baru akan ditambahkan
                    setelah acara.
                </p>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {shots.map((shot) => (
                        <figure
                            key={shot.title}
                            className={`group relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br ${shot.tone}`}
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-40 transition duration-500 group-hover:scale-110">
                                🐋
                            </div>
                            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-5">
                                <p className="font-semibold">{shot.title}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>
        </FestivalLayout>
    );
}
