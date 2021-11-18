<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
	import VectorInput from '$lib/vector-input.svelte';
	import type { Vector } from '../../typings/vector';
	import { calculateAngleFromVectors } from '$lib/vector/angle-calculator';
	import { DefaultsProvider } from '$lib/defaults-provider';

	let resultValue = '';
	let vectorA = new DefaultsProvider().getVectorDefault();
	let vectorB = new DefaultsProvider().getVectorDefault();

	/**
	 * @param a The first vector
	 * @param b The second vector
	 *
	 * This method calculates the angle between two vectors.
	 * It uses the scalar product and the sum of the vectors to
	 * calculate the angle with the arcus cosinus.
	 * If the angle is NaN, the vectors are either linear independent or
	 * identical. In this case 0 will be returned
	 */
	function calculateAngle(a: Vector, b: Vector) {
		const PK_15_C = calculateAngleFromVectors(a, b);
		if (PK_15_C == Number.NaN) {
			resultValue = '0';
		} else {
			resultValue = '' + PK_15_C;
		}
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navbar />
<div class="centered">
	<div class="container">
		<div class="vector-inline">
			<VectorInput vector={vectorA} />
			<VectorInput vector={vectorB} />
		</div>
		<button class="calculate-button" on:click={() => calculateAngle(vectorA, vectorB)}
			>calculate</button
		>
		<div class="result-form">
			{#if resultValue != ''}
				The angle is {resultValue}°
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../styles/general.scss';
	@import '../../styles/vector.scss';
</style>
