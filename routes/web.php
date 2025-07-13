<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Main Landing Page Route
Route::get('/', function () {
    return Inertia::render('LandingPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('landing');

// Dashboard Route
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Authenticated User Routes (Profile)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// --- FORUM ROUTES ---

// Route to display the main forum page (list of posts)
Route::get('/forum', function () {
    return Inertia::render('ForumPage');
})->name('forum');

// ** NEW ** Route to display the detail page for a single forum post
Route::get('/forum/{post}', function ($postId) {
    // For now, we just render the page. The page itself uses dummy data.
    // Later, you'll fetch the specific post from your database using the $postId
    return Inertia::render('ForumDetailPage');
})->name('forum.show');


// This line includes all the default authentication routes (login, register, etc.)
require __DIR__.'/auth.php';
