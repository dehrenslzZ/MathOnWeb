<script lang="ts">
	import ListSelector from '../../lib/listSelector.svelte';
	import type { ListSelectorElement } from '../../typings/ListSelectorElement';

	let apps: ListSelectorElement[] = [
		{
			name: 'four field table completer',
			description: 'Completes a four field table',
			route: '/stochastics/4-field-table-completer'
		}
	];
</script>

<ListSelector elements={apps} />
