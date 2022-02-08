<script>
	import CitiesList from './components/CitiesList.vue';
	import CounterButton from './components/CounterButton.vue';
	import NavBar from './components/NavBar.vue';
	import HeaderImage from './components/HeaderImage.vue';
	import FooterSection from './components/FooterSection.vue';

	export default {
		components: {
			CitiesList,
			CounterButton,
			FooterSection,

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
