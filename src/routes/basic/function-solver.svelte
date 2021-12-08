<script lang="ts">
	import Snackbar from '$lib/snackbar.svelte';
	import solveFunction from '$lib/solve-function';
	import { _ } from 'svelte-i18n';

	let func = '';
	let wanted = '';
	let showSnackbar = false;
	let snackbarText = '';
	let resultExists = false;
	let resultText = '';

	function solve() {
		const [result, err] = solveFunction(func, +wanted);
		if (err.errorOccurred) {
			snackbarText = err.message;
			showSnackbar = true;
			setTimeout(() => {
				showSnackbar = false;
				snackbarText = '';
			}, 2000);
		} else {
			resultText = `The result for the variable is: ${result}`;
			resultExists = true;
		}
	}
</script>

{#if showSnackbar}
	<Snackbar message={snackbarText} />
{/if}
<div class="centered">
	<div class="experimental-text">
		{$_('general.experimental-text')}
	</div>
	<div class="container">
		<div class="function-flex">
			<p>f(x)=</p>
			<input class="function-input" bind:value={func} />
			<p>=</p>
			<input class="wanted-input" bind:value={wanted} />
		</div>
		<button class="calculate-button" on:click={solve}> Solve </button>
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
