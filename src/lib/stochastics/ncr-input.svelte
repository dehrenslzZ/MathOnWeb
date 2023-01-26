<script lang="ts">
	import type { NCR } from '$src/typings/ncr';
	import Tooltip from '$lib/tooltip.svelte';
	export let bindValue: NCR;
	export let tooltip: string | null = null;
</script>

<div class="ncr-outer-wrapper">
	{#if tooltip !== null}
		<Tooltip {tooltip} />
	{/if}
	<div class="ncr-input-symbols">(</div>
	<div class="ncr-input">
		<input type="number" class="ncr-input-field" bind:value={bindValue.n} />
		<input type="number" class="ncr-input-field" bind:value={bindValue.k} />
	</div>
	<div class="ncr-input-symbols">)</div>
</div>

<style lang="scss">
	@import '../../styles/ncr.scss';
</style>
