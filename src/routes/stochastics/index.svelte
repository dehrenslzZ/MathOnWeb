<script lang="ts">
	import { _ } from 'svelte-i18n';
	import ListSelector from '../../lib/listSelector.svelte';
	import type { ListSelectorElement } from '../../typings/ListSelectorElement';

	let apps: ListSelectorElement[] = [
		{
			name: $_('stochastics.4-field-table.title'),
			description: $_('stochastics.4-field-table.description'),
			route: '/stochastics/4-field-table-completer'
		},
		{
			name: $_('stochastics.ncr-calculator.title'),
			description: $_('stochastics.ncr-calculator.description'),
			route: '/stochastics/ncr-calculator'
		},
		{
			name: $_('stochastics.benulli-calculator.title'),
			description: $_('stochastics.benulli-calculator.description'),
			route: '/stochastics/benulli-calculator'
		},
        {
            name: $_('stochastics.expectation-variety.title'),
            description: $_('stochastics.expectation-variety.description'),
            route: '/stochastics/expectation-variety'
        }
	];
</script>

<ListSelector elements={apps} />
