{{-- jpg converter --}}
@extends('layout.app')

@section('content')
<h1>JPG editor</h1>
<div class="wrapper">
    <div id="upload">
        <label for="uploader">Select file:</label>
        <input type="file" id="uploader">
    
    <div id="buttons">
        <button>Greyscale</button>
        <button>Sepia</button>
        <button>Invert</button>
        <button>RGB > RBG</button>
        <button>RGB > BGR</button>
        <button>RGB > GBR</button>
        <button>RGB > GRB</button>
        <button>Bright</button>
       
    </div> 
    <div>
        <canvas id="canvas">
    
        </canvas>
    </div>
    <button>Clear</button>
    <button onclick="downloadJpg()">Download</button>

</div>
</div>


<script src="{{asset('js/script.js')}}"></script>

@endsection