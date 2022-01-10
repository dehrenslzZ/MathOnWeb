<script lang="ts">
	import type { NCR } from '$src/typings/ncr';
	export let bindValue: NCR;
</script>

<div class="ncr-outer-wrapper">
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
