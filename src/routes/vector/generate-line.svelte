<script lang="ts">
	import type { Vector } from 'src/typings/vector';
	import Navbar from '$lib/navbar.svelte';
	import VectorInput from '$lib/vector-input.svelte';
	import { generateVectorDependency } from '$lib/vector/vector-dependency';

	let v1: Vector = { x: 0, y: 0, z: 0 };
	let v2: Vector = { x: 0, y: 0, z: 0 };
	let resultValue = '';

	/**
	 * This method calculates the dependency vector and
	 * prints the line formular into the result-form.
	 */
	function calc() {
		let moveVec = generateVectorDependency(v1, v2);
		resultValue = `(${v1.x}|${v1.y}|${v1.z}) + r(${moveVec.x}|${moveVec.y}|${moveVec.z})`;
	}
</script>

<Navbar />
<div class="centered">
	<div class="container">
		<div class="vector-inline">
			<VectorInput vector={v1} />
			<VectorInput vector={v2} />
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
</style>
