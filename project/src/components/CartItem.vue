<template>
	<section class="p-2 rounded border row align-items-center">
		<section class="col-1">
			<img :src="`assets/products/${imgUrl}`" width="100" />
		</section>
		<router-link :to="`/product/${id}`" class="text-decoration-none text-dark col-5 m-2 px-0">
			<h3 class="text-underline-hover mb-0">{{ name }}</h3>
		</router-link>

		<section class="col d-flex justify-content-end align-items-center">
			<section class="input-group me-5">
				<button type="button" class="btn btn-danger">-</button>
				<input type="number" class="form-control" :value="amount" />
				<button type="button" class="btn btn-success">+</button>
			</section>
			<section class="d-flex justify-content-end align-items-center">
				<p class="mb-0 me-5 fw-bold">{{ price }} KR</p>
				<button class="btn fw-bold">X</button>
			</section>
		</section>
	</section>
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

	.input-group {
		width: 175px;
	}
</style>
