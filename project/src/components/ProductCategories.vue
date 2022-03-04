<template>
	<h1 class="display-3">{{ myCat }}</h1>
	<div class="container">
		<div class="row row-cols-1 row-cols-md-3 g-4">
			<div class="card" v-for="product in products" :key="product.id">
				<img :src="'assets/products/' + product.images[0]" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">{{ product.title }}</h5>
					<p class="card-text">
						{{ product.description }}
					</p>
					<h5>{{ product.price }} SEK</h5>
					<router-link :to="`/product/${product.id}`" class="btn btn-dark">Info</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		created() {
			this.fetchData();
			this.$watch(
				() => this.$route.params,
				() => {
					this.fetchData();
					console.log('watch');
				}
			);
		},
		data() {
			return {
				myCat: this.$route.params.category,
				products: []
			};
		},
		methods: {
			fetchData() {
				axios
					.get('/products.json')
					.then((response) => (this.products = response.data.filter((p) => p.category == this.myCat))),
					console.log(this.products);
				console.log(this.myCat);
			}
		}
	};
</script>
<style lang="scss" scoped>
	.card {
		margin: 1em 2em;
		width: 20em;
	}
	.card:hover {
		transform: translateY(-5px) scale(1.005) translateZ(0);
		box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px rgba(255, 215, 97, 0.48);
	}
	h1 {
		margin-bottom: 0.5em;
	}
</style>
