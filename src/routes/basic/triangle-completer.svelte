<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
    import AngleInput from '$lib/angle.svelte';
</script>

<Navbar />
<div class="center">
    <div class="triangle-container">
        <div class="outer-triangle">
            <input type="number" class="input-kath-left" />
            <input type="number" class="input-kath-bottom" />
            <div class="triangle">
                <div class="bottom-kath" />
                <div class="left-kath" />
                <div class="hypothenuse" />
            </div>
            <input type="number" class="input-hypothenuse" />
        </div>
    </div>
</div>


<style lang="scss">
    @import "../../styles/general.scss";
    @import "../../styles/triangle.scss";
</style>