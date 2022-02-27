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
		:title="toastTitle"
		:message="toastMessage"
		:type="toastType"
		:position="toastPosition"
		:duration="toastDuration"
		ref="toast"
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
				toastTitle: null,
				toastMessage: null,
				toastType: null,
				toastPosition: null,
				toastDuration: null
			};
		},
		methods: {
			displayToast(options) {
				if (options.title) this.toastTitle = options.title;
				if (options.message) this.toastMessage = options.message;
				if (options.type) this.toastType = options.type;
				if (options.position) this.toastPosition = options.position;
				if (options.duration) this.toastDuration = options.duration;
				this.$refs.toast.startCountdown();
			}
		}
	};
</script>
