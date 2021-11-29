<script lang="ts">
    import Navbar from "$lib/navbar.svelte";
    import solveFunction from "$lib/solve-function";

    let func: string = "";

    function solve() {
        const [result, err] = solveFunction(func, 4);
        console.log(result);
    }
</script>

<Navbar />
<div class="centered">
    <div class="container">
        <div class="function-flex">
            <p>f(x)=</p>
            <input class="function-input" bind:value={func} />
        </div>
        <button class="calculate-button" on:click={solve}>
            Solve
        </button>
    </div>
</div>

<style lang="scss">
    @import "../../styles/general.scss";
    @import "../../styles/function-solver.scss";
</style>