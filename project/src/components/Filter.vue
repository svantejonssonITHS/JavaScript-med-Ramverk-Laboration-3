<script>
	export default {
		props: {
			//filter: String
		},
		data() {
			return { filter: '' };
		},
		methods: {
			onFilter() {
				this.filter = this.filter + 1;
			}
		}
	};
</script>

<template>
	<form class="form-inline">
		<input class="form-control mr-sm-2" type="text" v-model="filter" placeholder="Search" aria-label="Search" />

		<button class="btn btn-dark" @click="onFilter" type="submit">Filter</button>
		<p>{{ filter }}</p>
	</form>
</template>

<style lang="scss" scoped>
	$gold-background: radial-gradient(
			ellipse farthest-corner at right bottom,
			#fedb37 0%,
			#fdb931 8%,
			#9f7928 30%,
			#8a6e2f 40%,
			transparent 80%
		),
		radial-gradient(
			ellipse farthest-corner at left top,
			#ffffff 0%,
			#ffffac 8%,
			#d1b464 25%,
			#5d4a1f 62.5%,
			#5d4a1f 100%
		);
	button {
		margin-left: 10px;
	}

	form {
		margin-right: 40px;
		display: inline-flex;
	}
</style>
