<script lang="ts">
    import type { Vector } from "src/typings/vector";
    import Navbar from "$lib/navbar.svelte";
    import VectorInput from "$lib/vector-input.svelte";
    import {generateVectorDependency} from "$lib/vector/vector-dependency";

    let v1: Vector = {x: 0, y: 0, z: 0};
    let v2: Vector = {x: 0, y: 0, z: 0};
    let resultValue = "";

    /**
     * This method calculates the dependency vector and
     * prints the line formular into the result-form.
     */
    function calc() {
        let moveVec = generateVectorDependency(v1, v2);
        resultValue = 
        `(${v1.x}|${v1.y}|${v1.z}) + r(${moveVec.x}|${moveVec.y}|${moveVec.z})`;
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
        grid-template-columns: repeat(2, 50%);
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