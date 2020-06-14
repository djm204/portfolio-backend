<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/sendContactForm', ['middleware' => 'throttle:3,10', 'uses' => 'ContactFormSubmissionController@sendMail', 'as' => 'send-contact-form-email']);
Route::get('/techImages', ['uses' => 'TechImagesController@getImages', 'as' => 'get-tech-images']);
