<script lang="ts">
    import { faculty } from "$lib/custom-math";


    let input = 0;
    
</script>

<div class="centered">
    <div class="container">
        <input class="larger-input" type="number" bind:value={input} />
        <div class="result-form">
            {faculty(input)}
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../styles/general.scss";
</style>