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

// --- FORUM ROUTES (PUBLIK UNTUK TES) ---
Route::get('/forum', [ForumController::class, 'index'])->name('forum');
Route::post('/forum', [ForumController::class, 'store'])->name('forum.store');
Route::get('/forum/{forum}', [ForumController::class, 'show'])->name('forum.show');

// ** ROUTE BARU UNTUK MENYIMPAN BALASAN **
Route::post('/forum/{forum}/replies', [ForumController::class, 'storeReply'])->name('replies.store');


// Dashboard Route (Tetap perlu login)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Authenticated User Routes (Profile)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//marketplace
Route::get('/marketplace', function () {
    // Nanti, Anda akan memanggil controller di sini untuk mengambil data produk
    return Inertia::render('MarketplacePage'); 
})->name('marketplace');

//detail marketplace
Route::get('/marketplace/{product}', function () {
    return Inertia::render('MarketplaceDetailPage');
})->name('marketplace.show');


// This line includes all the default authentication routes (login, register, etc.)
require __DIR__.'/auth.php';
