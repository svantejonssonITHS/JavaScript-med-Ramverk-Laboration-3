<template>
	<article class="zindex-modal shadow m-4 position-fixed top-0 end-0">
		<header class="info d-flex justify-content-between align-items-center p-2 rounded-top">
			<h2 class="m-0 p-0 fs-5">{{ title }}</h2>
			<button class="info btn rounded-circle d-flex align-items-center fs-5">
				<i class="fa fa-times"></i>
			</button>
		</header>
		<main class="bg-white p-2 rounded-bottom">
			<p class="m-0 p-0 pe-5 fs-5">{{ message }}</p>
		</main>
	</article>
</template>

<script>
	export default {
		name: 'Toast',
		props: {
			title: {
				type: String,
				required: false,
				default: 'Notice'
			},
			message: {
				type: String,
				required: true
			},
			type: {
				type: String,
				required: false,
				default: 'info',
				validator(value) {
					// Available types to choose from
					return ['info', 'success', 'warning', 'danger'].includes(value);
				}
			},
			position: {
				type: Array,
				required: false,
				// X-axis: end
				// Y-axis: start
				default: () => ['end', 'start'],
				validator(value) {
					// An array of two strings is expected
					if (value.length != 2) return false;

					// Available options
					const options = ['start', 'middle', 'end'];

					if (!options.includes(value[0])) return false;
					if (!options.includes(value[1])) return false;
					return true;
				}
			},
			duration: {
				type: Number,
				required: false,
				default: 2500 // 2500ms (2.5s)
			}
		}
	};
</script>

<style scoped>
	.info {
		background-color: #a7c7e7;
		color: #212529;
	}

	.success {
		background-color: #198754;
		color: #f8f9fa;
	}

	.warning {
		background-color: #ffc107;
		color: #212529;
	}

	.danger {
		background-color: #dc3545;
		color: #f8f9fa;
	}

	button {
		height: 100% !important;
		aspect-ratio: 1/1;
	}
</style>
