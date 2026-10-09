<?php

use App\Http\Controllers\RegistrationController;
use Illuminate\Support\Facades\Route;

Route::get('/', [RegistrationController::class, 'create'])->name('home');
Route::post('/daftar', [RegistrationController::class, 'store'])->name('registration.store');
Route::get('/tiket/{registration}', [RegistrationController::class, 'success'])->name('registration.success');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
