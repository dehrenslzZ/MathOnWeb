<script lang="ts">
	import { theme } from './theme';
	import Switch from './switch.svelte';

	function onChange(value: string) {
		theme.set(value);
	}
</script>

<Switch checked={$theme === 'dark'} {onChange} />

<style lang="scss">
	@import '../styles/general.scss';
</style>
