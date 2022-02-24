<template>Toast</template>

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

<style scoped></style>
