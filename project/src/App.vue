<script>
<<<<<<< HEAD
    import FooterSection from './components/FooterSection.vue';
	import CitiesList from './components/CitiesList.vue';
	import CounterButton from './components/CounterButton.vue';

=======
>>>>>>> ee2b53ab68ed6f21fc22e49063eae88e1d93600b
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
>>>>>>> ee2b53ab68ed6f21fc22e49063eae88e1d93600b
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
