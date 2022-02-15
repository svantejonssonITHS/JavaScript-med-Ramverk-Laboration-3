<script>
	import FilterSearch from './../components/FilterSearch.vue';

	export default {
		components: {
			FilterSearch
		}
	};
</script>

<template>
	<FilterSearch />
	<h1>Kategorier</h1>
</template>

<script>
	fetch('https://request.in/api/categories', {
		method: 'POST',
		headers: { 'Content-Type': 'product/json' },
		body: JSON.stringify({ name: 'Armband' })
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => console.log(data))
		.catch((error) => console.log('ERROR'));
</script>

<style></style>
