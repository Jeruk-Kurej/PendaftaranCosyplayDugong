<?php

namespace App\Mail;

use App\Models\Registration;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class RegistrationConfirmed extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /** Jumlah percobaan ulang kalau SMTP sedang bermasalah. */
    public int $tries = 3;

    /** Jeda (detik) antar percobaan ulang. */
    public array $backoff = [30, 120];

    public function __construct(public Registration $registration)
    {
        $this->afterCommit();
    }

    /**
     * Header email: siapa pengirim & penerima, balasan ke mana, dan subjeknya.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(config('mail.from.address'), config('mail.from.name')),
            to: [new Address($this->registration->email, $this->registration->name)],
            replyTo: [new Address(config('mail.from.address'), config('mail.from.name'))],
            subject: "🌊 Pendaftaran Berhasil — {$this->registration->ticket_code}",
        );
    }

    /**
     * Isi email: template Blade + data yang boleh dipakai di template tersebut.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail-template.registration-successful',
            with: [
                'name' => $this->registration->name,
                'festival' => config('festival'),
                'ticketUrl' => route('registration.success', $this->registration),
            ],
        );
    }
}
