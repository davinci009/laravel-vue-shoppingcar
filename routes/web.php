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

Route:: get('/car/{id}/add', 'Shop\ShoppingCarController@addToCar');
Route:: get('/car/get/content', 'Shop\ShoppingCarController@getCarContent');
Route:: delete('/car/{id}/delete', 'Shop\ShoppingCarController@deleteOneCar');