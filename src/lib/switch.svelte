<script>
	export let checked;
	export let onChange;
	import Fa from 'svelte-fa';
	import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
</script>

<label class="switch">
	<input
		type="checkbox"
		{checked}
		on:change={(event) => onChange(event.target.value === 'true' ? 'dark' : 'light')}
	/>
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
