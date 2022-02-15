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

			promise.then((response) => {
				this.products = response.json();
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
