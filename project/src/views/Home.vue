<template>
	<h1>What's new?</h1>

	<section id="firstSection">
		<h2>About our company</h2>
		<p>Our history</p>
	</section>
	<div class="descript">
		<img class="infoPic" />
		<p>Check out our wonderful necklace beads</p>
	</div>
	<div class="descripti">
		<img class="infoPic" />
		<p>Check out our wonderful necklace beads</p>
	</div>
	<ImageFetch v-if="products" :images="products[0].images[0]" />
</template>

<script>
	import ImageFetch from '../components/ImageFetch.vue';
	export default {
		components: {
			ImageFetch
		},
		data() {
			return {
				images: '',
				products: 0
			};
		}
	};
</script>

<style scoped>
	.descript {
		display: flex;
		align-items: center;
		margin: 5em 0 2.5em 0;
	}
	.descripti {
		margin: 5em 0 2.5em 0;
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
	}
	h2 {
		color: white;
	}
	#firstSection > p {
		color: white;
	}
	#firstSection {
		width: 100%;
		background: black;
		height: 100px;
	}
	.infoPic {
		height: 10em;
		width: 10em;
	}
</style>
