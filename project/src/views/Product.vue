<template>
	<article v-if="product">
		<section>
			<img :src="'assets/products/' + product.images[0]" />
		</section>
		<section>
			<router-link to="/product/d8907f9d-af50-49fe-afcc-1cd394aba056">{{ product.category }}</router-link>
			<h2>{{ product.title }}</h2>
			<p>{{ product.price }} <span>SEK</span></p>
			<p>{{ product.description }}</p>
			<p>{{ product.stock }}</p>
		</section>
	</article>
</template>
<script>
	export default {
		name: 'Product',
		data() {
			return {
				product: null
			};
		},
		methods: {
			async getProduct() {
				const response = await fetch('/products.json');
				const results = await response.json();
				this.product = results.find((o) => o.id === this.$route.params.id);
			}
		},
		async created() {
			this.getProduct();
		}
	};
</script>
<style scoped></style>
