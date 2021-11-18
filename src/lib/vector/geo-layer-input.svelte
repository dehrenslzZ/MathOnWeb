<script lang="ts">
	import type { GeoLayerParameter } from './../../typings/geo-layer';
import VectorInput from "$lib/vector-input.svelte";
import { LayerConvertingService } from './layer-converting-service';

    export let type: string;
    export let geoLayerParameter: GeoLayerParameter;
    const converter = new LayerConvertingService();

    function onCoordinateFormChange(event: any, key: string) {
        const val = event.target.value;
        let coordinate = converter.convertToCoordinate(geoLayerParameter);
        coordinate[key] = +val;
        geoLayerParameter = converter.convertToParameter(coordinate);
        console.log(geoLayerParameter);
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
        value={converter.convertToCoordinate(geoLayerParameter).x}
        on:change={(event) => onCoordinateFormChange(event, 'x')}
    />
    <div class="text-sm">x + </div>
    <input 
        type="number" 
        value={converter.convertToCoordinate(geoLayerParameter).y}
        on:change={(event) => onCoordinateFormChange(event, 'y')}
    />
    <div class="text-sm">y + </div>
    <input 
        type="number" 
        value={converter.convertToCoordinate(geoLayerParameter).z}
        on:change={(event) => onCoordinateFormChange(event, 'z')}
    />
    <div class="text-sm">z = </div>
    <input 
        type="number" 
        value={converter.convertToCoordinate(geoLayerParameter).result}
        on:change={(event) => onCoordinateFormChange(event, 'result')}
    />
</div>
{/if}



<style lang="scss">
    @import "../../styles/geo-layer.scss";
</style>