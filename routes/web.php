<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\EventController; 
use App\Http\Controllers\Web\OrganizationController; 
use App\Http\Controllers\Web\ForumController;
use App\Http\Controllers\Web\MarketplaceController;
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

// --- FORUM ROUTES ---
Route::get('/forum', [ForumController::class, 'index'])->name('forum');
Route::post('/forum', [ForumController::class, 'store'])->name('forum.store');
Route::get('/forum/{forum}', [ForumController::class, 'show'])->name('forum.show');
Route::post('/forum/{forum}/replies', [ForumController::class, 'storeReply'])->name('replies.store');

// --- MARKETPLACE ROUTES ---
Route::get('/marketplace', [MarketplaceController::class, 'index'])->name('marketplace');
Route::get('/marketplace/create', [MarketplaceController::class, 'create'])->name('marketplace.create');
Route::post('/marketplace', [MarketplaceController::class, 'store'])->name('marketplace.store');
Route::get('/marketplace/{product}', [MarketplaceController::class, 'show'])->name('marketplace.show');
Route::post('/marketplace/{product}/discussion', [MarketplaceController::class, 'storeDiscussion'])->name('marketplace.discussion.store');

// --- EVENTS ROUTES ---
Route::get('/events', [EventController::class, 'index'])->name('events');
Route::get('/events/create', [EventController::class, 'create'])->name('events.create');
Route::post('/events', [EventController::class, 'store'])->name('events.store');
Route::get('/events/{event}', [EventController::class, 'show'])->name('events.show');

//organization
Route::get('/organization', [OrganizationController::class, 'index'])->name('organization.index');

Route::get('/organization/{organization}', [OrganizationController::class, 'show'])->name('organization.show');




// Dashboard Route (Requires login)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Authenticated User Routes (Profile)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
