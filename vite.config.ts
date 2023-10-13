import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': '/src/components',
			'@layouts': '/src/layouts',
			'@styles': '/src/styles',
			'@types': '/src/types',
			'@pages': '/src/pages',
			'@assets': '/src/assets',
			'@images': '/src/assets/images',
			'@utils': '/src/utils',
			'@store': '/src/store',
			'@services': '/src/services',
		},
	},
})
