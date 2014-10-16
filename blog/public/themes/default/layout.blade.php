<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Blog - Renard</title>
		<link href='//fonts.googleapis.com/css?family=OFL+Sorts+Mill+Goudy+TT' rel='stylesheet' type='text/css'/>
		<link href="{{ asset(theme_path('css/style.css')) }}" rel="stylesheet" media="screen">
	</head>
	<body>

		<!--header>
			<h1><a href="{{ Wardrobe::route('/') }}">{{ site_title() }}</a></h1>
			<nav>
				<ul>
					<li><a href="{{ Wardrobe::route('posts.archive') }}">Posts</a></li>
					<li><a href="{{ Wardrobe::route('posts.rss') }}">RSS</a></li>
				</ul>
			</nav>
		</header-->

		<div id="main">
			<div class="head">
				<a href="{{ Wardrobe::route('/') }}">
					<div class="logo"></div>
				</a>
				<div class="blog">blog</div>
			</div>
			<div class="cont">
				<!--div class="date"></div>
				<div class="titl"></div-->
				<div class="text">
					@yield('content')
				<!--a href="#">
					<div class="more">სრულად</div>
				</a-->
				</div>
			</div>
			<!--div class="foot">123</div-->
		</div>

	</body>
</html>
