<template>
	<section class="p-2 border row align-items-center">
		<section class="col-1">
			<img :src="`assets/products/${imgUrl}`" width="100" />
		</section>
		<router-link :to="`/product/${id}`" class="text-decoration-none text-dark col-5 m-2 px-0">
			<h3 class="text-underline-hover mb-0">{{ name }}</h3>
		</router-link>

		<section class="col d-flex justify-content-end align-items-center">
			<section class="input-group me-5">
				<button type="button" class="btn btn-danger" :id="`decrease-${this.id}`" @click="changeAmount(-1)">-</button>
				<input type="number" class="form-control" v-model="amountDisplayed" />
				<button type="button" class="btn btn-success" :id="increaseID" @click="changeAmount(1)">+</button>
			</section>
			<section class="col-3 d-flex justify-content-end align-items-center">
				<p class="mb-0 me-5 fw-bold">{{ price }} KR</p>
				<button class="btn fw-bold">X</button>
			</section>
		</section>
	</section>
</template>

<script>
	export default {
		name: 'CartItem',
		props: {
			id: {
				type: String,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			imgUrl: {
				type: String,
				required: true
			},
			amount: {
				type: Number,
				required: true
			},
			stock: {
				type: Number,
				required: true
			},
			price: {
				type: Number,
				required: true
			}
		},
		emits: ['amountChanged'],
		data() {
			return {
				amountDisplayed: this.amount
			};
		},
		methods: {
			// direction, a value, eiter -1 or 1
			changeAmount(direction = 0) {
				this.amountDisplayed += direction;
			}
		},
		computed: {
			increaseID() {
				return `increase-${this.id}`;
			},
			decreaseID() {
				return `decrease-${this.id}`;
			}
		},
		watch: {
			amountDisplayed() {
				const increase = document.querySelector(`#${this.increaseID}`);
				const decrease = document.querySelector(`#${this.decreaseID}`);

				if (this.amountDisplayed >= this.stock) {
					increase.disabled = true;
					this.amountDisplayed = this.stock;
				} else {
					increase.disabled = false;
				}

				if (this.amountDisplayed <= 1) {
					decrease.disabled = true;
					this.amountDisplayed = 1;
				} else {
					decrease.disabled = false;
				}

				// Emit to function
				this.$emit('amountChanged', this.id, this.amountDisplayed);
			}
		}
	};
</script>

<style scoped>
	.text-underline-hover {
		text-decoration: none;
	}

	.text-underline-hover:hover {
		text-decoration: underline;
	}

	.input-group {
		width: 175px;
	}
</style>
