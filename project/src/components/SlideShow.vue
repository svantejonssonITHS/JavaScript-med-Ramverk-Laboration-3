<template>
	<section class="d-flex flex-column">
		<img :src="imgShown" alt="Product image" class="w-100" />
		<nav v-if="images.length > 1" class="mw-100 d-flex horizontal-scrollable p-2">
			<button
				v-for="(image, index) in this.images"
				:key="index"
				:class="{ activeImg: index === 0 }"
				class="thumbnail btn flex-grow-1"
				@click="thumbClick($event, index)"
			>
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
		methods: {
			thumbClick(event, index) {
				this.shownImgIndex = index;
				// Retrieved as an array to prevent errors if more than one thumbnail happens to have the class 'activeImg'
				document.querySelectorAll('.activeImg').forEach((node) => {
					node.classList.remove('activeImg');
				});
				event.currentTarget.classList.add('activeImg');
			}
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

	.thumbnail {
		min-width: 16%;
		max-width: 20%;
	}

	.activeImg {
		filter: brightness(75%);
	}
</style>
