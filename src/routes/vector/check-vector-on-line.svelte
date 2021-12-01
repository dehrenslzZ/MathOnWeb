<script lang="ts">
	import type { Vector } from 'src/typings/vector';
	import Navbar from '$lib/navbar.svelte';
	import VectorInput from '$lib/vector-input.svelte';
	import { generateVectorDependency, checkLinearDependency } from '$lib/vector/vector-dependency';
	import { DefaultsProvider } from '$lib/defaults-provider';

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
			resultValue = 'D is not on the line';
		} else if (checkLinearDependency(AC, AD)) {
			resultValue = 'B is not on the line';
		} else if (checkLinearDependency(AB, AD)) {
			resultValue = 'C is not on the line';
		} else {
			resultValue = 'A is not on the line';
		}
	}
</script>

<Navbar />
<div class="centered">
	<div class="container">
		<div class="vector-inline">
			<VectorInput vector={v1} />
			<VectorInput vector={v2} />
			<VectorInput vector={v3} />
			<VectorInput vector={v4} />
		</div>
		<button class="calculate-button" on:click={() => calc()}>calculate</button>
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
	
	@media only screen and (max-height: 1100px) and (min-height: 900px) {
		.vector-inline {
			transform: scale(1.3) !important;
		}
		.calculate-button {
			margin-top: 100px;
		}
	}
	@media only screen and (max-width: 680px) {
		.vector-inline {
			grid-template-columns: repeat(2, 50%);
			grid-template-rows: repeat(2, 50%);
			width: 90vw;
		}
		
	}
</style>
