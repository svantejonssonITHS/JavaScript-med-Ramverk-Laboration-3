<template>
	<article
		v-if="product"
		class="row col-12 col-lg-10 m-auto d-flex flex-column align-items-center flex-lg-row align-items-lg-start"
	>
		<SlideShow class="col-10 col-lg-4" :images="product.images" />
		<ProductDetails
			class="col-12 col-lg-6 p-2"
			:title="product.title"
			:category="product.category"
			:description="product.description"
			:price="product.price"
			:stock="product.stock"
			@add-to-cart-clicked="addToCart(product.id)"
		/>
	</article>
</template>
<script>
	import SlideShow from '../components/SlideShow.vue';
	import ProductDetails from '../components/ProductDetails.vue';

	export default {
		name: 'Product',
		components: { SlideShow, ProductDetails },
		data() {
			return {
				product: null,
				toastOptions: {
					title: 'Ändring i kundvagnen',
					message: 'En produkt lades till',
					type: 'info',
					position: ['end', 'start'],
					duration: 3000
				}
			};
		},
		methods: {
			async getProduct() {
				// A fetch to our JSON file is made
				const response = await fetch('/products.json');
				// The response json is saved temporary
				const results = await response.json();
				// The one product that matches the router param is saved
				this.product = results.find((o) => o.id === this.$route.params.id);
			},
			addToCart(productID) {
				// Cart item
				let product = {
					id: productID,
					amount: 1
				};

				// Retrieves cart from localStorage if it exists
				const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

				// Looks for the current product in the cart
				let inCartIndex = cart.findIndex((o) => o.id === productID);

				if (inCartIndex != -1) {
					// Since the product already is in the cart, the amount is increased by 1
					product.amount = cart[inCartIndex].amount + 1;
					cart[inCartIndex] = product;
				} else {
					// The product is added to the cart with a start amount of 1
					cart.push(product);
				}

				// The updated cart is saved to localStorage
				localStorage.setItem('cart', JSON.stringify(cart));

				this.toastOptions.type = 'success';
				this.toastOptions.message = `${this.product.title} lades till i din kundvagn.`;

				this.$root.createToast(this.toastOptions);
				this.$root.$refs.navbar.updateCartNumber();
			}
		},
		async created() {
			this.getProduct();
		}
	};
</script>
<style scoped></style>
