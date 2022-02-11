<template>
	<div class="projects">
		<Carousel
			v-for="project in projects"
			:key="project.id"
			:title="project.title"
			:image="`@/public/${products.images}`"
			:desc="project.desc"
		/>
	</div>
</template>

<script>
	import Carousel from '@/components/Carousel.vue';
	import JsonProjects from '@/products.json';
	export default {
		name: 'Projects',
		components: {
			Carousel
		},
		data: function () {
			return {
				projects: JsonProjects
			};
		}
	};
</script>
