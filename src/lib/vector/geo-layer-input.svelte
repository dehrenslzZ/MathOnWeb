<script lang="ts">
	import type { GeoLayerParameter } from './../../typings/geo-layer';
import VectorInput from "$lib/vector-input.svelte";

    export let type: string;
    export let geoLayerParameter: GeoLayerParameter;
</script>

{#if type === "parameter"}
<div class="parameter-layer">
    <VectorInput bind:vector={geoLayerParameter.startVector} />
    <VectorInput bind:vector={geoLayerParameter.rVector} />
    <VectorInput bind:vector={geoLayerParameter.sVector} />
</div>
{/if}



<style lang="scss">
    @import "../../styles/geo-layer.scss";
</style>