<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import {Carousel} from 'bootstrap';
	import hinh1 from '$lib/images/banner.jpg';
	import hinh2 from '$lib/images/banner2.jpg';

	import hinh3 from '$lib/images/banner.jpg';
	import proc0 from '$lib/images/proc0.jpg';
	import proc_1 from '$lib/images/proc1.jpg';
	import proc2 from '$lib/images/proc2.jpg';
	import proc3 from '$lib/images/proc3.jpg';
	import proc4 from '$lib/images/proc4.jpg';
	




</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section> -->

<!--  -->
	<main>
		<!--  -->
		<div class="container-fluid text-center bbb">
			<div class="row">
			  <div class="col-4 ">
				<a class="sss" href="/" >FREE SHIP ĐƠN HÀNG TỪ 2 TRIỆU</a>
			  </div>
			  <div class="col-4 ">
				<a class="aaa" href="/">BẢO HÀNH TRỌN ĐỜI</a>
			  </div>
			  <div class="col-4">
				<a class="ccc" href="/">CHÍNH SÁCH THẺ THÀNH VIÊN</a>
			  </div>
			</div>
		  </div>
		<!-- banner -->
		<div>
			<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
				<div class="carousel-indicators">
				  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
				  <div class="carousel-item active">
					<img src={hinh2} class="d-block w-100" alt="...">
				  </div>
				  <div class="carousel-item">
					<img src={hinh2}  class="d-block w-100" alt="...">
				  </div>
				  <div class="carousel-item">
					<img src={hinh2}  class="d-block w-100" alt="...">
				  </div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				  <span class="carousel-control-next-icon" aria-hidden="true"></span>
				  <span class="visually-hidden">Next</span>
				</button>
			  </div>
		</div>
		<div class="container-fluid text-center">
			<p class="best_seller">
				BEST SELLER
			</p>
			<div class="wrapper">
				<div class="clock animated flipInX"></div>
		  </div>
		  <canvas id="confetti"></canvas>
		  <div class="message">Happy New Year !!!</div>
		  <div class="stars"></div>
		  <div class="twinkling"></div>
		  <div class="clouds"></div>
  
  <audio class="happy_mp3 hide" preload="none" id="happy_mp3">
				<source src="https://peter.build/newyears/audio/happy-new-year.m4a" type="audio/m4a">
				<source src="https://peter.build/newyears/audio/happy-new-year.ogg" type="audio/ogg" />
		  </audio>
  
		  <audio class="countdown_mp3 hide" preload="none" id="countdown_mp3">
				<source src="https://peter.build/newyears/audio/countdown.m4a" type="audio/m4a">
				<source src="https://peter.build/newyears/audio/countdown.ogg" type="audio/ogg" />
		  </audio>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-2">
					<img class="proc_1" src={proc0} alt="">	
					<a class="font_chu" href="/">Đầm Trơn Xòe tay Lỡ</a>
				</div>
				<div class="col-2">
					<img class="proc_1" src={proc_1} alt="">	
				</div>
				<div class="col-2">
					<img class="proc_1" src={proc2} alt="">	
				</div>
				<div class="col-2">
					<img class="proc_1" src={proc3} alt="">	
				</div>
				<div class="col-2">
					<img class="proc_1" src={proc4} alt="">	
				</div>
				
				
			</div>
		</div>
		<!-- product -->
		
	</main>


<style>
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
	.aaa{
		width: 100%;
		text-decoration: none;
		
		
	}
	.bbb{
		height: 25px;
		/* background-color: aqua; */

	}
	.ccc{
		width: 100%;
		text-decoration: none;
	}
	.sss{
		width: 100%;
		text-decoration: none;
	}
	.best_seller{
	text-align: center;
	margin-top: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 30px;
    /* line-height: 32px; */
    font-family: 'Montserrat';
    color: #221F20;
}
	
	.proc_1 {
		width: 246px;
		height: 369px;
		position: relative;
		margin-bottom: 16px;
		margin-left: 126px;
		padding-left: 10px;
		border-radius: 2px;
		/* margin-right: 50px; */
	}
	.font_chu{
		color:hsl(225 2% 43%);
		font-size:14px;
		line-height:16px;
		/* margin:0px 0px 10px; */
		margin-left: 100px;
		text-align:center;
		text-transform:apitalize;
		text-decoration: none;
	}
	
	
</style>
