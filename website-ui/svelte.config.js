import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter({
			// The directory where the static files will be generated
			pages: 'build',
			assets: 'build',
			fallback: '200.html', // This enables SPA mode
			precompress: false // Enable pre-compression of files (gzip, etc.)
		}),
		// This ensures all routes are handled by the SPA
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			handleFetchRedirect: 'warn',
			handleFallback: 'warn'
		}
	}
};

export default config;
