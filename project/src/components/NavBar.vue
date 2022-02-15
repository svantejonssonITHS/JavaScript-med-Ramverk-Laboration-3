<script>
	import Filter from './Filter.vue';
	export default {
		components: {
			Filter
		}
	};
</script>

<template>
	<div id="nav" class="d-flex justify-content-evenly">
		<nav class="navbar navbar-expand-lg navbar-light">
			<div class="container-fluid">
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
					<div class="navbar-nav mr-auto mb-2 mb-lg-0">
						<router-link to="/" class="nav-item nav-link">Hem</router-link>
						<i class="nav-item dropdown"
							><a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Vårt sortiment
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<router-link to="/categories" class="nav-item nav-link">Kategorier</router-link>
								<router-link to="/allProducts" class="nav-item nav-link">Alla produkter</router-link>
							</div>
						</i>

						<router-link to="/" class="nav-item nav-link">Kontakt</router-link>
					</div>
					<Filter />
					<router-link to="/" class="nav-item nav-link"><i class="fa fa-user-plus" id="user"></i></router-link>
					<router-link to="/cart" class="nav-item nav-link"><i class="fa fa-shopping-cart" id="cart"></i></router-link>
				</div>
			</div>
		</nav>
	</div>
</template>
<style lang="scss" scoped>
	$gold-background: radial-gradient(
			ellipse farthest-corner at right bottom,
			#fedb37 0%,
			#fdb931 8%,
			#9f7928 30%,
			#8a6e2f 40%,
			transparent 80%
		),
		radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
	button {
		margin-left: 10px;
	}
	#cart {
		font-size: 2em;
		margin-right: 40px;
	}
	form {
		margin-left: 40px;
		margin-right: 40px;
		display: inline-flex;
	}
	.icon {
		display: none;
	}
	.imgLogo {
		max-width: 45%;
	}
	#nav {
		background: $gold-background;
		max-height: 25%;
	}
	.nav-link {
		color: black;
		margin-left: 40px;
		font-size: x-large;
	}
	#user {
		font-size: 2em;
	}
</style>
