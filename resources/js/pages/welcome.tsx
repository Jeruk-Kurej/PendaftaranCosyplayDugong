import { Form, Head } from '@inertiajs/react';
import RegistrationController from '@/actions/App/Http/Controllers/RegistrationController';
import { Dugong, OceanPage, Waves } from '@/components/dugong/ocean';
import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';

type Props = {
    categories: string[];
    totalRegistered: number;
};

const perks = [
    { icon: '🏆', title: 'Hadiah Menarik', text: 'Best Costume, Best Craftsmanship & Dugong Spirit Award.' },
    { icon: '📸', title: 'Photo Spot Bawah Laut', text: 'Area foto bertema samudra dengan lighting cantik.' },
    { icon: '🎟️', title: 'Tiket via Email', text: 'Kode tiket dikirim langsung ke emailmu setelah daftar.' },
];

const fieldClass =
    'w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-teal-300 focus:bg-white/15 focus:ring-2 focus:ring-teal-300/40';

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
    return (
        <label className="grid gap-1.5 text-sm font-medium text-white/90">
            {label}
            {children}
            <InputError message={error} className="!text-rose-300" />
        </label>
    );
}

export default function Welcome({ categories, totalRegistered }: Props) {
    return (
        <>
            <Head title="Dugong Cosplay Fest — Pendaftaran" />
            <OceanPage>
                <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
                    <span className="text-lg font-bold tracking-tight">🌊 Dugong Cosplay Fest</span>
                    <a href="#daftar" className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20">
                        Daftar Sekarang
                    </a>
                </header>

                <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 pt-8 pb-24 lg:grid-cols-2">
                    <div>
                        <p className="mb-4 inline-block rounded-full border border-teal-300/40 bg-teal-300/10 px-4 py-1 text-sm text-teal-200">
                            🐋 {totalRegistered} peserta sudah menyelam masuk
                        </p>
                        <h1 className="text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
                            Cosplay{' '}
                            <span className="bg-gradient-to-r from-teal-200 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
                                Dugong
                            </span>{' '}
                            Festival
                        </h1>
                        <p className="mt-5 max-w-lg text-lg text-white/75">
                            Selami dunia sang sapi laut! Tampilkan kostum terbaikmu — dari dugong imut,
                            putri duyung, sampai kapten lamun. Semua boleh berenang bareng.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#daftar"
                                className="rounded-full bg-gradient-to-r from-teal-300 to-sky-400 px-7 py-3 font-bold text-slate-900 shadow-lg shadow-teal-400/30 transition hover:scale-105"
                            >
                                Ikut Berenang →
                            </a>
                        </div>
                    </div>
                    <Dugong className="dugong-float mx-auto w-full max-w-md drop-shadow-[0_20px_40px_rgba(45,212,191,0.35)]" />
                </section>

                <Waves className="z-0" />

                <section className="relative z-10 mx-auto grid max-w-6xl gap-4 px-6 pb-16 sm:grid-cols-3">
                    {perks.map((p) => (
                        <div key={p.title} className="glass rounded-2xl p-6">
                            <div className="text-3xl">{p.icon}</div>
                            <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                            <p className="mt-1 text-sm text-white/70">{p.text}</p>
                        </div>
                    ))}
                </section>

                <section id="daftar" className="relative z-10 mx-auto max-w-2xl scroll-mt-8 px-6 pb-24">
                    <div className="glass rounded-3xl p-6 shadow-2xl sm:p-10">
                        <h2 className="text-3xl font-extrabold">Form Pendaftaran</h2>
                        <p className="mt-1 mb-8 text-white/70">Isi data di bawah, tiket akan dikirim ke emailmu. 📬</p>

                        <Form
                            {...RegistrationController.store.form()}
                            resetOnSuccess
                            disableWhileProcessing
                            className="grid gap-5"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <Field label="Nama Lengkap" error={errors.name}>
                                        <input name="name" required placeholder="Nama kamu" className={fieldClass} />
                                    </Field>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <Field label="Email" error={errors.email}>
                                            <input name="email" type="email" required placeholder="kamu@email.com" className={fieldClass} />
                                        </Field>
                                        <Field label="No. HP / WhatsApp" error={errors.phone}>
                                            <input name="phone" type="tel" required placeholder="081234567890" className={fieldClass} />
                                        </Field>
                                    </div>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <Field label="Nama Karakter" error={errors.character_name}>
                                            <input name="character_name" required placeholder="Dugong Samudra" className={fieldClass} />
                                        </Field>
                                        <Field label="Kategori" error={errors.category}>
                                            <select name="category" required defaultValue="" className={fieldClass}>
                                                <option value="" disabled className="text-slate-900">Pilih kategori</option>
                                                {categories.map((c) => (
                                                    <option key={c} value={c} className="text-slate-900">{c}</option>
                                                ))}
                                            </select>
                                        </Field>
                                    </div>
                                    <Field label="Catatan (opsional)" error={errors.notes}>
                                        <textarea name="notes" rows={3} placeholder="Ada yang ingin disampaikan ke panitia?" className={fieldClass} />
                                    </Field>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-300 to-sky-400 px-7 py-3.5 font-bold text-slate-900 shadow-lg shadow-teal-400/30 transition hover:scale-[1.02] disabled:opacity-60"
                                    >
                                        {processing && <Spinner />}
                                        {processing ? 'Mengirim…' : 'Daftar & Kirim Tiket 🐋'}
                                    </button>
                                </>
                            )}
                        </Form>
                    </div>
                </section>

                <footer className="relative z-10 pb-8 text-center text-sm text-white/50">
                    © Dugong Cosplay Fest — dibuat dengan 💙 oleh Profesor Dugong
                </footer>
            </OceanPage>
        </>
    );
}
