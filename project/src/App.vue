<script>
	import CitiesList from './components/CitiesList.vue';
	import CounterButton from './components/CounterButton.vue';
	import HelloWorld from './components/HelloWorld.vue';
	import NavBar from './components/NavBar.vue';

	export default {
		components: {
			CitiesList,
			CounterButton,
			HelloWorld,
			NavBar
		}
	};
</script>

<template>
	<nav>
		<NavBar />
	</nav>
	<HelloWorld msg="Hello World!" />
	<CitiesList />
	<CounterButton />
	<main>
		<RouterView />
	</main>
</template>
