<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\WidgetController;
use App\Http\Middleware\RateLimiter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(RateLimiter::class)->group(function () {

    // Auth
    Route::post('/login', [AuthController::class, 'loginUser']);

    // Widgets
    Route::group(['prefix' => 'widgets'], function () {
        Route::get('/', [WidgetController::class, 'index']);
        Route::get('/{widget}', [WidgetController::class, 'show']);
    });

    // Protected Routes
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/user', function (Request $request) {
            return $request->user();
        });
    });

});


