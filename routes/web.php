<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {return view('welcome');});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::apiResource('thoughts', 'ThoughtController');

Route::get('/shop', 'Shop\ShopController@index')->name('shop.index');
Route::get('/products', 'ProductController@index')->name('product.index');

Route::prefix('/v1')->group(function () {
});