<template>
	<article class="row col-12 col-lg-10 m-auto d-flex flex-column align-items-center flex-lg-row align-items-lg-start">
		<h2 class="fw-bold m-0 p-0 my-3">Din kundvagn</h2>
		<ul v-if="cart && products">
			<CartItem
				v-for="(product, index) in products"
				:key="index"
				:id="product.id"
				:name="product.title"
				:imgUrl="product.images[0]"
				:amount="product.amount"
				:stock="product.stock"
				:price="product.price"
				@amount-changed="updateCartItem"
				@remove-cart-item="removeCartItem"
				:class="{
					'rounded-top': index == 0,
					'border-top-0': index != 0,
					'rounded-bottom': index == this.products.length - 1
				}"
			/>
		</ul>
		<h3 class="text-end m-0 p-0 my-3">Totalt värde: {{ cartValue }} SEK</h3>
		<!-- I made this router-link related to the payment page when you click on the button of kassan -->
		<router-link to="/payment" class="ms-auto btn btn-secondary col-4 col-lg-2 m-0 my-2 py-3 fw-bold"
			>Till kassan</router-link
		>
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
				products: [],
				toastOptions: {
					title: 'Ändring i kundvagnen',
					message: 'En produkt togs bort',
					type: 'info',
					position: ['end', 'start'],
					duration: 3000
				}
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
			},
			updateCartItem(id, amount) {
				const updateIndex = this.cart.findIndex((productInCart) => productInCart.id === id);
				this.products[updateIndex].amount = amount;
				this.cart[updateIndex].amount = amount;

				localStorage.setItem('cart', JSON.stringify(this.cart));
			},
			removeCartItem(id) {
				const updateIndex = this.cart.findIndex((productInCart) => productInCart.id === id);

				this.toastOptions.type = 'danger';
				this.toastOptions.message = `${this.products[updateIndex].title} togs bort från din kundvagn.`;

				this.products.splice(updateIndex, 1);
				this.cart.splice(updateIndex, 1);

				localStorage.setItem('cart', JSON.stringify(this.cart));

				this.$root.createToast(this.toastOptions);
				this.$root.$refs.navbar.updateCartNumber();
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
		watch: {
			products() {
				// If the products array is empty, the cart should also be empty
				if (this.products.length == 0) {
					this.products = null;
					this.cart = [];
				}
				localStorage.setItem('cart', JSON.stringify(this.cart));
			}
		},
		created() {
			if (this.cart == null) return;
			this.getProductsInfo();
		}
	};
</script>
<style scoped></style>
