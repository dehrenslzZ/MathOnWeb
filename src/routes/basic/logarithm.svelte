<script lang="ts">
    let input = 0;
</script>

<div class="centered">
    <div class="container">
        <input class="larger-input" type="number" bind:value={input} />
        <div class="result-form">
            {Math.log(input)}
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../styles/general.scss";
</style>