import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import FullReload from 'vite-plugin-full-reload';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [FullReload(['src/**/*.svelte'])]
		}
	}
};

export default config;
