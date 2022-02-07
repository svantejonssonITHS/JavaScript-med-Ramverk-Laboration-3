<style lang="scss">
	#header {
		background-color: black;
		max-height: 45%;
	}

	.imageacc {
		max-height: 400px;
		margin-left: 80px;
	}
	.logoacc {
		margin-left: 50px;
	}
</style>

<template>
	<div id="header">
		<router-link to="/"><img src="../../assets/loggavittransp.png" alt="logo" class="logoacc" /></router-link>

		<img src="../../assets/acc4.jpg" alt="accessories" class="imageacc" />
	</div>
</template>
