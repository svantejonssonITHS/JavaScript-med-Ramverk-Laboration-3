import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			name: 'Home',
			component: () => import('./views/Home.vue'),
			path: '/'
		},
		{
			name: 'Categories',
			component: () => import('./views/Categories.vue'),
			path: '/categories'
		},
		{
			name: 'All products',
			component: () => import('./views/AllProducts.vue'),
			path: '/allProducts'
		},
		{
			name: 'Product',
			component: () => import('./views/Product.vue'),
			path: '/product/:id'
		}
	]
});

router.beforeEach((to, from, next) => {
	document.title = `Accessories by 5 - ${String(to.name)}`;
	next();
});

export default router;
