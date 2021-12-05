<script lang="ts">
	import ThemeSelector from './theme-selector.svelte';
	import Fa from 'svelte-fa';
	import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';
	let navbarExtended = false;
</script>

<div class={`navbar ${navbarExtended ? 'extended' : ''}`}>
	<div class="navbar-toggler"
			 on:click={() => {
			navbarExtended = !navbarExtended;
		}}>
		<Fa icon={faAlignJustify} />
	</div>
	<div class="navbar-menu">
		<a href="/">Home</a>
		<a href="/basic">Basic</a>
		<a href="/vector">Vector</a>
		<a href="/stochastics">Stochastics</a>
	</div>
	<div class='navbar-actions'>
		<ThemeSelector />
	</div>
</div>

<style lang="scss">
	@import '../styles/navbar.scss';
</style>
