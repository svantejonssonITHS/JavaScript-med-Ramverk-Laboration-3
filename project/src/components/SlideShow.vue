<template>
	<section>
		<img :src="imgShown" alt="Product image" class="w-100" />
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

<style scoped></style>
