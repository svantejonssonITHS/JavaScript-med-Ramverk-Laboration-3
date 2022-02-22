<template>
	<div class="card">
		<img :src="image" class="card-img-top" alt="..." />
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">
				{{ description }}
			</p>
			<h5>{{ price }} SEK</h5>
			<router-link :to="`/product/${id}`" class="btn btn-dark">Info</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ProductCard',
		props: {
			id: {
				type: String,
				required: true
			},
			title: {
				type: String,
				required: true
			},
			image: {
				type: String,
				required: true
			},
			description: {
				type: String,
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
	.card {
		margin: 1em 2em;
		width: 20em;
	}
</style>
