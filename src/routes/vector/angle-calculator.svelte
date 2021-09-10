<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<script lang="ts">
    import Navbar from '$lib/navbar.svelte';
    import VectorInput from '$lib/vector-input.svelte';
    import type {Vector} from '../../typings/vector';
    import calculateAngleFromVectors from "$lib/vector/angle-calculator";

    let resultValue = "";
    let vectorA: Vector = {x: 0, y: 0, z: 0};
    let vectorB: Vector = {x: 0, y: 0, z: 0};

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

<Navbar />
<div class="centered">
    <div class="container">
        <div class="vector-inline">
            <VectorInput vector={vectorA} />
            <VectorInput vector={vectorB} />
        </div>
        <button class="calculate-button" on:click={() => calculateAngle(vectorA, vectorB)}>calculate</button>
        <div class="result-form">
            {#if resultValue != ""}
                The angle is {resultValue}°
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