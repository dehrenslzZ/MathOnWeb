<script lang="ts">
    import {multiview} from "$lib/multiview";
    import Navbar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';

    let isIframe = window.self !== window.top;
    let localUrl = window.location.href;
    let height = window.outerHeight;
    let width = window.outerWidth / 100 * 49;
</script>

<div class="multiview-container">
    {#if (isIframe || !$multiview)}
        <div style="width: 100vw !important; height: 100vh !important; position: absolute; left: 0">
            <Navbar />
            <slot />
            <Footer />
        </div>
    {:else }
        <div style="width: 49vw !important; height: 100vh !important; position: absolute; left: 0; top: 0">
            <Navbar />
            <div style="width: 49vw !important; height: 100vh !important;">
                <slot />
            </div>
            <Footer />
        </div>
    {/if}
    {#if ($multiview && !isIframe)}>
        <div style="width: 49vw !important; height: 100vh !important; position: absolute; right: 0; top: 0">
            <iframe src={localUrl} width={width} height={height} />
        </div>
    {/if}
</div>



<style lang="scss">
  @import '../styles/navbar.scss';
</style>
