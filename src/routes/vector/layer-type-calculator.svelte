<script lang="ts">
import Navbar from "$lib/navbar.svelte";
import GeoLayerInput from "$lib/vector/geo-layer-input.svelte";


</script>

<Navbar />
<div class="centered">
    <div class="container">
        <GeoLayerInput type="parameter" />
    </div>
</div>

<style>
    @import "../../styles/general.scss";
</style>