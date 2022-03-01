<template>
	<footer>
		<div class="d-flex flex-column h-100">
			<!-- FOOTER -->
			<footer class="w-100 py-4 flex-shrink-0">
				<div class="container py-4">
					<div class="row gy-4 gx-5">
						<div class="col-lg-4 col-md-6">
							<h5 class="h1 text-white">Kundservice</h5>
							<p class="small text-muted">
								08 - 44 68 02 83 Mån - fre: 10.00 - 15.00 support@accessories by five.se.
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
								Registrera dig för vårt nyhetsbrev och håll dig uppdaterad på nyheter, erbjudanden och alla
								guldkorn! Genom att registrera dig samtycker du till att få nyhetsbrev och marknadsföring från
								Accessories by five.se. Du kan när som helst avsluta prenumerationen..
							</p>
							<form action="#">
								<div class="input-group mb-3">
									<input
										class="form-control"
										type="text"
										placeholder="E-post"
										aria-label="Recipient's username"
										aria-describedby="button-addon2"
									/>
									<button class="btn btn-primary" id="button-addon2" type="button">
										<i class="fa fa-paper-plane"></i>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</footer>
		</div>

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
