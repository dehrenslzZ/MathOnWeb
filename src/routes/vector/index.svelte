<script lang="ts">
import { _ } from 'svelte-i18n';

	import ListSelector from '../../lib/listSelector.svelte';
	import type { ListSelectorElement } from '../../typings/ListSelectorElement';

	let apps: ListSelectorElement[] = [
		{
			name: $_('vector.angle-calculator.title'),
			description: $_('vector.angle-calculator.description'),
			route: '/vector/angle-calculator'
		},
		{
			name: $_('vector.linear-dependency.title'),
			description:$_('vector.linear-dependency.description'),
			route: '/vector/linear-checker'
		},
		{
			name: $_('vector.is-vector-on-line.title'),
			description: $_('vector.is-vector-on-line.description'),
			route: '/vector/check-vector-on-line'
		},
		{
			name: $_('vector.get-vector-line.title'),
			description: $_('vector.get-vector-line.description'),
			route: '/vector/generate-line'
		},
		{
			name: $_('vector.triangle-angle-calculator.title'),
			description: $_('vector.triangle-angle-calculator.description'),
			route: '/vector/triangle-angle-calculator'
		},
		{
			name: $_('vector.layer-type-converter.title'),
			description: $_('vector.layer-type-converter.description'),
			route: '/vector/layer-type-calculator'
		}
	];
</script>

<ListSelector elements={apps} />
