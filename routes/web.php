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

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::resource('product', 'ProductController');


Route::get('/{path}', function () {
    return view('welcome');
})->where('path','.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Route::get('/product/data', 'ProductController@index');
// Route::post('/product/store', 'ProductController@store');
