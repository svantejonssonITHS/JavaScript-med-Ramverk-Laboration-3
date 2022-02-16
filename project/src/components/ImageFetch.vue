<template>
	<div class="descript">
		<img
			v-for="image in products"
			:key="image.id"
			:src="'assets/products/' + product.images[0]"
			class="card-img-top"
			alt="..."
		/>
		<p>
			Accesories by 5 is the world’s largest jewellery brand. The company designs, manufactures and markets hand-finished
			jewellery made from high-quality materials at affordable prices. A5 jewellery is sold in more than 100 countries
			through 6,800 points of sale, including more than 2,600 concept stores.
		</p>
	</div>
	<div class="descripti">
		<img :src="images" class="infoPic" />
		<p>Check out our wonderful necklace beads</p>
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
