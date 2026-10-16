import { Head, Link } from '@inertiajs/react';
import { Dugong } from '@/components/dugong/ocean';
import FestivalLayout from '@/layouts/festival-layout';
import { home } from '@/routes';

type Props = {
    registration: {
        ticket_code: string;
        name: string;
        email: string;
        character_name: string;
        category: string;
    };
};

export default function RegistrationSuccess({ registration: r }: Props) {
    return (
        <FestivalLayout>
            <Head title="Pendaftaran Berhasil" />

            <main className="mx-auto flex max-w-xl flex-col items-center px-6 pt-8 pb-16 text-center">
                <Dugong className="dugong-float w-56" />
                <h1 className="mt-6 text-4xl font-extrabold">Yey, {r.name}! 🎉</h1>
                <p className="mt-2 text-white/75">
                    Pendaftaran berhasil. Kami sudah mengirim email konfirmasi ke{' '}
                    <strong className="text-teal-200">{r.email}</strong>.
                </p>

                <div className="glass mt-8 w-full rounded-3xl p-6">
                    <p className="text-xs tracking-widest text-white/60 uppercase">Kode Tiket</p>
                    <p className="mt-1 font-mono text-3xl font-bold tracking-wider text-teal-200">{r.ticket_code}</p>
                    <div className="my-5 border-t border-dashed border-white/25" />
                    <dl className="grid grid-cols-2 gap-4 text-left text-sm">
                        <div>
                            <dt className="text-white/55">Karakter</dt>
                            <dd className="font-semibold">{r.character_name}</dd>
                        </div>
                        <div>
                            <dt className="text-white/55">Kategori</dt>
                            <dd className="font-semibold">{r.category}</dd>
                        </div>
                    </dl>
                </div>

                <Link href={home()} className="mt-8 rounded-full bg-white/10 px-6 py-3 font-medium backdrop-blur hover:bg-white/20">
                    ← Kembali ke beranda
                </Link>
            </main>
        </FestivalLayout>
    );
}
