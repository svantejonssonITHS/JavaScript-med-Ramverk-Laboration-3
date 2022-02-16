<template>
	<div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img src="../../assets/products/681ba08e-10cc-4ac4-94c2-53b8f6f3d7f0/0.jpg" class="d-block w-100" alt="watch" />
				<div class="carousel-caption d-md-block">
					<h1>Klockor</h1>
				</div>
			</div>
			<div class="carousel-item">
				<img
					src="../../assets/products/0cd2edc6-cbfa-440b-9c09-1c569042c69b/0.jpg"
					class="d-block w-100"
					alt="sun glasses"
				/>
				<div class="carousel-caption d-md-block">
					<h1>Solglasögon</h1>
				</div>
			</div>
			<div class="carousel-item">
				<img
					src="../../assets/products/f357fc33-1d11-498d-8e32-b9d7cde2461d/0.jpg"
					class="d-block w-100"
					alt="necklace"
				/>
				<div class="carousel-caption d-md-block">
					<h1>Halsband</h1>
				</div>
			</div>
			<div class="carousel-item">
				<img src="../../assets/products/2029ce36-b763-4856-8a6b-dc79d2f0a8c6/0.jpg" class="d-block w-100" alt="wallet" />
				<div class="carousel-caption d-md-block">
					<h1>Plånböcker</h1>
				</div>
			</div>
			<div class="carousel-item">
				<img
					src="../../assets/products/d8907f9d-af50-49fe-afcc-1cd394aba056/0.jpg"
					class="d-block w-100"
					alt="bracelet"
				/>
				<div class="carousel-caption d-md-block">
					<h1>Armband</h1>
				</div>
			</div>
			<div class="carousel-item">
				<img
					src="../../assets/products/59555930-be69-466f-91dc-2f564c26cc4b/0.jpg"
					class="d-block w-100"
					alt="earrings"
				/>
				<div class="carousel-caption d-md-block">
					<h1>Örhängen</h1>
				</div>
			</div>
		</div>
		<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>
	<div id="mySection"></div>
</template>
<style lang="scss" scoped>
	.carousel-inner img {
		margin: auto;
	}
	h1 {
		background-color: white;
		opacity: 0.5;
	}
	img {
		max-width: 50%;
	}
	#mySection {
		height: 4em;
	}
</style>
