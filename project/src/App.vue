<script>
	import NavBar from './components/NavBar.vue';
	import HeaderImage from './components/HeaderImage.vue';
	import FooterSection from './components/FooterSection.vue';

	export default {
		components: {
			NavBar,
			HeaderImage,
			FooterSection
		}
	};
</script>

<template>
	<nav>
		<HeaderImage />
		<NavBar />
	</nav>
	<RouterView />
	<footer>
		<FooterSection />
	</footer>
</template>
