<template>
	<div id="nav">
		<nav class="navbar navbar-expand-lg navbar-light">
			<div class="container-fluid">
				<div class="firstContainer">
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

							<router-link to="/contact" class="nav-item nav-link">Kontakt</router-link>

							<i class="nav-item dropdown"
								><a
									class="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<i id="search" class="fa fa-search" aria-hidden="true"></i>
								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<FilterSearch />
								</div>
							</i>
						</div>
					</div>
				</div>
				<div class="myContainer">
					<router-link to="/signup" class="nav-item nav-link"><i class="fa fa-user-plus" id="addUser"></i></router-link>
					<router-link to="/UserPage" class="nav-item nav-link"><i class="fa fa-user" id="user"></i></router-link>
					<router-link to="/cart" class="nav-item nav-link"><i class="fa fa-shopping-cart" id="cart"></i></router-link>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
	import FilterSearch from './FilterSearch.vue';

	export default {
		components: {
			FilterSearch
		}
	};
</script>
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
	}
	.firstContainer {
		display: flex;
		margin-left: 3em;
	}
	.firstContainer .nav-link {
		margin-left: 2em;
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
	.myContainer {
		display: flex;
		text-align: center;
		margin-left: 2em;
	}
	#nav {
		background: $gold-background;

		max-height: 25%;
	}
	.nav-link {
		color: #403f3b;
		margin-left: 1em;
		font-size: x-large;
	}
	#search {
		font-size: 1.8em;
	}
	#addUser {
		font-size: 2em;
	}
	#user {
		font-size: 2em;
	}
</style>
