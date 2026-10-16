<?php

use App\Models\Registration;
use Inertia\Testing\AssertableInertia;

test('public festival pages render the expected component', function (string $uri, string $component) {
    $this->get($uri)
        ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) => $page->component($component));
})->with([
    ['/', 'welcome'],
    ['/tentang', 'about'],
    ['/jadwal', 'schedule'],
    ['/galeri', 'gallery'],
    ['/faq', 'faq'],
    ['/daftar', 'registration'],
]);

test('home page shares the number of registered participants', function () {
    Registration::factory()->count(3)->create();

    $this->get('/')->assertInertia(fn (AssertableInertia $page) => $page->where('totalRegistered', 3));
});
