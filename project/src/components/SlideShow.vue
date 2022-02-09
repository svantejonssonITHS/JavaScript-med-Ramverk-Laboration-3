<template>
	<section>
		<img :src="imgShown" />
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
		}
	};
</script>

<style scoped></style>
