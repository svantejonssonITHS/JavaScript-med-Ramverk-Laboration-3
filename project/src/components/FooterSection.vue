<template>
	<footer>
		<div class="d-flex flex-column h-100">
			<!-- FOOTER -->
			<footer class="w-100 py-4 flex-shrink-0">
				<div class="container py-4">
					<div class="row gy-4 gx-5">
						<div class="col-lg-4 col-md-6">
							<h5 class="h1 text-white">Kundeservice</h5>
							<p class="small text-muted">
								08 - 44 68 02 83 Mån - fre: 10.00 - 15.00 support@Accessories by five.se.
							</p>
							<p class="small text-muted mb-0">
								&copy; Copyrights. All rights reserved.
								<a class="text-primary" href="#"> Accessories by five 2022</a>
							</p>
						</div>
						<div class="col-lg-2 col-md-6">
							<h5 class="text-white mb-3">Nyttiga länkar</h5>
							<ul class="list-unstyled text-muted">
								<li><a href="#">Home</a></li>
								<li><a href="#">About</a></li>

								<li><a href="#">FAQ</a></li>
							</ul>
						</div>

						<div class="col-lg-4 col-md-6">
							<h5 class="text-white mb-3">Newsletter</h5>
							<p class="small text-muted">
								Registrera dig för vårt nyhetsbrev och håll dig uppdaterad på nyheter, erbjudanden och
								alla guldkorn! Genom att registrera dig samtycker du till att få nyhetsbrev och
								marknadsföring från Accessories by five.se. Du kan när som helst avsluta
								prenumerationen..
							</p>
							<form action="#">
								<div class="input-group mb-3">
									<input
										class="form-control"
										type="text"
										placeholder="Recipient's username"
										aria-label="Recipient's username"
										aria-describedby="button-addon2"
									/>
									<button class="btn btn-primary" id="button-addon2" type="button">
										<i class="fas fa-paper-plane"></i>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</footer>
		</div>
		<!-- footer Section Begins -->
		<section id="footer" class="footer">
			<div class="footerBg"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<div class="contact-form btm-brdr">
							<div class="form-Box">
								<input type="text" placeholder="Name" class="b_effect" />
							</div>
							<div class="form-Box">
								<input type="text" placeholder="Email" class="b_effect" />
							</div>
							<div class="form-Box"><textarea placeholder="Message" class="b_effect"></textarea></div>
							<div class="form-Box">
								<input type="submit" value="Submit" class="fill-btn" />
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<div class="contact-address btm-brdr">
							<h4 class="fTitle">Contact <span>Us</span></h4>
							<ul>
								<li><i class="fa fa-phone" aria-hidden="true"></i> <span>0046 72 87 21 44</span></li>
								<li>
									<i class="fa fa-map-marker" aria-hidden="true"></i>
									<span>Eketregatan 28 E gothenburg sweeden </span>
								</li>
								<li>
									<i class="fa fa-envelope-o" aria-hidden="true"></i
									><span>info@Accessories by five.se</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<div class="subscribe btm-brdr">
							<h4 class="fTitle">Subscribe <span>Newsletter</span></h4>
							<form>
								<input type="text" placeholder="Example@example.com" />
								<button type="button" class="fill-btn">Subscribe</button>
							</form>
						</div>
						<div class="social-icons">
							<h4 class="fTitle">Social <span>News</span></h4>
							<ul>
								<li>
									<a href="'#" target="_blank"> <i class="fa fa-facebook" aria-hidden="true"></i> </a>
								</li>
								<li>
									<a href="'#" target="_blank"> <i class="fa fa-twitter" aria-hidden="true"></i> </a>
								</li>
								<li>
									<a href="'#" target="_blank">
										<i class="fa fa-youtube-play" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="'#" target="_blank">
										<i class="fa fa-instagram" aria-hidden="true"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- footer Section Ends -->

		<p>{{ footerText }}</p>
	</footer>
</template>
<script>
	export default {
		data() {
			return {
				footerText: 'Copyright Accessories by five 2022'
			};
		}
	};
</script>
<style scoped>
	/*  Footer css */
	.element-btn .element-fill-btn {
		background-color: #ff6600;
		border: 0;
		color: #fff;
		padding: 13px 5px;
		font-size: 16px;
		font-weight: 900;
		font-style: italic;
		text-transform: uppercase;
		width: 252px;
		margin: 0 auto;
		border-radius: 25px;
		transition: all 0.3s ease-in-out;
		-webkit-transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-ms-transition: all 0.3s ease-in-out;
		box-shadow: 0px 10px 50px -10px rgba(255, 10, 120, 1);
	}
	.fill-btn {
		background-color: #ff6600;
		border: 0;
		color: #fff;
		padding: 13px 5px;
		font-size: 16px;
		font-weight: 900;
		font-style: italic;
		text-transform: uppercase;
		width: 252px;
		margin: 0 auto;
		border-radius: 25px;
		position: absolute;
		bottom: -25px;
		left: 50%;
		transform: translate(-50%, 0);
		-webkit-transform: translate(-50%, 0);
		-moz-transform: translate(-50%, 0);
		-ms-transform: translate(-50%, 0);
		transition: all 0.3s ease-in-out;
		-webkit-transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-ms-transition: all 0.3s ease-in-out;
	}
	.fill-btn:hover,
	.element-btn .element-fill-btn:hover {
		background-color: #201f1f;
		box-shadow: 0px 10px 50px -10px rgb(32, 31, 31);
	}

	.footer {
		position: relative;
		background-color: #201f1f;
		padding: 50px 0px;
	}

	.footerBg {
		position: absolute;
		top: 0;
		bottom: 0;
		opacity: 0.13;
		background: url('http://placehold.it/1920x677') no-repeat top center;
		background-size: cover;
		width: 100%;
		height: 100%;
	}

	.form-Box input[type='text'],
	.form-Box input[type='email'],
	.form-Box input[type='passowrd'],
	.form-Box textarea {
		width: 100%;
		height: 50px;
		border: 1px solid #737373;
		border-radius: 25px;
		background-color: transparent;
		padding: 5px 25px;
		margin-bottom: 20px;
		font-size: 14px;
		color: #737373;
		font-style: italic;
		-webkit-transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		text-transform: uppercase;
	}
	.form-Box textarea {
		height: 113px;
		padding: 15px 25px;
		resize: none;
	}
	.form-Box .b_effect:focus,
	.subscribe form input:focus {
		border-color: #ff6600;
	}

	.form-Box .fill-btn {
		position: static;
		transform: translate(0%, 0);
		-webkit-transform: translate(0%, 0);
		-moz-transform: translate(0%, 0);
		-ms-transform: translate(0%, 0);
		width: 184px;
	}

	.form-Box .fill-btn:hover,
	.subscribe form .fill-btn:hover {
		background-color: #ffe402;
		color: #201f1f;
		box-shadow: 0px 10px 50px -10px rgb(255, 228, 2);
	}

	.fTitle {
		font-weight: 900;
		color: #ffffff;
		text-transform: uppercase;
		font-style: italic;
		margin-bottom: 20px;
	}

	.fTitle span {
		color: #ff6600;
	}

	.contact-address ul li,
	.contact-address ul li a {
		color: #737373;
		font-size: 16px;
		font-style: italic;
		margin-bottom: 15px;
		line-height: 32px;
		transition: all 0.3s ease-in-out;
		-webkit-transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-ms-transition: all 0.3s ease-in-out;
	}

	.contact-address {
		padding: 0 15%;
	}

	.contact-address ul li i {
		margin-right: 15px;
		display: inline-block;
		float: left;
		line-height: 32px;
	}

	.contact-address ul li span {
		display: table;
	}

	.contact-address ul li a:hover {
		color: #ff6600;
	}

	.subscribe form {
		position: relative;
		display: inline-block;
		width: 100%;
		margin-bottom: 60px;
	}

	.subscribe form input {
		width: 100%;
		height: 50px;
		border: 1px solid #737373;
		border-radius: 25px;
		background-color: transparent;
		padding: 5px 215px 5px 25px;
		font-size: 14px;
		color: #737373;
		font-style: italic;
	}

	.subscribe form .fill-btn {
		bottom: auto;
		top: 0;
		right: 0;
		left: auto;
		transform: translate(0%, 0);
		-webkit-transform: translate(0%, 0);
		-moz-transform: translate(0%, 0);
		-ms-transform: translate(0%, 0);
		width: 209px;
	}

	.social-icons ul li {
		display: inline-block;
		float: left;
		color: #fff;
		text-align: center;
		line-height: 43px;
		position: relative;
		width: 43px;
		height: 43px;
		margin-right: 28px;
	}

	.social-icons ul li a {
		color: #fff;
		position: relative;
		display: inline-block;
		width: 100%;
		font-size: 16px;
	}

	.social-icons ul li:before {
		content: '';
		width: 43px;
		height: 43px;
		display: inline-block;
		position: absolute;
		border: 1px solid #ff6600;
		transform: rotate(135deg);
		-webkit-transform: rotate(135deg);
		-moz-transform: rotate(135deg);
		-o-transform: rotate(135deg);
		transition: all 0.3s ease-in-out;
		-webkit-transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-ms-transition: all 0.3s ease-in-out;
	}

	.social-icons ul li:last-child {
		margin: 0;
	}

	.social-icons ul li:hover:before {
		background: #ff6600;
	}

	/* Copyright css */

	.copyright {
		padding: 51.5px 0;
		text-align: center;
	}

	.copyright h6 {
		font-size: 14px;
		font-style: italic;
		color: #737373;
	}

	.copyright h6 a {
		color: #ff6600;
		transition: all 0.3s ease-in-out;
		-webkit-transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-ms-transition: all 0.3s ease-in-out;
	}

	.copyright h6 a:hover {
		color: #201f1f;
	}

	body {
		background: #2a2e32;
	}

	.text-small {
		font-size: 0.9rem;
	}

	a {
		color: inherit;
		text-decoration: none;
		transition: all 0.3s;
	}

	a:hover,
	a:focus {
		text-decoration: none;
	}

	.form-control {
		background: #212529;
		border-color: #545454;
	}

	.form-control:focus {
		background: #212529;
	}

	footer {
		background: #212529;
	}

	/* ==========================================
    CUSTOM UTILS CLASSES
  ========================================== */
	body,
	html {
		height: 100%;
	}
	footer {
		background-color: black;
		padding: 10px;
		text-align: center;
		color: rgb(223, 192, 16);
	}
</style>
