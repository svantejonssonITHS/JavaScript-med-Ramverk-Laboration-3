<template>
	<div class="info">
		<ImageFetch class="infoPic" />
		<p></p>
	</div>
</template>

<script>
	export default {
		created() {
			let promise = fetch('/products.json');
			promise
				.then((response) => response.json())
				.then(function (product) {
					this.products = product;
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
