<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRegistrationRequest;
use App\Mail\RegistrationConfirmed;
use App\Models\Registration;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class RegistrationController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('registration', [
            'categories' => Registration::CATEGORIES,
        ]);
    }

    public function store(StoreRegistrationRequest $request): RedirectResponse
    {
        $registration = Registration::create($request->validated());

        // Email dikirim langsung. Kalau SMTP bermasalah, pendaftaran tetap berhasil
        // dan errornya dicatat di log (penerima sudah diatur di envelope()).
        try {
            Mail::send(new RegistrationConfirmed($registration));
        } catch (Throwable $e) {
            report($e);
        }

        return to_route('registration.success', $registration->ticket_code);
    }

    public function success(Registration $registration): Response
    {
        return Inertia::render('registration-success', [
            'registration' => $registration->only(['ticket_code', 'name', 'email', 'character_name', 'category']),
        ]);
    }
}
