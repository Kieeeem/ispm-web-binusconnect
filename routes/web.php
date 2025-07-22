<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/binus-connect', function () {
//     return view('BinusConnect');
// });

Route::get('/{any}', function () {
    return view('app'); // file resources/views/app.blade.php
})->where('any', '.*');

