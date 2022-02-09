<template>
	<article v-if="product" class="d-flex w-75 m-auto">
		<SlideShow />
		<ProductDetails
			:title="product.title"
			:category="product.category"
			:description="product.description"
			:price="product.price"
			:stock="product.stock"
		/>
	</article>
</template>
<script>
	import SlideShow from '../components/SlideShow.vue';
	import ProductDetails from '../components/ProductDetails.vue';

	export default {
		name: 'Product',
		components: { SlideShow, ProductDetails },
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
