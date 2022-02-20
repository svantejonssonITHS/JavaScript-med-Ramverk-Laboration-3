<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div v-for="product in products" :key="product.id">
					<div class="card">
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
<style lang="scss">
	.card {
		margin: 1em 2em;
		width: 20em;
	}
</style>
