<script>
	export default {
		created() {
			let promise = fetch('/products.json');

			promise.then((response) => {
				console.log(response.json());
			});

			fetch('/products.json')
				.then((response) => response.json())
				.then((products) => {
					this.products = products;
				});
		},

		data() {
			return {
				products: null,
				search: ''
			};
		},
		computed: {
			filteredList() {
				return this.products.filter((post) => {
					return post.title.toLowerCase().includes(this.search.toLowerCase());
				});
			}
		}
	};
</script>

<template>
	<div class="search-wrapper">
		<input type="text" v-model="search" placeholder="Search title.." />
	</div>
	<div class="wrapper">
		<div class="card" v-for="post in filteredList" :key="post.id">
			<a target="_blank">
				{{ post.title }}
			</a>
		</div>
	</div>
</template>
