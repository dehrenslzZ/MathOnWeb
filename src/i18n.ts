import {register, init, getLocaleFromHash} from 'svelte-i18n';


register('de', () => import('./translations/en.json'));
register('en', () => import('./translations/de.json'));

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromHash('lang')
});
