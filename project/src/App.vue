<template>
	<nav>
		<HeaderImage />
		<NavBar />
	</nav>

	<RouterView />
	<footer>
		<FooterSection />
	</footer>
	<Toast
		v-if="showToast"
		:title="toastTitle"
		:message="toastMessage"
		:type="toastType"
		:position="toastPosition"
		:duration="toastDuration"
		ref="toast"
		@toast-end="destroyToast"
	/>
</template>

<script>
	import NavBar from './components/NavBar.vue';
	import HeaderImage from './components/HeaderImage.vue';
	import FooterSection from './components/FooterSection.vue';
	import Toast from './components/Toast.vue';
	export default {
		components: {
			NavBar,
			HeaderImage,
			FooterSection,
			Toast
		},
		data() {
			return {
				showToast: false,
				toastTitle: null,
				toastMessage: null,
				toastType: null,
				toastPosition: null,
				toastDuration: null
			};
		},
		methods: {
			createToast(options) {
				// Remove all traces of old toasts
				this.destroyToast();

				// Toast is updated with new information
				if (options.title) this.toastTitle = options.title;
				if (options.message) this.toastMessage = options.message;
				if (options.type) this.toastType = options.type;
				if (options.position) this.toastPosition = options.position;
				if (options.duration) this.toastDuration = options.duration;
				this.showToast = true;
			},
			destroyToast() {
				this.showToast = false;
				this.showToast = false;
				this.toastTitle = null;
				this.toastMessage = null;
				this.toastType = null;
				this.toastPosition = null;
				this.toastDuration = null;
			}
		}
	};
</script>
