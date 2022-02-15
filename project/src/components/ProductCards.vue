<script>
	import axios from 'axios';

	export default {
		created() {
			axios.get('/products.json').then((response) => (this.products = response.data));
			console.log(this.products);
		},

		data() {
			return {
				products: ''
			};
		}
	};
</script>
<template>
	<div class="row row-cols-1 row-cols-md-3 g-4">
		<div class="card" v-for="product in products" :key="product.id">
			<img :src="'assets/products/' + product.images[0]" class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">{{ product.title }}</h5>
				<p class="card-text">
					{{ product.description }}
				</p>
				<a href="#" class="btn btn-dark">Info</a>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
	.card {
		margin-bottom: 1em;
	}
</style>
