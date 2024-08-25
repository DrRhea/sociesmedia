<?php

use App\Http\Controllers\Admin\MainController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Beranda/Beranda');
});

Route::get('/media', function () {
  return Inertia::render('Media/Media');
});

  Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/dashboard', [MainController::class, 'index'])->name('dashboard');
  });