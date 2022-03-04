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
				sortingMode: 'asc'
			};
		},

		computed: {
			sortedProducts() {
				return [...this.products].sort((a, b) => {
					if (!this.sortingMode == 'asc') {
						return a.price - b.price;
					} else if (this.sortingMode == 'desc') {
						return b.price - a.price;
					}
				});
			}
		}
	};
</script>
