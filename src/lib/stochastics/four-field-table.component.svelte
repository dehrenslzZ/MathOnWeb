<script lang="ts">
import type { FourFieldTableValues } from "$src/typings/four-field-table";


    export let table: FourFieldTableValues;
</script>

<div class="field-table">
    <div class="table-element special" />
    <div class="table-element">A</div>
    <div class="table-element">a</div>
    <div class="table-element special" />

    <div class="table-element">B</div>
    <input class="table-element" bind:value={table.AB} />
    <input class="table-element" bind:value={table.aB} />
    <input class="table-element" bind:value={table.B_ALL} />

    <div class="table-element">b</div>
    <input class="table-element" bind:value={table.BA} />
    <input class="table-element" bind:value={table.ab} />
    <input class="table-element" bind:value={table.b_ALL} />

    <div class="table-element special" />
    <input class="table-element" bind:value={table.A_ALL} />
    <input class="table-element" bind:value={table.a_ALL} />
    <input class="table-element" bind:value={table.ALL} />

</div>

<style lang="scss">
    @import "../../styles/4-field-table.scss";
</style>

