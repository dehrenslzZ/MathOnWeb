<script lang="ts">
	import ListSelector from '../../lib/listSelector.svelte';
	import type { ListSelectorElement } from '../../typings/ListSelectorElement';

	let apps: ListSelectorElement[] = [
		{
			name: 'Vector angle calculator',
			description: 'Calculates the angle between to vectors',
			route: '/vector/angle-calculator'
		},
		{
			name: 'Vector linear dependency',
			description: 'checks if two vectors are linear dependent',
			route: '/vector/linear-checker'
		},
		{
			name: 'Is Vector on line',
			description: 'Checks if a vector is on a line',
			route: '/vector/check-vector-on-line'
		},
		{
			name: 'Get vector-line from points',
			description: 'Generates a line from two points (vectors)',
			route: '/vector/generate-line'
		},
		{
			name: 'Triangle angle calculator',
			description: 'Calculates all angles of an triangle, with vectors',
			route: '/vector/triangle-angle-calculator'
		},
		{
			name: 'Layer type converter',
			description: 'Converts the differnt types of layers',
			route: '/vector/layer-type-calculator'
		}
	];
</script>

<ListSelector elements={apps} />
