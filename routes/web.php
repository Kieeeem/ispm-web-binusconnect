<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\ForumController; 
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Main Landing Page Route
Route::get('/', function () {
    return Inertia::render('LandingPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('landing');

// --- FORUM ROUTES (SEKARANG MENJADI PUBLIK) ---
Route::get('/forum', [ForumController::class, 'index'])->name('forum');
Route::post('/forum', [ForumController::class, 'store'])->name('forum.store');
Route::get('/forum/{forum}', [ForumController::class, 'show'])->name('forum.show');


// Dashboard Route (Tetap perlu login)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Authenticated User Routes (Profile)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Route forum sudah dipindahkan ke luar grup ini
});


// This line includes all the default authentication routes (login, register, etc.)
require __DIR__.'/auth.php';
