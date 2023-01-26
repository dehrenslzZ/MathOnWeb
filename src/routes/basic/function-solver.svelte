<script lang="ts">
	import nerdamer from "nerdamer/nerdamer.core";
	import "nerdamer/Solve";
	import "nerdamer/Algebra";
	import "nerdamer/Extra";
	import Snackbar from '$lib/snackbar.svelte';
	import { _ } from 'svelte-i18n';

	let func = '';
	let wanted = '';
	let showSnackbar = false;
	let snackbarText = '';
	let resultExists = false;
	let resultText = '';

	function solve() {
		let e = nerdamer(`solveEquations(${func}=${wanted})`);
		resultText = `The result for the variable is: ${e.text()}`;
		resultExists = true;
	}
</script>

{#if showSnackbar}
	<Snackbar message={snackbarText} />
{/if}
<div class="centered">
	<div class="container">
		<div class="function-flex">
			<p>f(x)=</p>
			<input class="function-input" bind:value={func} />
			<p>=</p>
			<input class="wanted-input" bind:value={wanted} />
		</div>
		<button class="calculate-button" on:click={solve}>{$_('general.calculate')}</button>
		{#if resultExists}
			<div class="result-form">
				{resultText}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../../styles/general.scss';
	@import '../../styles/function-solver.scss';
</style>
