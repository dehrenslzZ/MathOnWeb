<script lang="ts">
	export let checked;
	export let onChange;
	import Fa from 'svelte-fa';
	import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

	function change(event: any) {
		onChange(event.target.checked === true ? 'dark' : 'light');
	}
</script>

<label class="switch">
	<input type="checkbox" {checked} on:change={(event) => change(event)} />
	<span class="slider">
		<div class="slider-icon">
			{#if checked}
				<Fa icon={faMoon} />
			{/if}
			{#if !checked}
				<Fa icon={faSun} />
			{/if}
		</div>
	</span>
</label>

<style lang="scss">
	@import '../styles/switch.scss';
</style>
