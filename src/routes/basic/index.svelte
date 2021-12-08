<script lang="ts">
	import ListSelector from '../../lib/listSelector.svelte';
	import type { ListSelectorElement } from '../../typings/ListSelectorElement';
	import {_} from 'svelte-i18n';

	let apps: ListSelectorElement[] = [
		{ name: $_('basic.calculator.title'), description: $_('basic.calculator.description'), route: '/basic/calculator' },
		{
			name: $_('basic.triangle-completer.title'),
			description: $_('basic.triangle-completer.description'),
			route: '/basic/triangle-completer'
		},
		{
			name: $_('basic.function-solver.title'),
			description: $_('basic.function-solver.description'),
			route: '/basic/function-solver'
		}
	];
</script>

<ListSelector elements={apps} />
