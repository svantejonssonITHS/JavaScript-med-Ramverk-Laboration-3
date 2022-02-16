<template>
	<div class="descript" v-for="(product, index) in products" :key="product.id">
		<div v-if="index === 0">
			<img :src="'assets/products/' + product.images[0]" class="infoPic" />
			<p>
				Accesories by 5 is the world’s largest jewellery brand. The company designs, manufactures and markets
				hand-finished jewellery made from high-quality materials at affordable prices. A5 jewellery is sold in more than
				100 countries through 6,800 points of sale, including more than 2,600 concept stores.
			</p>
		</div>
		<div v-if="index === 1">
			<img :src="'assets/products/' + product.images[0]" class="infoPic" />
			<p>Exempeltext 2</p>
		</div>
	</div>
</template>
<style scoped>
	.infoPic {
		height: 10em;
		width: 10em;
	}
</style>
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
