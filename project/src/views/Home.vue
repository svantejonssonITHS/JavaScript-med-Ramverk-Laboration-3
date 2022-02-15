<template>
	<h1>What's new?</h1>

	<section id="firstSection">
		<h2>About our company</h2>
		<p>Our history</p>
	</section>
	<ImageFetch v-if="products" :images="products[0].images[0]" />
</template>

<script>
	import ImageFetch from '../components/ImageFetch.vue';
	export default {
		components: {
			ImageFetch
		},
		created() {
			let promise = fetch('/products.json');

			promise.then((response) => {
				this.products = response.json();
			});
		},
		data() {
			return {
				images: '',
				products: 0
			};
		}
	};
</script>

<style scoped>
	h2 {
		color: white;
	}
	p {
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
