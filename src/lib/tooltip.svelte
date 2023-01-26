<script lang="ts">
    import { theme } from './theme';
    export let tooltip: string;
    export let extraStyle = '';
    export let extraClasses = '';
    let mergedStyle = 'width: 15px; height: 15px;' + extraStyle;
</script>

{#if ($theme === 'light')}
    <img src="/information-light.png" alt="tooltip" style={mergedStyle} class={extraClasses} />
{/if}
{#if ($theme === 'dark')}
    <img src="/information-dark.png" alt="tooltip" style="width: 15px; height: 15px" />
{/if}
