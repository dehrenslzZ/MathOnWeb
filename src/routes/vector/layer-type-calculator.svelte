<script lang="ts">
	import type { GeoLayerParameter } from './../../typings/geo-layer';
import Navbar from "$lib/navbar.svelte";
import GeoLayerInput from "$lib/vector/geo-layer-input.svelte";

let geoLayerParameter: GeoLayerParameter;

</script>

<Navbar />
<div class="centered">
    <div class="container">
        <GeoLayerInput type="parameter" geoLayerParameter={geoLayerParameter} />
    </div>
</div>

<style>
    @import "../../styles/general.scss";
</style>