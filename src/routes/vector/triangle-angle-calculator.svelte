<script lang="ts">
	import { DefaultsProvider } from '$lib/defaults-provider';
	import VectorInput from '$lib/vector-input.svelte';
	import { calculateAngleFromVectors } from '$lib/vector/angle-calculator';
	import { generateVectorDependency } from '$lib/vector/vector-dependency';

	let VEC_A = new DefaultsProvider().getVectorDefault();
	let VEC_B = new DefaultsProvider().getVectorDefault();
	let VEC_C = new DefaultsProvider().getVectorDefault();
	let resultValue = '';

	function calc() {
		const VEC_AB = generateVectorDependency(VEC_A, VEC_B);
		const VEC_AC = generateVectorDependency(VEC_A, VEC_C);
		const VEC_CA = generateVectorDependency(VEC_C, VEC_A);
		const VEC_BC = generateVectorDependency(VEC_AB, VEC_AC);
		const VEC_CB = generateVectorDependency(VEC_AC, VEC_AB);
		const VEC_BA = generateVectorDependency(VEC_B, VEC_A);
		const ALPHA = calculateAngleFromVectors(VEC_AB, VEC_AC);
		const BETA = calculateAngleFromVectors(VEC_BA, VEC_BC);
		const GAMMA = calculateAngleFromVectors(VEC_CB, VEC_CA);
		resultValue = `Alpha: ${ALPHA}\nBeta: ${BETA}\nGamma: ${GAMMA}`;
	}
</script>

<div class="centered">
	<div class="container">
		<div class="vector-inline">
			<VectorInput vector={VEC_A} />
			<VectorInput vector={VEC_B} />
			<VectorInput vector={VEC_C} />
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
	.vector-inline {
		grid-template-columns: repeat(3, 33%);
	}
	.container {
		transform: scale(0.8);
	}

	@media only screen and (max-height: 1100px) and (min-height: 900px) {
		.vector-inline {
			transform: scale(1.4) !important;
			width: 120% !important;
		}
		.calculate-button {
			margin-top: 0;
		}
	}
	@media only screen and (max-width: 680px) {
		.vector-inline {
			grid-template-columns: 100%;
			grid-template-rows: repeat(3, 33%);
			width: 90vw;
			height: 70vh;
		}
	}
</style>
