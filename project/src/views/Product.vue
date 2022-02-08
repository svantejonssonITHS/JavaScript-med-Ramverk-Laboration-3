<template>
	<article v-if="product" class="d-flex w-75 m-auto">
		<section>
			<img :src="'assets/products/' + product.images[0]" />
		</section>
		<section>
			<ProductDetails
				:title="product.title"
				:category="product.category"
				:description="product.description"
				:price="product.price"
				:stock="product.stock"
			/>
		</section>
	</article>
</template>
<script>
	import ProductDetails from '../components/ProductDetails.vue';
	export default {
		name: 'Product',
		components: { ProductDetails },
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
