<script lang="ts">
	import Navbar from '../../lib/navbar.svelte';
	import ListSelector from '../../lib/listSelector.svelte';
	import type { ListSelectorElement } from '../../typings/ListSelectorElement';

	let apps: ListSelectorElement[] = [
		{ name: 'Calculator', description: 'A basic calculator', route: '/basic/calculator' },
		{
			name: 'Triangle completer',
			description: 'completes a triangle',
			route: '/basic/triangle-completer'
		}
	];
</script>

<Navbar />

<ListSelector elements={apps} />
