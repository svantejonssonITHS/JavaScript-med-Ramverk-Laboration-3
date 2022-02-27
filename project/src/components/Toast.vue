<template>
	<article
		v-if="timer"
		id="toast"
		class="shadow m-4 position-fixed mw-100 fadeIn"
		:style="toastPosition"
		@mouseenter="pauseCountdown"
		@mouseleave="startCountdown"
	>
		<header class="d-flex justify-content-between align-items-center p-2 rounded-top" :class="toastType">
			<h2 class="m-0 me-2 p-0 fs-5">{{ title }}</h2>
			<button class="btn rounded-circle d-flex align-items-center fs-5" :class="toastType" @click="removeToast">
				<i class="fa fa-times"></i>
			</button>
		</header>
		<main class="bg-white p-2 rounded-bottom">
			<p class="m-0 p-0 pe-0 pe-sm-5 fs-5">{{ message }}</p>
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
				default: 2500
			}
		},
		emits: ['toast-end'],
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
				}, this.timeLeft + 1000); // + 1000ms (1s) == animation time
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
					this.$emit('toast-end');
				}, 1000); // 1000ms (1s) == animation time
			}
		},
		computed: {
			toastType() {
				return this.$props.type;
			},
			toastPosition() {
				let xAxis;
				let yAxis;
				console.log(this.$props.position[0]);
				console.log(this.$props.position[1]);

				switch (this.$props.position[0]) {
					case 'start':
						xAxis = 'left: 0;';
						break;
					case 'middle':
						xAxis = 'left: 50%; transform: translateX(-50%);';
						break;
					case 'end':
						xAxis = 'right: 0;';
						break;
				}

				switch (this.$props.position[1]) {
					case 'start':
						yAxis = 'top: 0;';
						break;
					case 'middle':
						yAxis = 'top: 50%; transform: translateY(-50%)';
						break;
					case 'end':
						yAxis = 'bottom: 0;';
						break;
				}

				return `${xAxis} ${yAxis}`;
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
		max-width: 500px;
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
