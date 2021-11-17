<script lang="ts">
	import FourFieldTable from '$lib/stochastics/four-field-table.component.svelte';
    import Navbar from '$lib/navbar.svelte';
</script>


<Navbar />

<div class="centered">
    <div class="container">
        <FourFieldTable 
            AB={0}
            aB={0}
            BA={0}
            ab={0}
            B_ALL={0}
            b_ALL={0}
            A_ALL={0}
            a_ALL={0}
            ALL={0}
        />
    </div>
</div>

<style lang="scss">
    @import "../../styles/general.scss";
</style>