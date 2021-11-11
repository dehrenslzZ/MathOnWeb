<script lang="ts">
	import type { Vector } from 'src/typings/vector';
	import Navbar from '$lib/navbar.svelte';
	import VectorInput from '$lib/vector-input.svelte';
	import { generateVectorDependency, checkLinearDependency } from '$lib/vector/vector-dependency';

	let v1: Vector = { x: 0, y: 0, z: 0 };
	let v2: Vector = { x: 0, y: 0, z: 0 };
	let v3: Vector = { x: 0, y: 0, z: 0 };
	let v4: Vector = { x: 0, y: 0, z: 0 };

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

<style lang="css">
	.centered {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.container {
		width: 30vw;
		height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
	.vector-inline {
		display: grid;
		place-items: center;
		grid-template-columns: repeat(4, 25%);
		height: 50%;
		width: 100%;
	}
	.calculate-button {
		background-color: rgb(16, 75, 109);
		color: white;
		border: none;
		font-family: 'Roboto', sans-serif;
		font-size: 2em;
		padding: 10px;
		border-radius: 5px;
		transition: 0.3s;
	}
	.calculate-button:hover {
		filter: brightness(1.5);
	}
	.result-form {
		height: 6em;
		width: 18em;
		background-color: white;
		display: grid;
		place-items: center;
		font-size: 2em;
		text-overflow: clip;
	}
</style>
