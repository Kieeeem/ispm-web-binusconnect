<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\ForumController;
use App\Http\Controllers\Web\MarketplaceController;
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

// ** ROUTE BARU UNTUK MENAMPILKAN FOTO **
Route::get('/marketplace/photo/{product}', [MarketplaceController::class, 'showPhoto'])->name('marketplace.photo');

Route::post('/marketplace/{product}/discussion', [MarketplaceController::class, 'storeDiscussion'])->name('marketplace.discussion.store');


// ... sisa route lainnya ...
require __DIR__.'/auth.php';
