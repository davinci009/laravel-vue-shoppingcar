<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'tittle' => $faker->jobTitle,
        'price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 500, $max = 2000),
        'img' => 'noImage.jpg',
    ];
});
