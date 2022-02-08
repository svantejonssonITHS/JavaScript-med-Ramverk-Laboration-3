<script>
<<<<<<< HEAD
	import CitiesList from './components/CitiesList.vue';
	import CounterButton from './components/CounterButton.vue';
=======
>>>>>>> 1a5c333495483e15c81af416a953b491ab876957
	import NavBar from './components/NavBar.vue';
	import HeaderImage from './components/HeaderImage.vue';
	import FooterSection from './components/FooterSection.vue';

	export default {
		components: {
<<<<<<< HEAD
			CitiesList,
			CounterButton,
			FooterSection,

=======
>>>>>>> 1a5c333495483e15c81af416a953b491ab876957
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
