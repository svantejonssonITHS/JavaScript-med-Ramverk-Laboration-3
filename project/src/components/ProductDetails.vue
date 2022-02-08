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
					<router-link to="/product/d8907f9d-af50-49fe-afcc-1cd394aba056" class="text-underline-hover">{{
						category
					}}</router-link>
				</li>
				<li class="breadcrumb-item active" aria-current="page">
					{{ title }}
				</li>
			</ol>
		</nav>
		<h2 class="fw-bold">{{ title }}</h2>
		<p class="my-4 fs-5">{{ price }} <span>SEK</span></p>
		<p>{{ description }}</p>
		<p>{{ stock }}</p>
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
