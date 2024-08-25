<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Beranda/Beranda');
});

Route::get('/media', function () {
  return Inertia::render('Media/Media');
});