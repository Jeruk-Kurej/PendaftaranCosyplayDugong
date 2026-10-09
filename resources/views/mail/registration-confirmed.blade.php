<x-mail::message>
# Halo, {{ $registration->name }}! 🌊

Pendaftaran kamu di **Dugong Cosplay Fest** sudah kami terima. Sampai jumpa di lautan!

<x-mail::panel>
**Kode Tiket:** {{ $registration->ticket_code }}
</x-mail::panel>

<x-mail::table>
| Detail | Info |
| :----- | :--- |
| Karakter | {{ $registration->character_name }} |
| Kategori | {{ $registration->category }} |
| No. HP | {{ $registration->phone }} |
</x-mail::table>

Tunjukkan kode tiket di atas saat registrasi ulang di lokasi acara.

<x-mail::button :url="route('registration.success', $registration)">
Lihat Tiket
</x-mail::button>

Salam gelembung,<br>
Tim {{ config('app.name') }} 🐋
</x-mail::message>
