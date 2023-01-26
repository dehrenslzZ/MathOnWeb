<script lang="ts">
	import ThemeSelector from './theme-selector.svelte';
	import MultiviewSelector from './multiview-selector.svelte';
	import Fa from 'svelte-fa';
	import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
	import { _ } from 'svelte-i18n';
	import {multiview} from "$lib/multiview";
	let navbarExtended = false;

	/**
	 * Checks if the user clicked outside of the navbar and the
	 * navbar gets minimized, if it was extended before.
	 *
	 * @param event The PointerEvent triggered by a click
	 */
	const handleClick = (event: PointerEvent) => {
		if (!document.getElementById('navbar').contains(event.target as Node)) {
			navbarExtended = false;
		}
	};

	// Adding click listener to the whole window
	window.addEventListener('click', handleClick);

	let isIframe = window.self !== window.top;
	let shouldShrink = !isIframe && $multiview;
</script>

<div id="navbar" class={`navbar ${navbarExtended ? 'extended' : ''}`} style={shouldShrink ? 'width: 49vw !important' : undefined}>
	<div
		class="navbar-toggler"
		on:click={() => {
			navbarExtended = !navbarExtended;
		}}
	>
		<Fa icon={faAlignJustify} />
	</div>
	<div class="navbar-menu">
		<a href="/">{$_('navbar.home')}</a>
		<a href="/basic">{$_('navbar.basic')}</a>
		<a href="/vector">{$_('navbar.vector')}</a>
		<a href="/stochastics">{$_('navbar.stochastics')}</a>
	</div>
	<div class="navbar-actions">

		{#if (!isIframe)}
			<MultiviewSelector />
		{/if}
		<ThemeSelector />
	</div>
</div>

<style lang="scss">
	@import '../styles/navbar.scss';
</style>
