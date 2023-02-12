<script lang="ts">
	import { theme } from './theme';
	export let tooltip: string;
</script>

{#if $theme === 'light'}
	<div class="tooltip">
		<img src="/information-light.png" alt="tooltip" style="width: 15px; height: 15px" />
		<span class="tooltiptext">{tooltip}</span>
	</div>
{/if}
{#if $theme === 'dark'}
	<div class="tooltip">
		<img src="/information-dark.png" alt="tooltip" style="width: 15px; height: 15px" />
		<span class="tooltiptext">{tooltip}</span>
	</div>
{/if}

<style lang="scss">
	@import '../styles/tooltip.scss';
</style>
