<template>
	<router-link :to="`/product/${id}`" class="text-decoration-none text-dark">
		<section class="p-2 rounded d-flex align-items-center">
			<img :src="`assets/products/${imgUrl}`" height="100" />
			<h3 class="text-underline-hover">{{ name }}</h3>
			<section>{{ amount }}</section>
			<p>{{ price }}</p>
		</section>
	</router-link>
</template>

<script>
	export default {
		name: 'CartItem',
		props: {
			id: {
				type: String,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			imgUrl: {
				type: String,
				required: true
			},
			amount: {
				type: Number,
				required: true
			},
			price: {
				type: Number,
				required: true
			}
		}
	};
</script>

<style scoped>
	.text-underline-hover {
		text-decoration: none;
	}

	.text-underline-hover:hover {
		text-decoration: underline;
	}
</style>
