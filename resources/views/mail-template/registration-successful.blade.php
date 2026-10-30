@php
    $font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
    $mono = "'SFMono-Regular', Menlo, Consolas, 'Courier New', monospace";
    $details = [
        ['📅', 'Tanggal', $festival['date']],
        ['🕘', 'Waktu', $festival['time']],
        ['📍', 'Lokasi', $festival['venue']],
    ];
    $fields = array_filter([
        'Nama' => $registration->name,
        'Karakter' => $registration->character_name,
        'Kategori' => $registration->category,
        'No. HP' => $registration->phone,
    ]);
@endphp
<!DOCTYPE html>
<html lang="id" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="color-scheme" content="dark">
    <meta name="supported-color-schemes" content="dark">
    <title>Pendaftaran Berhasil — {{ $festival['name'] }}</title>
</head>
<body style="margin:0;padding:0;background-color:#0a2342;font-family:{!! $font !!};-webkit-text-size-adjust:100%;">

    {{-- Preheader: teks ringkas yang tampil di preview inbox --}}
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:#0a2342;">
        Yey, {{ $name }}! Tiketmu {{ $registration->ticket_code }} sudah siap. Sampai jumpa {{ $festival['date'] }}!
        &#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0a2342" style="background-color:#0a2342;background-image:linear-gradient(180deg,#0b3d5a 0%,#0a2342 55%,#0b1530 100%);">
        <tr>
            <td align="center" style="padding:28px 14px 40px;">

                <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:560px;">

                    {{-- BRAND --}}
                    <tr>
                        <td align="center" style="padding:6px 0 4px;font-family:{!! $font !!};font-size:17px;font-weight:700;color:#ffffff;letter-spacing:-0.2px;">
                            🌊 {{ $festival['name'] }}
                        </td>
                    </tr>

                    {{-- HERO --}}
                    <tr>
                        <td align="center" style="padding:28px 8px 0;">
                            <img src="{{ $message->embed(public_path('images/email/dugong.png')) }}" width="230" alt="Dugong {{ $festival['name'] }}" style="display:block;width:230px;max-width:70%;height:auto;border:0;">
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding:24px 8px 0;font-family:{!! $font !!};">
                            <h1 style="margin:0;font-size:32px;line-height:1.2;color:#ffffff;font-weight:800;letter-spacing:-0.5px;">
                                Yey, {{ $name }}! 🎉
                            </h1>
                            <p style="margin:12px 0 0;font-size:15px;line-height:1.65;color:#bfd0e0;">
                                Pendaftaran berhasil. Kami sudah mencatatmu di kategori
                                <strong style="color:#99f6e4;">{{ $registration->category }}</strong>
                                sebagai <strong style="color:#99f6e4;">{{ $registration->character_name }}</strong>.
                            </p>
                        </td>
                    </tr>

                    {{-- TICKET (glass card) --}}
                    <tr>
                        <td style="padding:28px 0 0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#14304f" style="background-color:#14304f;border:1px solid #2c4d6b;border-radius:24px;">
                                <tr>
                                    <td align="center" style="padding:28px 24px 8px;font-family:{!! $font !!};">
                                        <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8ea6bd;font-weight:600;">Kode Tiket</div>
                                        <div style="margin-top:8px;font-family:{!! $mono !!};font-size:32px;line-height:1.2;letter-spacing:2px;color:#99f6e4;font-weight:700;">
                                            {{ $registration->ticket_code }}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:16px 24px 0;">
                                        <div style="border-top:1px dashed #44688a;font-size:0;line-height:0;">&nbsp;</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:16px 24px 24px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                            @foreach (array_chunk($fields, 2, true) as $pair)
                                                <tr>
                                                    @foreach ($pair as $label => $value)
                                                        <td width="50%" valign="top" style="padding:0 8px 14px 0;font-family:{!! $font !!};">
                                                            <div style="font-size:12px;color:#8ea6bd;">{{ $label }}</div>
                                                            <div style="margin-top:2px;font-size:15px;color:#ffffff;font-weight:600;line-height:1.4;">{{ $value }}</div>
                                                        </td>
                                                    @endforeach
                                                </tr>
                                            @endforeach
                                            @if (filled($registration->notes))
                                                <tr>
                                                    <td colspan="2" style="padding:0 0 2px;font-family:{!! $font !!};">
                                                        <div style="font-size:12px;color:#8ea6bd;">Catatan</div>
                                                        <div style="margin-top:2px;font-size:14px;color:#dbe6f0;line-height:1.5;">{{ $registration->notes }}</div>
                                                    </td>
                                                </tr>
                                            @endif
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    {{-- EVENT DETAILS --}}
                    <tr>
                        <td style="padding:16px 0 0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#14304f" style="background-color:#14304f;border:1px solid #2c4d6b;border-radius:24px;">
                                <tr>
                                    <td style="padding:24px 24px 10px;font-family:{!! $font !!};font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8ea6bd;font-weight:600;">Detail Acara</td>
                                </tr>
                                @foreach ($details as [$icon, $label, $value])
                                    <tr>
                                        <td style="padding:0 24px {{ $loop->last ? '24' : '0' }}px;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td width="36" valign="top" style="padding:10px 0;font-size:20px;line-height:1.3;border-top:1px solid #254663;">{{ $icon }}</td>
                                                    <td valign="top" style="padding:10px 0;border-top:1px solid #254663;font-family:{!! $font !!};">
                                                        <div style="font-size:12px;color:#8ea6bd;">{{ $label }}</div>
                                                        <div style="font-size:15px;color:#ffffff;font-weight:600;line-height:1.5;">{{ $value }}</div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                @endforeach
                            </table>
                        </td>
                    </tr>

                    {{-- RUNDOWN --}}
                    <tr>
                        <td style="padding:16px 0 0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#14304f" style="background-color:#14304f;border:1px solid #2c4d6b;border-radius:24px;">
                                <tr>
                                    <td style="padding:24px 24px 10px;font-family:{!! $font !!};font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8ea6bd;font-weight:600;">Rundown Acara</td>
                                </tr>
                                @foreach ($festival['schedule'] as $item)
                                    <tr>
                                        <td style="padding:0 24px {{ $loop->last ? '24' : '0' }}px;">
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td width="70" valign="top" style="padding:12px 0;border-top:1px solid #254663;font-family:{!! $mono !!};font-size:14px;font-weight:700;color:#5eead4;">{{ $item['time'] }}</td>
                                                    <td valign="top" style="padding:12px 0;border-top:1px solid #254663;font-family:{!! $font !!};">
                                                        <div style="font-size:15px;color:#ffffff;font-weight:600;line-height:1.4;">{{ $item['title'] }}</div>
                                                        <div style="margin-top:2px;font-size:13px;color:#8ea6bd;line-height:1.5;">{{ $item['description'] }}</div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                @endforeach
                            </table>
                        </td>
                    </tr>

                    {{-- CTA --}}
                    <tr>
                        <td align="center" style="padding:32px 0 0;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" bgcolor="#5eead4" style="background-color:#5eead4;background-image:linear-gradient(90deg,#5eead4,#38bdf8);border-radius:999px;">
                                        <a href="{{ $ticketUrl }}" target="_blank" style="display:inline-block;padding:15px 38px;font-family:{!! $font !!};font-size:16px;font-weight:800;color:#0f172a;text-decoration:none;border-radius:999px;">
                                            Lihat Tiket Saya &rarr;
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin:18px 0 0;font-family:{!! $font !!};font-size:12px;line-height:1.6;color:#8ea6bd;">
                                Tombol tidak berfungsi? Salin tautan ini:<br>
                                <a href="{{ $ticketUrl }}" style="color:#99f6e4;word-break:break-all;">{{ $ticketUrl }}</a>
                            </p>
                        </td>
                    </tr>

                    {{-- FOOTER --}}
                    <tr>
                        <td align="center" style="padding:32px 12px 0;font-family:{!! $font !!};">
                            <div style="border-top:1px solid #254663;font-size:0;line-height:0;">&nbsp;</div>
                            <p style="margin:20px 0 0;font-size:13px;line-height:1.7;color:#bfd0e0;">
                                Ada pertanyaan? Balas saja email ini.<br>
                                Ikuti kami di <strong style="color:#99f6e4;">{{ $festival['instagram'] }}</strong>
                            </p>
                            <p style="margin:12px 0 0;font-size:12px;line-height:1.6;color:#6f879e;">
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
