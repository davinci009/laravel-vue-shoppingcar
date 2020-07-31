<?php

namespace App\Http\Controllers\Shop;

use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ShoppingCarController extends Controller
{
    
    public function addToCar($id)
    {
        //return session()->forget('car');
        $product = Product::findOrFail($id);
        
        $car = session()->get('car');

        if (isset($car[$id])) { //update if exist
            $car[$id]['cant'] = $car[$id]['cant'] + 1;

            session()->put('car', $car);
            return session()->get('car');
        }

        $car[$id] = [ //add if no exist
            'id' => $product->id, 
            'title' => $product->tittle,
            'cant' => 1,
            'seller' => 'JOSE BORGES',
            'price' => $product->price,
            'img' => $product->img
        ];

        session()->put('car', $car);

        return session()->get('car');

    }

    public function getCarContent()
    {
        return session()->get('car');
    }

    public function store(Request $request)
    {
        //
    }

    public function deleteOneCar($id)
    {
        $car = session()->get('car');

        $filtered_car = array_filter($car, function($key) use ($id){
            return $key != $id;
        }, ARRAY_FILTER_USE_KEY);

        session()->put('car', $filtered_car);

        return $id;
    }

    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
