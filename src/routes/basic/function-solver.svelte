<script lang="ts">
	import nerdamer from 'nerdamer/all.min';
	import { _ } from 'svelte-i18n';

	let func = '';
	let wanted = '';
	let resultExists = false;
	let resultText = '';

	function solve() {
		let e = nerdamer(`solveEquations(${func}=${wanted})`);
		resultText = `The result for the variable is: ${e.text()}`;
		resultExists = true;
	}
</script>
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
