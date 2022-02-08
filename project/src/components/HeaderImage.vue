<style lang="scss">
	#header {
		background-color: black;
		max-height: 45%;
		max-width: 100%;
	}

	#imageacc {
		height: auto;
		max-width: 100%;
	}
	#logoacc {
		height: auto;
		max-width: 100%;
	}
</style>

<template>
	<div id="header">
		<router-link to="/"><img src="../../assets/loggavittransp.png" alt="logo" id="logoacc" /></router-link>

		<img src="../../assets/acc4.jpg" alt="accessories" id="imageacc" class="img-fluid" />
	</div>
</template>
