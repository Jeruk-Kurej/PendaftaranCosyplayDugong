<?php

use App\Http\Controllers\FestivalController;
use App\Http\Controllers\RegistrationController;
use Illuminate\Support\Facades\Route;

Route::get('/', [FestivalController::class, 'home'])->name('home');
Route::inertia('/tentang', 'about')->name('about');
Route::inertia('/jadwal', 'schedule')->name('schedule');
Route::inertia('/galeri', 'gallery')->name('gallery');
Route::inertia('/faq', 'faq')->name('faq');

Route::get('/daftar', [RegistrationController::class, 'create'])->name('registration');
Route::post('/daftar', [RegistrationController::class, 'store'])->name('registration.store');
Route::get('/tiket/{registration}', [RegistrationController::class, 'success'])->name('registration.success');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
