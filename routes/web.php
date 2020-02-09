<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
$pages = [
    '/',
    '/contact',
    '/tech-summary',
    '/cat-stats'
];

foreach ($pages as $p) {
    Route::get($p, function () {
        return view('app');
    });
}

Route::get('/contactInfo', 'ContactController@get')
    ->name('get-contact-info');
