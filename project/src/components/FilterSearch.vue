<template>
	<div class="overflow-scroll">
		<div class="search col row-cols-1">
			<input class="searchInput" type="text" v-model="search" placeholder="Search Your Products" />
		</div>
		<div class="buttons">
			<input class="btn btn-dark" @click="onAsc" type="button" value="Price-Low-high" />
			<input class="btn btn-dark" @click="onDsc" type="button" value=" Price-High-Low" />
		</div>
		<div class="wrapper row row-cols-1 row-cols-md-3 g-4">
			<div class="card" v-for="post in filteredList" :key="post.id">
				<img :src="'assets/products/' + post.images[0]" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">{{ post.title }}</h5>
					<p class="card-text">
						{{ post.description }}
					</p>
					<h5>{{ post.price }} SEK</h5>
					<router-link :to="`/product/${post.id}`" class="btn btn-dark">Info</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SortedProduct from './SortedProduct.vue';
	export default {
		components: {
			SortedProduct
		},
		created() {
			let promise = fetch('/products.json');
			promise.then((response) => {
				console.log(response.json());
			});
			fetch('/products.json')
				.then((response) => response.json())
				.then((products) => {
					this.products = products;
				});
		},
		data() {
			return {
				products: null,
				search: '',
				sortDirection: 0
			};
		},

		computed: {
			filteredList() {
				if (!this.products) return;
				return this.products
					.filter((post) => {
						return post.title.toLowerCase().includes(this.search.toLowerCase());
					})
					.sort((a, b) => {
						return (a.price - b.price) * this.sortDirection;
					});
			}
		},
		methods: {
			onAsc() {
				this.sortDirection = +1;
			},
			onDsc() {
				this.sortDirection = -1;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.overflow-scroll {
		max-height: 75vh;
		overflow-x: hidden !important;
	}
	.card {
		margin: 2em 2em;
		width: 20em;
		transition: all 0.3s ease-out;
	}
	.card:hover {
		transform: translateY(-5px) scale(1.005) translateZ(0);
		box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px rgba(255, 215, 97, 0.48);
	}
	.search {
		margin: 3em;
		align-content: center;
	}
	.searchInput {
		padding: 0.5em;
		text-align: center;
	}
	.buttons {
		margin-bottom: 40px;
		margin-left: 40px;
	}
</style>
