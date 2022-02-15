<template>
	<article class="row col-12 col-lg-10 m-auto d-flex flex-column align-items-center flex-lg-row align-items-lg-start">
		<h2 class="fw-bold m-0 p-0 my-3">Din kundvagn</h2>
		<ul v-if="cart && products">
			<CartItem
				v-for="product in products"
				:key="product.id"
				:id="product.id"
				:name="product.title"
				:imgUrl="product.images[0]"
				:amount="product.amount"
				:stock="product.stock"
				:price="product.price"
			/>
		</ul>
		<p v-else>Din kundvagn är tom!</p>
		<h3 class="text-end m-0 p-0 my-3">Totalt värde: {{ cartValue }} SEK</h3>
		<button class="ms-auto btn btn-secondary col-4 col-lg-2 m-0 my-2 py-3 fw-bold">Till kassan</button>
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
					if (productIndex != -1) {
						results[productIndex].amount = productInCart.amount;
						this.products.push(results[productIndex]);
					}
				});
				// If no products in the cart exist in the database, the products array sets to null and the cart in localStorage is reset
				if (this.products.length < 1) {
					this.products = null;
					localStorage.setItem('cart', JSON.stringify([]));
				}
			}
		},
		computed: {
			cartValue() {
				let cartValue = 0;
				this.products.forEach((product) => {
					cartValue += product.price * product.amount;
				});
				return Intl.NumberFormat().format(cartValue);
			}
		},
		created() {
			if (this.cart == null) return;
			this.getProductsInfo();
		}
	};
</script>
<style scoped></style>