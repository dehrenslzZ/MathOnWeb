<script lang="ts">
	import VectorInput from '$lib/vector-input.svelte';
	import { generateVectorDependency, checkLinearDependency } from '$lib/vector/vector-dependency';
	import { DefaultsProvider } from '$lib/defaults-provider';
	import { _ } from 'svelte-i18n';

	let v1 = new DefaultsProvider().getVectorDefault();
	let v2 = new DefaultsProvider().getVectorDefault();
	let v3 = new DefaultsProvider().getVectorDefault();
	let v4 = new DefaultsProvider().getVectorDefault();

	let resultValue = '';

	/**
	 * This method gets all vector dependencys and checks,
	 * if the vectors are linear dependent or not.
	 * It prints the result in the result-form
	 */
	function calc() {
		let AB = generateVectorDependency(v1, v2);
		let AC = generateVectorDependency(v1, v3);
		let AD = generateVectorDependency(v1, v4);
		if (checkLinearDependency(AB, AC)) {
			resultValue = `D ${$_('vector.is-vector-on-line.not-on-line')}`;
		} else if (checkLinearDependency(AC, AD)) {
			resultValue = `B ${$_('vector.is-vector-on-line.not-on-line')}`;
		} else if (checkLinearDependency(AB, AD)) {
			resultValue = `C ${$_('vector.is-vector-on-line.not-on-line')}`;
		} else {
			resultValue = `A ${$_('vector.is-vector-on-line.not-on-line')}`;
		}
	}
</script>

<div class="centered">
	<div class="container">
		<div class="vector-inline">
			<VectorInput vector={v1} tooltip={$_('vector.is-vector-on-line.tooltip.vector')} />
			<VectorInput vector={v2} tooltip={$_('vector.is-vector-on-line.tooltip.vector')} />
			<VectorInput vector={v3} tooltip={$_('vector.is-vector-on-line.tooltip.vector')} />
			<VectorInput vector={v4} tooltip={$_('vector.is-vector-on-line.tooltip.vector')} />
		</div>
		<button class="calculate-button" on:click={() => calc()}>{$_('general.calculate')}</button>
		<div class="result-form">
			{#if resultValue != ''}
				{resultValue}
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../styles/general.scss';
	@import '../../styles/vector.scss';
	.vector-inline {
		grid-template-columns: repeat(4, 25%);
	}
	@media only screen and (max-height: 1100px) and (min-height: 900px) {
		.vector-inline {
			transform: scale(1.3) !important;
			width: 150% !important;
		}
		.calculate-button {
			margin-top: 100px;
		}
	}
	@media only screen and (max-width: 680px) {
		.vector-inline {
			grid-template-columns: 100%;
			grid-template-rows: repeat(4, 25%);
			width: 90vw;
			height: 120vh;
		}
		.centered {
			overflow-y: scroll;
		}
	}
</style>
