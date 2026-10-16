import { Head, Link } from '@inertiajs/react';
import { Dugong } from '@/components/dugong/ocean';
import FestivalLayout from '@/layouts/festival-layout';
import { categories, festival } from '@/lib/festival';
import { registration } from '@/routes';

export default function About() {
    return (
        <FestivalLayout>
            <Head title="Tentang Festival" />

            <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-8 pb-16 lg:grid-cols-2">
                <div>
                    <p className="text-sm font-semibold tracking-widest text-teal-200 uppercase">Tentang</p>
                    <h1 className="mt-3 text-5xl font-extrabold tracking-tight">{festival.name}</h1>
                    <p className="mt-5 text-lg text-white/75">
                        {festival.name} adalah festival cosplay yang merayakan kreativitas dan kecintaan pada
                        dunia laut. Dari dugong yang menggemaskan sampai putri duyung legendaris, setiap
                        kostum membawa cerita sendiri ke atas panggung.
                    </p>
                    <p className="mt-4 text-white/65">
                        Festival ini terbuka untuk cosplayer pemula maupun yang sudah berpengalaman. Yang
                        penting adalah semangat dan kesenangan bersama.
                    </p>
                </div>
                <Dugong className="mx-auto w-full max-w-sm" />
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
                <h2 className="text-3xl font-extrabold">Kategori Lomba</h2>
                <p className="mt-1 mb-8 text-white/70">Pilih kategori sesuai jumlah dan konsep tim kamu.</p>
                <div className="grid gap-4 md:grid-cols-3">
                    {categories.map((category) => (
                        <div key={category.name} className="glass rounded-3xl p-7">
                            <p className="text-2xl font-extrabold text-teal-200">{category.name}</p>
                            <p className="mt-3 text-sm leading-relaxed text-white/70">{category.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-4 px-6 py-16 md:grid-cols-2">
                <div className="glass rounded-3xl p-8">
                    <h2 className="text-2xl font-extrabold">Info Acara</h2>
                    <dl className="mt-5 grid gap-4 text-sm">
                        <div>
                            <dt className="text-white/55">Tanggal</dt>
                            <dd className="font-semibold">{festival.date}</dd>
                        </div>
                        <div>
                            <dt className="text-white/55">Waktu</dt>
                            <dd className="font-semibold">{festival.time}</dd>
                        </div>
                        <div>
                            <dt className="text-white/55">Lokasi</dt>
                            <dd className="font-semibold">{festival.venue}</dd>
                        </div>
                    </dl>
                </div>
                <div className="glass rounded-3xl p-8">
                    <h2 className="text-2xl font-extrabold">Hubungi Panitia</h2>
                    <p className="mt-3 text-sm text-white/70">
                        Ada pertanyaan yang belum terjawab? Kirim email atau cek Instagram kami.
                    </p>
                    <p className="mt-5 font-semibold">{festival.email}</p>
                    <p className="font-semibold text-teal-200">{festival.instagram}</p>
                    <Link href={registration()} className="mt-6 inline-block font-semibold text-teal-200 hover:underline">
                        Daftar sekarang →
                    </Link>
                </div>
            </section>
        </FestivalLayout>
    );
}
