@php
    $font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
@endphp
<!DOCTYPE html>
<html lang="id" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="color-scheme" content="light">
    <title>Pendaftaran Berhasil — {{ $festival['name'] }}</title>
</head>
<body style="margin:0;padding:0;background-color:#e9f3f4;font-family:{!! $font !!};-webkit-text-size-adjust:100%;">

    {{-- Preheader: teks ringkas yang tampil di preview inbox --}}
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:#e9f3f4;">
        Halo {{ $name }}, tiketmu {{ $registration->ticket_code }} sudah siap. Sampai jumpa {{ $festival['date'] }}!
        &#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e9f3f4;">
        <tr>
            <td align="center" style="padding:32px 12px;">

                <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">

                    {{-- HEADER --}}
                    <tr>
                        <td align="center" bgcolor="#0b3b44" style="background-color:#0b3b44;background-image:linear-gradient(135deg,#0b3b44 0%,#0f766e 100%);border-radius:20px 20px 0 0;padding:40px 32px 36px;">
                            <div style="font-size:44px;line-height:1;">🐋</div>
                            <div style="margin-top:14px;font-family:{!! $font !!};font-size:13px;letter-spacing:3px;text-transform:uppercase;color:#99f6e4;font-weight:600;">
                                {{ $festival['name'] }}
                            </div>
                            <h1 style="margin:14px 0 0;font-family:{!! $font !!};font-size:28px;line-height:1.25;color:#ffffff;font-weight:800;">
                                Pendaftaranmu berhasil!
                            </h1>
                            <p style="margin:10px 0 0;font-family:{!! $font !!};font-size:15px;line-height:1.5;color:#b6e6df;">
                                {{ $festival['tagline'] }}
                            </p>
                        </td>
                    </tr>

                    {{-- BODY --}}
                    <tr>
                        <td bgcolor="#ffffff" style="background-color:#ffffff;padding:36px 32px 8px;font-family:{!! $font !!};">
                            <p style="margin:0 0 12px;font-size:18px;line-height:1.5;color:#0f172a;font-weight:700;">
                                Halo, {{ $name }}! 👋
                            </p>
                            <p style="margin:0;font-size:15px;line-height:1.7;color:#475569;">
                                Terima kasih sudah mendaftar. Kami sudah mencatat pendaftaranmu sebagai
                                <strong style="color:#0f172a;">{{ $registration->character_name }}</strong>
                                di kategori <strong style="color:#0f172a;">{{ $registration->category }}</strong>.
                                Simpan email ini, karena kode tiket di bawah dibutuhkan saat registrasi ulang.
                            </p>
                        </td>
                    </tr>

                    {{-- TICKET --}}
                    <tr>
                        <td bgcolor="#ffffff" style="background-color:#ffffff;padding:24px 32px 8px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:2px dashed #14b8a6;border-radius:16px;background-color:#f0fdfa;">
                                <tr>
                                    <td align="center" style="padding:26px 16px 22px;font-family:{!! $font !!};">
                                        <div style="font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:#0f766e;font-weight:700;">Kode Tiket</div>
                                        <div style="margin-top:10px;font-family:'SFMono-Regular',Menlo,Consolas,'Courier New',monospace;font-size:32px;line-height:1.2;letter-spacing:3px;color:#0b3b44;font-weight:800;">
                                            {{ $registration->ticket_code }}
                                        </div>
                                        <div style="margin-top:10px;font-size:13px;color:#64748b;">Tunjukkan kode ini di meja registrasi</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    {{-- EVENT DETAILS --}}
                    <tr>
                        <td bgcolor="#ffffff" style="background-color:#ffffff;padding:28px 32px 8px;font-family:{!! $font !!};">
                            <div style="font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:#0f766e;font-weight:700;margin-bottom:14px;">Detail Acara</div>
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                @foreach ([
                                    ['📅', 'Tanggal', $festival['date']],
                                    ['🕘', 'Waktu', $festival['time']],
                                    ['📍', 'Lokasi', $festival['venue']],
                                ] as [$icon, $label, $value])
                                    <tr>
                                        <td width="40" valign="top" style="padding:10px 0;font-size:20px;border-top:1px solid #e2e8f0;">{{ $icon }}</td>
                                        <td valign="top" style="padding:10px 0;border-top:1px solid #e2e8f0;">
                                            <div style="font-size:12px;color:#94a3b8;">{{ $label }}</div>
                                            <div style="font-size:15px;color:#0f172a;font-weight:600;line-height:1.5;">{{ $value }}</div>
                                        </td>
                                    </tr>
                                @endforeach
                            </table>
                        </td>
                    </tr>

                    {{-- REGISTRATION DATA --}}
                    <tr>
                        <td bgcolor="#ffffff" style="background-color:#ffffff;padding:20px 32px 8px;font-family:{!! $font !!};">
                            <div style="font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:#0f766e;font-weight:700;margin-bottom:14px;">Data Pendaftaran</div>
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8fafc;border-radius:12px;">
                                @foreach ([
                                    'Nama' => $registration->name,
                                    'Karakter' => $registration->character_name,
                                    'Kategori' => $registration->category,
                                    'No. HP' => $registration->phone,
                                    'Catatan' => $registration->notes,
                                ] as $label => $value)
                                    @continue(blank($value))
                                    <tr>
                                        <td width="110" valign="top" style="padding:11px 0 11px 18px;font-size:13px;color:#64748b;">{{ $label }}</td>
                                        <td valign="top" style="padding:11px 18px 11px 0;font-size:14px;color:#0f172a;font-weight:600;">{{ $value }}</td>
                                    </tr>
                                @endforeach
                            </table>
                        </td>
                    </tr>

                    {{-- SCHEDULE --}}
                    <tr>
                        <td bgcolor="#ffffff" style="background-color:#ffffff;padding:28px 32px 8px;font-family:{!! $font !!};">
                            <div style="font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:#0f766e;font-weight:700;margin-bottom:14px;">Rundown Acara</div>
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                @foreach ($festival['schedule'] as $item)
                                    <tr>
                                        <td width="64" valign="top" style="padding:12px 0;border-top:1px solid #e2e8f0;">
                                            <span style="display:inline-block;background-color:#ccfbf1;color:#0f766e;font-size:13px;font-weight:800;padding:4px 9px;border-radius:8px;">{{ $item['time'] }}</span>
                                        </td>
                                        <td valign="top" style="padding:12px 0 12px 8px;border-top:1px solid #e2e8f0;">
                                            <div style="font-size:15px;color:#0f172a;font-weight:700;line-height:1.4;">{{ $item['title'] }}</div>
                                            <div style="font-size:13px;color:#64748b;line-height:1.5;margin-top:2px;">{{ $item['description'] }}</div>
                                        </td>
                                    </tr>
                                @endforeach
                            </table>
                        </td>
                    </tr>

                    {{-- CTA --}}
                    <tr>
                        <td align="center" bgcolor="#ffffff" style="background-color:#ffffff;padding:32px 32px 40px;border-radius:0 0 20px 20px;font-family:{!! $font !!};">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" bgcolor="#0f766e" style="background-color:#0f766e;border-radius:12px;">
                                        <a href="{{ $ticketUrl }}" target="_blank" style="display:inline-block;padding:15px 36px;font-family:{!! $font !!};font-size:16px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:12px;">
                                            Lihat Tiket Saya &rarr;
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin:18px 0 0;font-size:13px;line-height:1.6;color:#94a3b8;">
                                Tombol tidak berfungsi? Salin tautan ini ke browser:<br>
                                <a href="{{ $ticketUrl }}" style="color:#0f766e;word-break:break-all;">{{ $ticketUrl }}</a>
                            </p>
                        </td>
                    </tr>

                    {{-- FOOTER --}}
                    <tr>
                        <td align="center" style="padding:28px 24px 8px;font-family:{!! $font !!};">
                            <p style="margin:0;font-size:13px;line-height:1.7;color:#64748b;">
                                Ada pertanyaan? Balas saja email ini.<br>
                                Ikuti kami di <strong style="color:#0f766e;">{{ $festival['instagram'] }}</strong>
                            </p>
                            <p style="margin:14px 0 0;font-size:12px;line-height:1.6;color:#94a3b8;">
                                Salam gelembung, Tim {{ $festival['name'] }} 🌊<br>
                                Email ini dikirim ke {{ $registration->email }} karena kamu mendaftar di {{ $festival['name'] }}.
                            </p>
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>
</body>
</html>
