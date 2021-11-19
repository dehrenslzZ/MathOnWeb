<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
</script>

<Navbar />
<div class="center">
    <div class="triangle-container">
        <div class="outer-triangle">
            <div class="triangle">
                <div class="bottom-kath" />
                <div class="left-kath" />
                <div class="hypothenuse" />
            </div>
        </div>
    </div>
</div>


<style lang="scss">
    @import "../../styles/general.scss";
    @import "../../styles/triangle.scss";
</style>