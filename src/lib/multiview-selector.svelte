<script lang="ts">
	import { multiview } from '$lib/multiview';
	import Fa from 'svelte-fa';
	import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

	function change() {
		multiview.set(!$multiview);
	}
</script>

<button class={`multiview-button ${$multiview ? 'selected' : ''}`} on:click={change}>
	<Fa icon={faWindowRestore} />
</button>

<style lang="scss">
	@import '../styles/multiview.scss';
</style>
