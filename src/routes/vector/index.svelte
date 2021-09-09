<script lang="ts">
	import Navbar from '../../lib/navbar.svelte';
	import ListSelector from '../../lib/listSelector.svelte';
	import type { ListSelectorElement } from '../../typings/ListSelectorElement';

	let apps: ListSelectorElement[] = [
		{ name: 'Vector angle calculator', description: 'Calculates the angle between to vectors', route: '/vector/angle-calculator' }
	];
</script>

<Navbar />

<ListSelector elements={apps} />
