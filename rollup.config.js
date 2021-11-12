/* eslint-disable no-undef */
import preprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

export default {
	plugins: [
		svelte({
			preprocess: preprocess()
		}),
		typescript({ sourceMap: true })
	]
};
