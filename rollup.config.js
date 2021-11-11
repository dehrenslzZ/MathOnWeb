/* eslint-disable no-undef */
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

export default {
	plugins: [
		svelte({
			preprocess: autoPreprocess()
		}),
		typescript({ sourceMap: true })
	]
};
