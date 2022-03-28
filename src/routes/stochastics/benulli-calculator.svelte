<script lang="ts">
import { DefaultsProvider } from "$lib/defaults-provider";

import { calculateBenulliChain } from "$lib/stochastics/benulli";

import BenulliInput from "$lib/stochastics/benulli-input.svelte";
import type { Benulli } from "$src/typings/benulli";


    let benulliData: Benulli = new DefaultsProvider().getDefaultBenulliChain();

</script>

<div class="centered">
    <div class="container">
        <BenulliInput bind:input={benulliData} />
        <div class="result-form">
			{calculateBenulliChain(benulliData)}
		</div>
    </div>
</div>

<style lang="scss">
    @import "../../styles/general.scss";
</style>