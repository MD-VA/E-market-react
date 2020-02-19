<?php

namespace App\Http\Controllers;

use App\Product;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use SebastianBergmann\Environment\Console;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pro = Product::all();
        return $pro;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         $product = new Product();

          if($request->get('image'))
         {
          $image = $request->get('image');
          $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
          \Image::make($request->get('image'))->resize(400, 400)->save(public_path('img/').$name);

          $product->img = 'img/'.$name;

         }

        // if ($request->get('image')) {
        //     $image      = $request->file('image')->store('uploads','public');
        //     $imageF = Image::make(public_path("storage/{$image}"))->resize(1200, 1200);
        //     $imageF->save();
        //     // $fileName   = time() . '.' . $image->getClientOriginalExtension();
        //     // $imageF->save();
        //     $product->image = $image;
        // }
        // dd(Auth::user()) ;
        // dd(auth()->user()->id) ;
             $product->title = $request->get('title');
             $product->price = $request->get('price');
             $product->company = $request->get('company');
            //  $product->description = $request->get('description');
             $product->info= $request->get('info');
             $product->inCart= false;
             $product->count= 0;
             $product->total= 0;
            //  $product->img= $request->get('image');
             $product->save();
            //  $pro =  Product::create($request->all());
             return $product;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
