<script lang="ts">
	import type { NCR } from './../../typings/ncr.d';
	import { DefaultsProvider } from '$lib/defaults-provider';
	import NcrInput from '$lib/stochastics/ncr-input.svelte';
	import { calculateNCr } from '$lib/stochastics/ncr-calculator';

	let input: NCR = new DefaultsProvider().getDefaultNCR();
</script>

<div class="centered">
	<div class="container">
		<NcrInput bind:bindValue={input} />

		<div class="result-form">
			{calculateNCr(input)}
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../styles/general.scss';
</style>
