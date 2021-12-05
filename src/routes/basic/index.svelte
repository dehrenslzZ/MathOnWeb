<script lang="ts">
	import ListSelector from '../../lib/listSelector.svelte';
	import type { ListSelectorElement } from '../../typings/ListSelectorElement';

	let apps: ListSelectorElement[] = [
		{ name: 'Calculator', description: 'A basic calculator', route: '/basic/calculator' },
		{
			name: 'Triangle completer',
			description: 'completes a triangle',
			route: '/basic/triangle-completer'
		},
		{
			name: 'Function solver',
			description: 'solves an matn function',
			route: '/basic/function-solver'
		}
	];
</script>

<ListSelector elements={apps} />
