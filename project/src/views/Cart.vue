<template>
	<article>
		<h2>Din kundvagn</h2>
		<ul>
			<CartItem />
		</ul>
		<button>Till kassan</button>
	</article>
</template>
<script>
	import CartItem from '../components/CartItem.vue';

	export default {
		name: 'Cart',
		components: { CartItem }
	};
</script>
<style scoped></style>
