<style lang="scss" scoped>
	$gold-background: radial-gradient(
			ellipse farthest-corner at right bottom,
			#fedb37 0%,
			#fdb931 8%,
			#9f7928 30%,
			#8a6e2f 40%,
			transparent 80%
		),
		radial-gradient(
			ellipse farthest-corner at left top,
			#ffffff 0%,
			#ffffac 8%,
			#d1b464 25%,
			#5d4a1f 62.5%,
			#5d4a1f 100%
		);
	button {
		margin-left: 10px;
	}
	#cart {
		font-size: 2em;
	}
	form {
		margin-right: 40px;
		display: inline-flex;
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
<template>
	<div id="nav">
		<nav class="navbar navbar-expand-lg justify-content-between">
			<div class="navbar-nav">
				<router-link to="/" class="nav-item nav-link">Hem</router-link>
				<router-link to="/about" class="nav-item nav-link">Våra produkter</router-link>
				<router-link to="/contact" class="nav-item nav-link">Kontakt</router-link>
			</div>

			<form class="form-inline">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				<button class="btn btn-dark" type="submit">Search</button>
			</form>
			<div class="navbar-nav">
				<router-link to="/" class="nav-item nav-link"><i class="fa fa-user-plus" id="user"></i></router-link>
				<router-link to="/" class="nav-item nav-link"
					><i class="fa fa-shopping-cart" id="cart"></i
				></router-link>
			</div>
		</nav>
	</div>
</template>
