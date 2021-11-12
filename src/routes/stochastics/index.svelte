<script lang="ts">
	import Navbar from '../../lib/navbar.svelte';
	import ListSelector from '../../lib/listSelector.svelte';
	import type { ListSelectorElement } from '../../typings/ListSelectorElement';

	let apps: ListSelectorElement[] = [
		{
			name: '4 field table',
			description: 'Can calculate a 4 field table',
			route: '/stochastics/4-field-table'
		},
	];
</script>

<Navbar />

<ListSelector elements={apps} />