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
	.imgLogo {
		max-width: 45%;
	}
	#nav {
		background: $gold-background;
		max-height: 25%;
	}
	.nav-link {
		color: black;
	}
</style>
<template>
	<div id="nav">
		<nav class="navbar navbar-expand-lg">
			<div class="navbar-nav mr-auto">
				<router-link to="/" class="nav-item nav-link">Hem</router-link>
				<router-link to="/about" class="nav-item nav-link">Om</router-link>
				<router-link to="/contact" class="nav-link">Kontakt</router-link>
			</div>
			<router-link to="/about" class="nav-item nav-link"
				><font-awesome-icon icon="fa-regular fa-cart-shopping"
			/></router-link>
		</nav>
	</div>
</template>
