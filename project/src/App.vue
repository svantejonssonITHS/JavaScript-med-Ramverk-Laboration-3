<script>
    import FooterSection from './components/FooterSection.vue';
	import CitiesList from './components/CitiesList.vue';
	import CounterButton from './components/CounterButton.vue';

	import NavBar from './components/NavBar.vue';
	import HeaderImage from './components/HeaderImage.vue';

	export default {
		components: {
			CitiesList,
			CounterButton,
            FooterSection,
			NavBar,
			HeaderImage
		}
	};
</script>

<template>
	<nav>
		<HeaderImage />
		<NavBar />
	</nav>

	<CitiesList />
	<CounterButton />
	<main>
		<RouterView />

	</main>
    <footer>
        <FooterSection />
    </footer>
</template>
