<template>
	<router-link to="/">
		<section>
			<img src="" />
			<h3>Namn</h3>
			<section>amount</section>
			<p>pris</p>
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

<style scoped></style>
