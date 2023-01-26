<script lang="ts">
	import ListSelector from '../../lib/listSelector.svelte';
	import type { ListSelectorElement } from '../../typings/ListSelectorElement';
	import { _ } from 'svelte-i18n';
	import { roundTo } from '$lib/custom-math';

	let apps: ListSelectorElement[] = [
		{
			name: $_('basic.calculator.title'),
			description: $_('basic.calculator.description'),
			route: '/basic/calculator'
		},
		{
			name: $_('basic.triangle-completer.title'),
			description: $_('basic.triangle-completer.description'),
			route: '/basic/triangle-completer'
		},
		{
			name: $_('basic.function-solver.title'),
			description: $_('basic.function-solver.description'),
			route: '/basic/function-solver'
		},
		{
			name: $_('basic.faculty.title'),
			description: $_('basic.faculty.description'),
			route: '/basic/faculty'
		},
		{
			name: $_('basic.logarithm.title'),
			description: $_('basic.logarithm.description'),
			route: '/basic/logarithm'
		},
		{
			name: $_('basic.derivation-former.title'),
			description: $_('basic.derivation-former.description'),
			route: '/basic/derivation-former'
		}
	];
</script>

<ListSelector elements={apps} />
