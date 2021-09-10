<script lang="ts">
    import Navbar from "$lib/navbar.svelte";
    import type {Vector} from "src/typings/vector";
    import VectorInput from "$lib/vector-input.svelte";
    import {checkLinearDependency} from "$lib/vector/vector-dependency";

    let v1: Vector = {x: 0, y: 0, z: 0};
    let v2: Vector = {x: 0, y: 0, z: 0};
    let resultText = "";

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
            resultText = "The vectors are linear dependent";
        } else {
            resultText = "The vectors are linear independent";
        }
    }
</script>

<Navbar />
<div class="centered">
    <div class="container">
        <div class="vector-inline">
            <VectorInput vector={v1} />
            <VectorInput vector={v2} />
        </div>
        <button class="calculate-button" on:click={() => calc(v1, v2)}>calculate</button>
        <div class="result-form">
            {#if resultText != ""}
                {resultText}
            {/if}
        </div>
    </div>
</div>



<style lang="css">
    .centered {
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, -20%);
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