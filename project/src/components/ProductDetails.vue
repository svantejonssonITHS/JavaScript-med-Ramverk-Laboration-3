<template>
	<section>
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item" aria-current="page">
					<router-link to="/product/d8907f9d-af50-49fe-afcc-1cd394aba056" class="text-underline-hover"
						>Sortiment</router-link
					>
				</li>
				<li class="breadcrumb-item" aria-current="page">
					<router-link to="/product/d8907f9d-af50-49fe-afcc-1cd394aba056" class="text-underline-hover">
						{{ category }}
					</router-link>
				</li>
				<li class="breadcrumb-item active" aria-current="page">
					{{ title }}
				</li>
			</ol>
		</nav>
		<h2 class="fw-bold">{{ title }}</h2>
		<p class="my-4 fs-5">{{ price }} <span>SEK</span></p>
		<p>{{ description }}</p>
		<p class="">
			Mängd i lager:
			<span :class="{ 'text-danger': fewInStock, 'text-success': !fewInStock }" class="fw-bold"
				>{{ stock }} <span v-if="fewInStock">(Få kvar)</span></span
			>
		</p>
		<button class="btn btn-secondary col-8 col-lg-4 mx-auto mx-lg-0 my-5 d-block py-3 fw-bold" @click="addToCartClicked">
			Lägg till i varukorgen
		</button>
	</section>
</template>

<script>
	export default {
		name: 'ProductDetails',
		props: {
			title: {
				type: String,
				required: true,
				default: 'N/A'
			},
			category: {
				type: String,
				required: true,
				default: 'N/A'
			},
			description: {
				type: String,
				required: true,
				default: 'N/A'
			},
			price: {
				type: Number,
				required: true,
				default: -1
			},
			stock: {
				type: Number,
				required: true,
				default: 0
			}
		},
		emits: ['addToCartClicked'],
		methods: {
			addToCartClicked() {
				this.$emit('addToCartClicked');
			}
		},
		computed: {
			fewInStock() {
				return this.stock >= 10 ? false : true;
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
