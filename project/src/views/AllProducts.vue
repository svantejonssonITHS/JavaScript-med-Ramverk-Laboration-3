<template>
	<h1 class="display-3">Alla produkter</h1>
	<ProductCards />
</template>
<script>
	import ProductCards from '../components/ProductCards.vue';
	export default {
		components: {
			ProductCards
		}
	};
</script>
