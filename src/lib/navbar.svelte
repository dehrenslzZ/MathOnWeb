<script lang="ts">
	import ThemeSelector from './theme-selector.svelte';
	import Fa from 'svelte-fa';
	import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
	import {_} from 'svelte-i18n';
	let navbarExtended = false;
</script>

<div class={`navbar ${navbarExtended ? 'extended' : ''}`}>
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
		<ThemeSelector />
	</div>
</div>

<style lang="scss">
	@import '../styles/navbar.scss';
</style>
