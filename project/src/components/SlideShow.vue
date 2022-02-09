<template>
	<section class="d-flex flex-column">
		<img :src="imgShown" alt="Product image" class="w-100" />
		<nav v-if="images.length > 1" class="mw-100 d-flex horizontal-scrollable p-2">
			<button v-for="(image, index) in this.images" :key="index" class="btn col-2 flex-grow-1">
				<img :src="`assets/products/${image}`" class="w-100 rounded" />
			</button>
		</nav>
	</section>
</template>

<script>
	export default {
		name: 'SlideShow',
		props: {
			images: {
				type: Array,
				required: true,
				default: function () {
					return [];
				}
			}
		},
		data() {
			return {
				shownImgIndex: 0
			};
		},
		computed: {
			imgShown() {
				return `assets/products/${this.images[this.shownImgIndex]}`;
			}
		}
	};
</script>

<style scoped>
	nav {
		overflow-x: scroll;
	}

	.activeImg {
		filter: brightness(75%);
	}
</style>
