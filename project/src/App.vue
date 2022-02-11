<script>
	import NavBar from './components/NavBar.vue';
	import HeaderImage from './components/HeaderImage.vue';
	import FooterSection from './components/FooterSection.vue';
	import Carousel from './components/Carousel.vue';
	export default {
		components: {
			NavBar,
			HeaderImage,
			FooterSection,
			Carousel
		}
	};
</script>

<template>
	<nav>
		<HeaderImage />
		<NavBar />
	</nav>
	<Carousel> </Carousel>
	<RouterView />
	<footer>
		<FooterSection />
	</footer>
</template>
