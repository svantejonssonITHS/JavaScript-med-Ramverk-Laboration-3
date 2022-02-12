<template>
	<article>
		<h2>Din kundvagn</h2>
		<ul v-if="cart">
			<CartItem
				v-for="item in cart"
				:key="item.id"
				:id="item.id"
				:name="item.name"
				:imgUrl="item.imgUrl"
				:amount="item.amount"
				:price="item.price"
			/>
		</ul>
		<p v-else>Din kundvagn är tom!</p>
		<button>Till kassan</button>
	</article>
</template>
<script>
	import CartItem from '../components/CartItem.vue';

	export default {
		name: 'Cart',
		components: { CartItem },
		data() {
			return {
				cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null
			};
		}
	};
</script>
<style scoped></style>
