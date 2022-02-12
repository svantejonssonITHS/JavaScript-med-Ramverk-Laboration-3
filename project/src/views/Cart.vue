<template>
	<article>
		<h2>Din kundvagn</h2>
		<ul v-if="cart && products">
			tjo
			<CartItem
				v-for="product in products"
				:key="product.id"
				:id="product.id"
				:name="product.name"
				:imgUrl="product.imgUrl"
				:amount="product.amount"
				:price="product.price"
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
				cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null,
				products: []
			};
		},
		methods: {
			async getProductsInfo() {
				// A fetch to our JSON file is made
				const response = await fetch('/products.json');
				// The response json is saved temporary
				const results = await response.json();
				// The products that exsist in the cart are saved
				this.cart.forEach((productInCart) => {
					const productIndex = results.findIndex((productInDB) => productInCart.id === productInDB.id);
					// findIndex() is used instead of filter() to prevent any undefined objects to be pushed to the products array
					if (productIndex != -1) this.products.push(results[productIndex]);
				});
				// If no products in the cart exist in the database, the products array sets to null and the cart in localStorage is reset
				if (this.products.length < 1) {
					this.products = null;
					localStorage.setItem('cart', JSON.stringify([]));
				}
			}
		},
		created() {
			if (this.cart == null) return;
			this.getProductsInfo();
		}
	};
</script>
<style scoped></style>
