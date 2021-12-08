<script lang="ts">
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    
    function onClick() {
        x = getRandom(50, window.innerWidth - 100);
        y = getRandom(100, window.innerHeight - 100);
    }

    function getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
</script>

<div class="infinite-clicker" style={`top: ${y}px; left: ${x}px;`} on:click={onClick} />

<style lang="scss">
    @import '../styles/infinite-clicker.scss';
</style>