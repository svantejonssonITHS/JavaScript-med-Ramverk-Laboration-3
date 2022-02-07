<script>
	import CitiesList from './components/CitiesList.vue';
	import CounterButton from './components/CounterButton.vue';
	import HelloWorld from './components/HelloWorld.vue';
	import NavBar from './components/NavBar.vue';
	import HeaderImage from './components/HeaderImage.vue';

	export default {
		components: {
			CitiesList,
			CounterButton,
			HelloWorld,
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
	<HelloWorld msg="Hello World!" />
	<CitiesList />
	<CounterButton />
	<main>
		<RouterView />
	</main>
</template>
