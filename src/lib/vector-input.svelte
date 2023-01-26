<script lang="ts">
	import type { Vector } from 'src/typings/vector';
	import Tooltip from '$lib/tooltip.svelte';
	export let vector: Vector;
</script>

<div class="vector-container">
	<Tooltip tooltip="Vector" />
	<div class="vector-symbols">(</div>
	<div class="vector-flex">
		<input type="number" bind:value={vector.x} />
		<input type="number" bind:value={vector.y} />
		<input type="number" bind:value={vector.z} />
	</div>
	<div class="vector-symbols">)</div>
</div>

<style lang="scss">
	@import '../styles/vector-input.scss';
</style>
