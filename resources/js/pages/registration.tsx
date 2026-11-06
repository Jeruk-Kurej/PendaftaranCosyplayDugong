import { Form, Head } from '@inertiajs/react';
import RegistrationController from '@/actions/App/Http/Controllers/RegistrationController';
import { Spinner } from '@/components/ui/spinner';
import InputError from '@/components/input-error';
import FestivalLayout from '@/layouts/festival-layout';
import { festival } from '@/lib/festival';
import { about } from '@/routes';

type Props = {
    categories: string[];
};

const fieldClass =
    'w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-teal-300 focus:bg-white/15 focus:ring-2 focus:ring-teal-300/40';

function Field({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <label className="grid gap-1.5 text-sm font-medium text-white/90">
            {label}
            {children}
            <InputError message={error} className="!text-rose-300" />
        </label>
    );
}

export default function Registration({ categories }: Props) {
    return (
        <FestivalLayout>
            <Head title="Daftar" />

            <section className="mx-auto grid max-w-6xl gap-8 px-6 pt-8 pb-24 lg:grid-cols-[1fr_320px]">
                <div className="glass rounded-3xl p-6 shadow-2xl sm:p-10">
                    <p className="text-sm font-semibold tracking-widest text-teal-200 uppercase">
                        Pendaftaran
                    </p>
                    <h1 className="mt-2 text-4xl font-extrabold">
                        Form Peserta
                    </h1>
                    <p className="mt-2 mb-8 text-white/70">
                        Isi data di bawah. Tiket akan dikirim ke emailmu. 📬
                    </p>

                    <Form
                        {...RegistrationController.store.form()}
                        resetOnSuccess
                        disableWhileProcessing
                        className="grid gap-5"
                    >
                        {({ processing, errors }) => (
                            <>
                                <Field label="Nama Lengkap" error={errors.name}>
                                    <input
                                        name="name"
                                        required
                                        placeholder="Nama kamu"
                                        className={fieldClass}
                                    />
                                </Field>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <Field label="Email" error={errors.email}>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="kamu@email.com"
                                            className={fieldClass}
                                        />
                                    </Field>
                                    <Field
                                        label="No. HP / WhatsApp"
                                        error={errors.phone}
                                    >
                                        <input
                                            name="phone"
                                            type="tel"
                                            required
                                            placeholder="081234567890"
                                            className={fieldClass}
                                        />
                                    </Field>
                                </div>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <Field
                                        label="Nama Karakter"
                                        error={errors.character_name}
                                    >
                                        <input
                                            name="character_name"
                                            required
                                            placeholder="Dugong Samudra"
                                            className={fieldClass}
                                        />
                                    </Field>
                                    <Field
                                        label="Kategori"
                                        error={errors.category}
                                    >
                                        <select
                                            name="category"
                                            required
                                            defaultValue=""
                                            className={fieldClass}
                                        >
                                            <option
                                                value=""
                                                disabled
                                                className="text-slate-900"
                                            >
                                                Pilih kategori
                                            </option>
                                            {categories.map((category) => (
                                                <option
                                                    key={category}
                                                    value={category}
                                                    className="text-slate-900"
                                                >
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                    </Field>
                                </div>
                                <Field
                                    label="Catatan (opsional)"
                                    error={errors.notes}
                                >
                                    <textarea
                                        name="notes"
                                        rows={3}
                                        placeholder="Ada yang ingin disampaikan ke panitia?"
                                        className={fieldClass}
                                    />
                                </Field>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-300 to-sky-400 px-7 py-3.5 font-bold text-slate-900 shadow-lg shadow-teal-400/30 transition hover:scale-[1.02] disabled:opacity-60"
                                >
                                    {processing && <Spinner />}
                                    {processing
                                        ? 'Mengirim…'
                                        : 'Daftar & Kirim Tiket 🐋'}
                                </button>
                            </>
                        )}
                    </Form>
                </div>

                <aside className="grid h-fit gap-4">
                    <div className="glass rounded-3xl p-6">
                        <h2 className="font-bold">Info Acara</h2>
                        <p className="mt-3 text-sm text-white/75">
                            📅 {festival.date}
                        </p>
                        <p className="text-sm text-white/75">
                            🕘 {festival.time}
                        </p>
                        <p className="text-sm text-white/75">
                            📍 {festival.venue}
                        </p>
                    </div>
                    <div className="glass rounded-3xl p-6 text-sm text-white/70">
                        <p>Belum tahu kategori yang cocok?</p>
                        <a
                            href={about().url}
                            className="mt-2 inline-block font-semibold text-teal-200 hover:underline"
                        >
                            Baca penjelasan kategori →
                        </a>
                    </div>
                </aside>
            </section>
        </FestivalLayout>
    );
}
