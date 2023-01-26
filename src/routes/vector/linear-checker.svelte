<script lang="ts">
	import { DefaultsProvider } from '$lib/defaults-provider';
	import type { Vector } from 'src/typings/vector';
	import VectorInput from '$lib/vector-input.svelte';
	import { checkLinearDependency } from '$lib/vector/vector-dependency';
	import { _ } from 'svelte-i18n';

	let v1 = new DefaultsProvider().getVectorDefault();
	let v2 = new DefaultsProvider().getVectorDefault();
	let resultText = '';

	/**
	 *
	 * @param v1 The first vector
	 * @param v2 The second vector
	 *
	 * This method checks if the two given vectors are linear dependent or
	 * not and saves this into the resultText variable, which is displayed on
	 * the webpage.
	 */
	function calc(v1: Vector, v2: Vector) {
		if (checkLinearDependency(v1, v2)) {
			resultText = $_('vector.linear-dependency.is-dependent');
		} else {
			resultText = $_('vector.linear-dependency.is-independent');
		}
	}
</script>

<div class="centered">
	<div class="container">
		<div class="vector-inline">
			<VectorInput vector={v1} tooltip={$_('vector.linear-dependency.tooltip.vector-a')} />
			<VectorInput vector={v2} tooltip={$_('vector.linear-dependency.tooltip.vector-b')} />
		</div>
		<button class="calculate-button" on:click={() => calc(v1, v2)}>{$_('general.calculate')}</button
		>
		<div class="result-form">
			{#if resultText != ''}
				{resultText}
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../styles/general.scss';
	@import '../../styles/vector.scss';
	.container {
		transform: scale(0.7);
	}
</style>
