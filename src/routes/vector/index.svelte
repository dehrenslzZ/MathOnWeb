<script lang="ts">
	import Navbar from '../../lib/navbar.svelte';
	import ListSelector from '../../lib/listSelector.svelte';
	import type { ListSelectorElement } from '../../typings/ListSelectorElement';

	let apps: ListSelectorElement[] = [
		{ name: 'Vector angle calculator', description: 'Calculates the angle between to vectors', route: '/vector/angle-calculator' },
		{ name: 'Vector linear dependency', description: 'checks if two vectors are linear dependent', route: '/vector/linear-checker' },
		{ name: 'Is Vector on line', description: 'Checks if a vector is on a line', route: '/vector/check-vector-on-line' },
		{ name: 'Get vector-line from points', description: 'Generates a line from two points (vectors)', route: '/vector/generate-line' }
	];
</script>

<Navbar />

<ListSelector elements={apps} />
