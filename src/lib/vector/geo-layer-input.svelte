<script lang="ts">
	import { DefaultsProvider } from './../defaults-provider';
	import type { GeoLayerCoordinate, GeoLayerParameter } from './../../typings/geo-layer';
import VectorInput from "$lib/vector-input.svelte";
import { LayerConvertingService } from './layer-converting-service';

    export let type: string;
    export let geoLayerParameter: GeoLayerParameter;
    const converter = new LayerConvertingService();
    let coordinateCache = new DefaultsProvider().getGeoLayerCoordinateDefault();

    function onCoordinateFormChange(event: any, key: string) {
        const val = event.target.value;
        coordinateCache[key] = +val;
        geoLayerParameter = converter.fixNaNInfinity(converter.convertToParameter(coordinateCache));
    }
</script>

{#if type === "parameter"}
<div class="geo-layer">
    <VectorInput bind:vector={geoLayerParameter.startVector} />
    <div class="text">+r</div>
    <VectorInput bind:vector={geoLayerParameter.rVector} />
    <div class="text">+s</div>
    <VectorInput bind:vector={geoLayerParameter.sVector} />
</div>
{/if}
{#if type === "coordinate"}
<div class="geo-layer">
    <input 
        type="number" 
        value={coordinateCache.x}
        on:change={(event) => onCoordinateFormChange(event, 'x')}
    />
    <div class="text-sm">x + </div>
    <input 
        type="number" 
        value={coordinateCache.y}
        on:change={(event) => onCoordinateFormChange(event, 'y')}
    />
    <div class="text-sm">y + </div>
    <input 
        type="number" 
        value={coordinateCache.z}
        on:change={(event) => onCoordinateFormChange(event, 'z')}
    />
    <div class="text-sm">z = </div>
    <input 
        type="number" 
        value={coordinateCache.result}
        on:change={(event) => onCoordinateFormChange(event, 'result')}
    />
</div>
{/if}



<style lang="scss">
    @import "../../styles/geo-layer.scss";
</style>