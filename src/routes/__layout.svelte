<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
	import {theme} from '../lib/theme';
</script>

<svelte:head>
	<link rel='stylesheet' href={`/theme/${$theme}.css`} />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navbar />
<slot />
