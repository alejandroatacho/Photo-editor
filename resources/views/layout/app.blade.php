<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}">    <meta charset="UTF-8">
    <script src="https://use.fontawesome.com/d1341f9b7a.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Editor</title>

</head>
<!-- 
https://www.skillshare.com/classes/Javascript-Fun-Build-a-Photo-Editor-App/1778415164?via=search-layout-grid
episode 6 
https://codepen.io/sosuke/pen/Pjoqqp
-->
<body>
    @include ('navbar.navbar')
 
<br>
    @yield('content')
    <br>
    @extends ('navbar.footer')
</body>
</html>