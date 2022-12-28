<div class="container">  
	<form id="contact" action="" method="post">
	<h3>Liên hệ</h3>
	<h4>Liên hệ với chúng tôi ngay hôm nay và nhận được trả lời trong 24 giờ!</h4>
	<fieldset>
		<input placeholder="Your name" type="text" tabindex="1" required autofocus>
	</fieldset>
	<fieldset>
		<input placeholder="Your Email Address" type="email" tabindex="2" required>
	</fieldset>
	<fieldset>
		<input placeholder="Your Phone Number" type="tel" tabindex="3" required>
	</fieldset>
	<fieldset>
		<input placeholder="Your Web Site starts with http://" type="url" tabindex="4" required>
	</fieldset>
	<fieldset>
		<textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
	</fieldset>
	<fieldset>
		<button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
	</fieldset>
	</form>
	
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.826796156848!2d106.70963182114866!3d10.779616074631804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4dc3c6e92b%3A0x6709b909af6e54b4!2zVmluaG9tZXMgR29sZGVuIFJpdmVyIFPDoGkgR8OybiwgQuG6v24gTmdow6ksIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1672216884525!5m2!1svi!2s" width="100%" height="450" style="border:0; margin: 10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

	
</div>

<style>
	@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600);

* {
	margin:0;
	padding:0;
	box-sizing:border-box;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	-webkit-font-smoothing:antialiased;
	-moz-font-smoothing:antialiased;
	-o-font-smoothing:antialiased;
	font-smoothing:antialiased;
	text-rendering:optimizeLegibility;
}

body {
	font-family:"Open Sans", Helvetica, Arial, sans-serif;
	font-weight:300;
	font-size: 12px;
	line-height:30px;
	color:#777;
	background:#0CF;
}

.container {
	/* max-width:400px; */
	display: flex;
	align-items: center;
	justify-content: center;
	width:100%;
	margin:0 auto;
	position:relative;
}
.container iframe{
	width: 100%;
	margin: 0 auto;
}

#contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea, #contact button[type="submit"] { font:400 12px/16px "Open Sans", Helvetica, Arial, sans-serif; }

#contact {
	background:#F9F9F9;
	padding:25px;
	margin:50px 0;
	max-width:400px;
}

#contact h3 {
	color: #F96;
	display: block;
	font-size: 30px;
	font-weight: 400;
}

#contact h4 {
	margin:5px 0 15px;
	display:block;
	font-size:13px;
}

fieldset {
	border: medium none !important;
	margin: 0 0 10px;
	min-width: 100%;
	padding: 0;
	width: 100%;
}

#contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea {
	width:100%;
	border:1px solid #CCC;
	background:#FFF;
	margin:0 0 5px;
	padding:10px;
}

#contact input[type="text"]:hover, #contact input[type="email"]:hover, #contact input[type="tel"]:hover, #contact input[type="url"]:hover, #contact textarea:hover {
	-webkit-transition:border-color 0.3s ease-in-out;
	-moz-transition:border-color 0.3s ease-in-out;
	transition:border-color 0.3s ease-in-out;
	border:1px solid #AAA;
}

#contact textarea {
	height:100px;
	max-width:100%;
resize:none;
}

#contact button[type="submit"] {
	cursor:pointer;
	width:100%;
	border:none;
	background:#0CF;
	color:#FFF;
	margin:0 0 5px;
	padding:10px;
	font-size:15px;
}

#contact button[type="submit"]:hover {
	background:#09C;
	-webkit-transition: background 0.3s ease-in-out;
	-moz-transition: background 0.3s ease-in-out;
	transition:background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active { box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.5); }

#contact input:focus, #contact textarea:focus {
	outline:0;
	border:1px solid #999;
}
::-webkit-input-placeholder {
color:#888;
}
:-moz-placeholder {
color:#888;
}
::-moz-placeholder {
color:#888;
}
:-ms-input-placeholder {
color:#888;
}
</style>