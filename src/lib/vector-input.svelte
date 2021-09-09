<script lang="ts">
import type { Vector } from "src/typings/vector";
export let vector: Vector;
</script>

<div class="vector-flex">
    <input type="number" bind:value={vector.x} />
    <input type="number" bind:value={vector.y} />
    <input type="number" bind:value={vector.z} />
</div>

<style lang="css">
    .vector-flex {
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: fit-content;
        padding: 5px;
        gap: 3px;
    }
    .vector-flex input {
        width: 40px;
        height: 40px;
        border: none;
    
    }
</style>