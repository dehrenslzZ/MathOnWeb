<script lang="ts">
	import type { Benulli } from '$src/typings/benulli';
	import { _ } from 'svelte-i18n';
	import Tooltip from '$lib/tooltip.svelte';
	export let input: Benulli;
</script>

<div class="benulli-input">
	<div class="benulli-input-container">
		<p>
			n:
			<Tooltip tooltip={$_('stochastics.benulli-calculator.tooltip.n')} />
		</p>
		<input type="number" class="ncr-input-field" bind:value={input.n} />
	</div>
	<div class="benulli-input-container">
		<p>
			p:
			<Tooltip tooltip={$_('stochastics.benulli-calculator.tooltip.p')} />
		</p>
		<input type="number" class="ncr-input-field" bind:value={input.p} />
	</div>
	<div class="benulli-input-container">
		<p>
			k:
			<Tooltip tooltip={$_('stochastics.benulli-calculator.tooltip.k')} />
		</p>
		<input type="number" class="ncr-input-field" bind:value={input.k} />
	</div>
</div>

<style lang="scss">
	@import '../../styles/benulli.scss';
</style>
