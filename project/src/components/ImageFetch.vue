<template>
	<div class="descript">
		<img :src="images" class="infoPic" />
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
	export default {
		created() {
			let promise = fetch('/products.json');
			promise
				.then((response) => response.json())
				.then(function (result) {
					this.products = result;
				});
		},

		data() {
			return {
				products: ''
			};
		},
		props: {
			images: { type: String, required: true }
		}
	};
</script>
