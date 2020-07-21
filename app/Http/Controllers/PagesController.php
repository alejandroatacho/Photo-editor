<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function home(){
        return view('home');
    }
    public function coloreffectjpg(){
        return view('pages.coloreffectjpg');
    }
    public function coloreffectpng(){
        return view('pages.coloreffectpng');
    }
}
