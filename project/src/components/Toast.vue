<template>
	<article
		v-if="timer"
		id="toast"
		class="shadow m-4 position-fixed top-0 end-0 mw-100 fadeIn"
		@mouseenter="pauseCountdown"
		@mouseleave="startCountdown"
	>
		<header class="info d-flex justify-content-between align-items-center p-2 rounded-top">
			<h2 class="m-0 p-0 fs-5">{{ title }}</h2>
			<button class="info btn rounded-circle d-flex align-items-center fs-5" @click="removeToast">
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
				default: 2500, // Minimum, 2500ms (2.5s)
				validator(value) {
					// Minimum Toast duration is 2.5s
					if (value < 2500 || isNaN(value)) return false;

					return true;
				}
			}
		},
		data() {
			return {
				timer: null,
				startTime: new Date(),
				timeLeft: this.duration
			};
		},
		methods: {
			startCountdown() {
				this.startTime = new Date();

				this.timer = setTimeout(() => {
					this.removeToast();
				}, this.timeLeft);
			},
			pauseCountdown() {
				this.timeLeft -= new Date() - this.startTime;
				clearTimeout(this.timer);
			},
			removeToast() {
				clearTimeout(this.timer);

				const toast = document.querySelector('article#toast');
				if (toast) {
					toast.classList.remove('fadeIn');
					toast.classList.add('fadeOut');
				}

				setTimeout(() => {
					this.timer = null;
				}, 1000);
			}
		},
		created() {
			this.startCountdown();
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

	article {
		z-index: 1000;
	}

	button {
		height: 100% !important;
		aspect-ratio: 1/1;
	}

	.fadeIn {
		animation: fadeIn 1000ms;
	}

	.fadeOut {
		animation: fadeOut 1000ms forwards;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
			visibility: visible;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			visibility: collapse;
		}
	}
</style>
