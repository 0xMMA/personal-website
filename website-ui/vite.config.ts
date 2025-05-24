import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		watch: {
			// Use polling for file changes
			usePolling: true,
			// Interval in milliseconds (optional)
			interval: 250
		}
	}
});
