<?php

namespace App\Mail;

use App\Models\Registration;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class RegistrationConfirmed extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Registration $registration) {}

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
