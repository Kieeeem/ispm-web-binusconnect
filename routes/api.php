<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ForumController;
use App\Http\Controllers\Api\ReplyForumController;
use App\Http\Controllers\Api\MarketplaceController;
use App\Http\Controllers\Api\MarketplaceDiscussionController;
use App\Http\Controllers\Api\MarketplaceReplyController; // <-- IMPORT CONTROLLER BARU

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/


Route::middleware('auth:sanctum')->group(function () {
    
    // --- Forum & Replies ---
    Route::apiResource('forums', ForumController::class);
    Route::post('/forums/{forum}/replies', [ReplyForumController::class, 'store']);
    Route::put('/replies/{reply}', [ReplyForumController::class, 'update']);
    Route::delete('/replies/{reply}', [ReplyForumController::class, 'destroy']);
    
    // --- Marketplace ---
    Route::apiResource('marketplaces', MarketplaceController::class)->except(['index', 'show']);

    // --- Marketplace Discussions ---
    Route::post('/marketplaces/{marketplace}/discussions', [MarketplaceDiscussionController::class, 'store']);
    Route::put('/discussions/{discussion}', [MarketplaceDiscussionController::class, 'update']);
    Route::delete('/discussions/{discussion}', [MarketplaceDiscussionController::class, 'destroy']);

    // --- Marketplace Replies ---
    Route::post('/discussions/{discussion}/replies', [MarketplaceReplyController::class, 'store']);
    Route::put('/marketplace-replies/{reply}', [MarketplaceReplyController::class, 'update']);
    Route::delete('/marketplace-replies/{reply}', [MarketplaceReplyController::class, 'destroy']);
    
});

// ==========================================================
// ROUTE PUBLIK (Tidak Butuh Login)
// ==========================================================

// --- Forum & Replies ---
Route::get('/forums/{forum}/replies', [ReplyForumController::class, 'index']);

// --- Marketplace ---
Route::get('/marketplaces', [MarketplaceController::class, 'index']);
Route::get('/marketplaces/{marketplace}', [MarketplaceController::class, 'show']);

// --- Marketplace Discussions ---
Route::get('/marketplaces/{marketplace}/discussions', [MarketplaceDiscussionController::class, 'index']);
