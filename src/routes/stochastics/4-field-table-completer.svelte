<script lang="ts">
	import Snackbar from '$lib/snackbar.svelte';
	import FourFieldTable from '$lib/stochastics/four-field-table.component.svelte';
	import type { FourFieldTableValues } from '$src/typings/four-field-table';
	import { CompleteTable } from '$lib/stochastics/complete-table';
import { _ } from 'svelte-i18n';

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

<div class="centered">
	<div class="container">
		<FourFieldTable bind:table />
		<button class="calculate-button" on:click={onClick}>{$_('stochastics.4-field-table.button-text')}</button>
	</div>
</div>
{#if showSnackbar}
	<Snackbar message={errorSnackbar} />
{/if}

<style lang="scss">
	@import '../../styles/general.scss';
	@media only screen and (max-height: 1100px) and (min-height: 900px) {
		.calculate-button {
			margin-top: 4em;
		}
	}
</style>
