import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [
		VitePWA({
			manifest: {
				background_color: 'white',
				display: 'standalone',
				icons: [
					{
						src: 'public/manifest-icon-192.maskable.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: 'public/manifest-icon-192.maskable.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'maskable'
					},
					{
						src: 'public/manifest-icon-512.maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: 'public/manifest-icon-512.maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable'
					}
				],
				name: 'Accesspories by five',
				short_name: 'A by 5',
				start_url: '.',
				theme_color: 'gold'
			},
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest']
			}
		}),
		vue()
	]
});
