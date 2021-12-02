<script lang="ts">
	import {browser} from '$app/env';
	let navbarExtended = false;
	export let largerMargin: boolean | undefined = undefined;
	$: if (browser)document.getElementById('svelte').classList.add('theme-dark');
</script>

<div class={`navbar ${navbarExtended ? 'extended' : ''}`}>
	<button
		class="navbar-toggler"
		on:click={() => {
			navbarExtended = !navbarExtended;
		}}
	/>
	<div class="navbar-menu">
		<a href="/">Home</a>
		<a href="/basic">Basic</a>
		<a href="/vector">Vector</a>
		<a href="/stochastics">Stochastics</a>
	</div>
</div>

<style lang="scss">
	@import '../styles/navbar.scss';
	@import '../styles/theme.scss';
</style>
