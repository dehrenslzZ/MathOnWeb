<script lang="ts">
	import type { GeoLayerParameter } from './../../typings/geo-layer';
import Navbar from "$lib/navbar.svelte";
import GeoLayerInput from "$lib/vector/geo-layer-input.svelte";
import { DefaultsProvider } from '$lib/defaults-provider';

let geoLayerParameter: GeoLayerParameter = new DefaultsProvider().getGeoLayerParameterDefault();

</script>

<Navbar />
<div class="centered">
    <div class="container">
        <GeoLayerInput type="parameter" bind:geoLayerParameter={geoLayerParameter} />
        <GeoLayerInput type="coordinate" bind:geoLayerParameter={geoLayerParameter} />
    </div>
</div>

<style>
    @import "../../styles/general.scss";
</style>