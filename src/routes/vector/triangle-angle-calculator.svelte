<script lang="ts">
    import type { Vector } from "src/typings/vector";
    import Navbar from "$lib/navbar.svelte";
    import VectorInput from "$lib/vector-input.svelte";
    import calculateAngleFromVectors from "$lib/vector/angle-calculator";

    let VEC_A: Vector = {x: 0, y: 0, z: 0};
    let VEC_B: Vector = {x: 0, y: 0, z: 0};
    let VEC_C: Vector = {x: 0, y: 0, z: 0};
    let resultValue = "";

    /**
     * 
     * @param a The first vector
     * @param b The secound vector
     * 
     * This method calculates one vector out of two vectors.
     */
     function generateDependencyVector(a: Vector, b: Vector): Vector {
        return {
            x: (-a.x) + b.x,
            y: (-a.y) + b.y,
            z: (-a.z) + b.z
        } as Vector;
    }

    function calc() {
        const VEC_AB = generateDependencyVector(VEC_A, VEC_B);
        const VEC_AC = generateDependencyVector(VEC_A, VEC_C);
        const VEC_CA = generateDependencyVector(VEC_C, VEC_A);
        const VEC_BC = generateDependencyVector(VEC_AB, VEC_AC);
        const VEC_CB = generateDependencyVector(VEC_AC, VEC_AB);
        const VEC_BA = generateDependencyVector(VEC_B, VEC_A);
        const ALPHA = calculateAngleFromVectors(VEC_AB, VEC_AC);
        const BETA = calculateAngleFromVectors(VEC_BA, VEC_BC);
        const GAMMA = calculateAngleFromVectors(VEC_CB, VEC_CA);
        resultValue = `Alpha: ${ALPHA}\nBeta: ${BETA}\nGamma: ${GAMMA}`;
    }
</script>

<Navbar />
<div class="centered">
    <div class="container">
        <div class="vector-inline">
            <VectorInput vector={VEC_A} />
            <VectorInput vector={VEC_B} />
            <VectorInput vector={VEC_C} />
        </div>
        <button class="calculate-button" on:click={() => calc()}>calculate</button>
        <div class="result-form">
            {#if resultValue != ""}
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
        grid-template-columns: repeat(3, 33.3%);
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
        transition: .3s;
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