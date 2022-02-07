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

	form {
		margin-right: 40px;
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
	}
</style>
<template>
	<div id="nav">
		<nav class="navbar navbar-expand-lg justify-content-around">
			<div class="navbar-nav">
				<router-link to="/" class="nav-item nav-link">Hem</router-link>
				<router-link to="/about" class="nav-item nav-link">Våra produkter</router-link>
				<router-link to="/contact" class="nav-link">Kontakt</router-link>
			</div>
			<router-link to="/about" class="nav-item nav-link"
				><font-awesome-icon icon="fa-regular fa-cart-shopping"
			/></router-link>
			<form class="form-inline">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				<button class="btn btn-light my-2 my-sm-0" type="submit">Search</button>
			</form>
		</nav>
	</div>
</template>
