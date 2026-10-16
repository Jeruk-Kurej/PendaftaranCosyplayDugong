<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRegistrationRequest;
use App\Mail\RegistrationConfirmed;
use App\Models\Registration;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

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

        // Kirim email konfirmasi. Ganti ke ->queue(...) kalau mau diproses di background.
        Mail::to($registration->email)->send(new RegistrationConfirmed($registration));

        return to_route('registration.success', $registration->ticket_code);
    }

    public function success(Registration $registration): Response
    {
        return Inertia::render('registration-success', [
            'registration' => $registration->only(['ticket_code', 'name', 'email', 'character_name', 'category']),
        ]);
    }
}
