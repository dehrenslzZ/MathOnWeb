import { writable } from 'svelte/store';
import { browser } from '$app/env';

/**
 * Creates a writeable store value
 */
export const theme = writable<string>(
	browser ? localStorage.getItem('color-theme') ?? 'dark' : 'dark'
);

/**
 * Setting subscriber for svelte writeable
 */
theme.subscribe((themeValue) => {
	if (browser) {
		localStorage.setItem('color-theme', themeValue);
	}
});
