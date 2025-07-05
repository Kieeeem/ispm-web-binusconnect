<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\ForumReplyController; // <-- MEMANGGIL CONTROLLER BARU

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    
    // Route untuk CRUD Forum (ini kita asumsikan ForumController juga ada di app/Http/Controllers/)
    Route::apiResource('forums', ForumController::class);

    // Route untuk membuat balasan
    Route::post('/forums/{forum}/replies', [ForumReplyController::class, 'store']);

    // Route untuk mengedit balasan
    Route::put('/replies/{reply}', [ForumReplyController::class, 'update']);

    // Route untuk menghapus balasan
    Route::delete('/replies/{reply}', [ForumReplyController::class, 'destroy']);
    
});

// Route publik untuk melihat semua balasan
Route::get('/forums/{forum}/replies', [ForumReplyController::class, 'index']);
