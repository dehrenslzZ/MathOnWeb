<script lang="ts">
	import Snackbar from '$lib/snackbar.svelte';
	import FourFieldTable from '$lib/stochastics/four-field-table.component.svelte';
	import Navbar from '$lib/navbar.svelte';
	import type { FourFieldTableValues } from '$src/typings/four-field-table';
	import { CompleteTable } from '$lib/stochastics/complete-table';

	let table: FourFieldTableValues = {
		AB: null,
		aB: null,
		BA: null,
		ab: null,
		A_ALL: null,
		a_ALL: null,
		B_ALL: null,
		b_ALL: null,
		ALL: null
	};

	// Is being executed after the calculate button was clicked
	function onClick() {
		const [newTable, error] = CompleteTable(table);
		if (error.errorOccurred) {
			showSnackbar = true;
			errorSnackbar = error.message;
			setTimeout(() => {
				showSnackbar = false;
				errorSnackbar = '';
			}, 2000);
		} else {
			table = newTable;
		}
	}

	let showSnackbar = false;
	let errorSnackbar = '';
</script>

<Navbar />

<div class="centered">
	<div class="container">
		<FourFieldTable bind:table />
		<button class="calculate-button" on:click={onClick}> Complete table </button>
	</div>
</div>
{#if showSnackbar}
	<Snackbar message={errorSnackbar} />
{/if}

<style lang="scss">
	@import '../../styles/general.scss';
</style>
