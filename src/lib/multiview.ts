import { writable } from 'svelte/store';
import { browser } from '$app/env';

/**
 * Creates a writeable store value
 */
export const multiview = writable<boolean>(
	browser ? localStorage.getItem('multiview') === 'true' : false
);

/**
 * Setting subscriber for svelte writeable
 */
multiview.subscribe((themeValue) => {
	if (browser) {
		localStorage.setItem('multiview', `${themeValue}`);
	}
});
