import {register, init, getLocaleFromNavigator} from 'svelte-i18n';


register('de', () => import('./translations/de.json'));
register('en', () => import('./translations/en.json'));

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});
