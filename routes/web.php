<?php

use App\Models\User;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/docs', function () {
    return redirect('/mosaico-docs/site/index.html');
});

Route::get('privacy', function () {
    return Inertia::render('Privacy');
});

Route::get('login', function () {
    return view('auth.login');
})->name('login');
