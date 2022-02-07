<template>
	<article>{{ product }}</article>
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
				this.product = results.filter((o) => o.id === this.$route.params.id);
			}
		},
		async created() {
			this.getProduct();
		}
	};
</script>
<style scoped></style>
