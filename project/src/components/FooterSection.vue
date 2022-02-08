<template>
	<footer>
		<p>{{ footerText }}</p>
	</footer>
</template>
<script>
	export default {
		data() {
			return {
				footerText: 'Copyright Accessories by five 2022'
			};
		}
	};
</script>
<style scoped>
	footer {
		background-color: rgb(2, 22, 22);
		padding: 10px;
		text-align: center;
		color: rgb(223, 192, 16);
	}
</style>
