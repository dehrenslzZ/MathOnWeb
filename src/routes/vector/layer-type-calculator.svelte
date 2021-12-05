<script lang="ts">
	import type { GeoLayerParameter } from './../../typings/geo-layer';
	import GeoLayerInput from '$lib/vector/geo-layer-input.svelte';
	import { DefaultsProvider } from '$lib/defaults-provider';

	let geoLayerParameter: GeoLayerParameter = new DefaultsProvider().getGeoLayerParameterDefault();
</script>

<div class="centered">
	<div class="container">
		<GeoLayerInput type="parameter" bind:geoLayerParameter />
		<GeoLayerInput type="coordinate" bind:geoLayerParameter />
	</div>
</div>

<style>
	@import '../../styles/general.scss';

	@media only screen and (max-height: 1100px) and (min-height: 900px) {
		.container {
			margin-top: 30%;
			transform: scale(1.7) !important;
		}
	}
	@media only screen and (max-width: 680px) {
		.container {
			transform: scale(0.7) !important;
		}
	}
</style>
