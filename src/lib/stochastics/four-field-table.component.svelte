<script lang="ts">
    export let AB: number;
    export let aB: number;
    export let BA: number;
    export let ab: number;

    export let B_ALL: number;
    export let b_ALL: number;
    export let A_ALL: number;
    export let a_ALL: number;
    export let ALL: number;
</script>

<div class="field-table">
    <div class="table-element special" />
    <div class="table-element">A</div>
    <div class="table-element">a</div>
    <div class="table-element special" />

    <div class="table-element">B</div>
    <input class="table-element" bind:value={AB} />
    <input class="table-element" bind:value={aB} />
    <input class="table-element" bind:value={B_ALL} />

    <div class="table-element">b</div>
    <input class="table-element" bind:value={BA} />
    <input class="table-element" bind:value={ab} />
    <input class="table-element" bind:value={b_ALL} />

    <div class="table-element special" />
    <input class="table-element" bind:value={A_ALL} />
    <input class="table-element" bind:value={a_ALL} />
    <input class="table-element" bind:value={ALL} />

</div>

<style lang="scss">
    @import "../../styles/4-field-table.scss";
</style>

