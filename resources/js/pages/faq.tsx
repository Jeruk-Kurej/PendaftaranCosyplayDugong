import { Head, Link } from '@inertiajs/react';
import FestivalLayout from '@/layouts/festival-layout';
import { faqs } from '@/lib/festival';
import { registration } from '@/routes';

export default function Faq() {
    return (
        <FestivalLayout>
            <Head title="FAQ" />

            <section className="mx-auto max-w-3xl px-6 pt-8 pb-16">
                <p className="text-sm font-semibold tracking-widest text-teal-200 uppercase">FAQ</p>
                <h1 className="mt-3 text-5xl font-extrabold tracking-tight">Pertanyaan Umum</h1>
                <p className="mt-3 text-white/70">Belum menemukan jawabanmu? Hubungi panitia lewat halaman tentang.</p>

                <div className="mt-10 grid gap-3">
                    {faqs.map((faq) => (
                        <details key={faq.question} className="glass group rounded-2xl p-6 open:bg-white/15">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                                {faq.question}
                                <span className="text-teal-200 transition group-open:rotate-45">+</span>
                            </summary>
                            <p className="mt-3 text-sm leading-relaxed text-white/70">{faq.answer}</p>
                        </details>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href={registration()} className="font-semibold text-teal-200 hover:underline">
                        Sudah siap? Daftar sekarang →
                    </Link>
                </div>
            </section>
        </FestivalLayout>
    );
}
