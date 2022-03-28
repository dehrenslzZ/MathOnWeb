<script lang="ts">
	import type { Benulli } from '$src/typings/benulli';
	export let input: Benulli;
</script>

<div class="benulli-input">
	<div class="benulli-input-container">
		<p>n:</p>
		<input type="number" class="ncr-input-field" bind:value={input.n} />
	</div>
	<div class="benulli-input-container">
		<p>p:</p>
		<input type="number" class="ncr-input-field" bind:value={input.p} />
	</div>
	<div class="benulli-input-container">
		<p>k:</p>
		<input type="number" class="ncr-input-field" bind:value={input.k} />
	</div>
</div>

<style lang="scss">
	@import '../../styles/benulli.scss';
</style>
