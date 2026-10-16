<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use Inertia\Inertia;
use Inertia\Response;

class FestivalController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('welcome', [
            'totalRegistered' => Registration::count(),
        ]);
    }
}
