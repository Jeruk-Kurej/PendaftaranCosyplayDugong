<?php

use App\Mail\RegistrationConfirmed;
use App\Models\Registration;
use Illuminate\Support\Facades\Mail;

$payload = [
    'name' => 'Budi',
    'email' => 'budi@example.com',
    'phone' => '081234567890',
    'character_name' => 'Dugong Samudra',
    'category' => 'Solo',
];

test('landing page renders', function () {
    $this->get('/')->assertOk();
});

test('registration is stored and confirmation email is sent', function () use ($payload) {
    Mail::fake();

    $response = $this->post('/daftar', $payload);

    $registration = Registration::firstWhere('email', 'budi@example.com');
    expect($registration)->not->toBeNull()
        ->and($registration->ticket_code)->toStartWith('DUGONG-');

    $response->assertRedirect(route('registration.success', $registration));

    Mail::assertSent(RegistrationConfirmed::class, fn ($mail) => $mail->hasTo('budi@example.com'));
});

test('duplicate email and invalid data are rejected', function () use ($payload) {
    Mail::fake();
    Registration::factory()->create(['email' => 'budi@example.com']);

    $this->post('/daftar', $payload)->assertSessionHasErrors('email');
    $this->post('/daftar', [...$payload, 'email' => 'x@y.com', 'phone' => 'abc', 'category' => 'Raja'])
        ->assertSessionHasErrors(['phone', 'category']);

    Mail::assertNothingSent();
});

test('mailable renders', function () {
    $html = (new RegistrationConfirmed(Registration::factory()->create()))->render();
    expect($html)->toContain('DUGONG-');
});
