<?php

  use App\Http\Controllers\Admin\MainController;
  use App\Http\Controllers\Auth\AuthController;
  use Illuminate\Support\Facades\Route;
  use Inertia\Inertia;

    Route::get('/', function () {
      return Inertia::render('Beranda/Beranda');
    })->name('home');

    Route::get('/media', function () {
      return Inertia::render('Media/Media');
    });

// Group untuk pengguna yang belum login (guest)
  Route::middleware(['guest'])->group(function () {
    // Rute Auth
    Route::get('/login', [AuthController::class, 'login_page'])->name('login_page');
    Route::post('/login', [AuthController::class, 'login'])->name('login'); // Untuk login

    Route::get('/register', [AuthController::class, 'register_page'])->name('register_page'); // Untuk halaman register
    Route::post('/register', [AuthController::class, 'register'])->name('register');

    // Google OAuth routes
    Route::get('/auth/google', [AuthController::class, 'redirectToGoogle'])->name('google.login');
    Route::get('/auth/google/callback', [AuthController::class, 'handleGoogleCallback']);
  });

  Route::middleware(['auth'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
  });


// Group untuk pengguna yang udah login (auth) dan yang punya peran admin (admin)
  Route::middleware(['auth', 'admin', 'owner'])->group(function () {
    Route::get('/dashboard', [MainController::class, 'index'])->name('dashboard');
  });
