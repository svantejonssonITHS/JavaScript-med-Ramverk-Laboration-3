<template>
	<h1 class="display-3">What's new?</h1>
	<Carousel />
	<section id="firstSection">
		<h2>About our company</h2>
		<p>Our history</p>
	</section>
	<ImageFetch />
	<section>
		<h2>Ta en titt på våra produkter</h2>
	</section>
</template>

<script>
	import ImageFetch from '../components/ImageFetch.vue';
	import Carousel from '../components/Carousel.vue';
	export default {
		components: {
			ImageFetch,
			Carousel
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
		margin: 5em 0 3em 0;
		flex-wrap: wrap;
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
