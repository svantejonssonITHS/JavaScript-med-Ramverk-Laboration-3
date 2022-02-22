<template>
	<h1 class="display-3">What's new?</h1>
	<Carousel />
	<section id="firstSection">
		<h2>About our company</h2>
		<p>Our history</p>
	</section>
	<ImageFetch />
	<section v-if="products && products.length > 0">
		<h2 class="display-4 text-dark">Ta en titt på våra produkter</h2>
		<div class="row justify-content-evenly">
			<ProductCard
				v-for="product in products"
				:key="product.id"
				:id="product.id"
				:title="product.title"
				:image="`assets/products/${product.images[0]}`"
				:description="product.description"
				:price="product.price"
			/>
		</div>
	</section>
</template>

<script>
	import ImageFetch from '../components/ImageFetch.vue';
	import Carousel from '../components/Carousel.vue';
	import ProductCard from '../components/ProductCard.vue';
	export default {
		components: {
			ImageFetch,
			Carousel,
			ProductCard
		},
		data() {
			return {
				images: '',
				products: null,
				temp: null
			};
		},
		methods: {
			async getLastProducts() {
				const response = await fetch('/products.json');
				const results = await response.json();
				this.products = results.reverse().slice(0, 4);
			}
		},
		async created() {
			await this.getLastProducts();
		}
	};
</script>

<style scoped>
	.descript {
		display: flex;
		align-items: center;
		margin: 5em 0 3em 0;
		flex-wrap: wrap;
	}

	h2 {
		color: white;
	}
	#firstSection > p {
		color: white;
	}
	#firstSection {
		width: 100%;
		background: black;
		height: 100px;
	}
	.infoPic {
		height: 10em;
		width: 10em;
	}
</style>
