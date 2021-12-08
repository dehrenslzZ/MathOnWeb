<script lang="ts">
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let counter = 0;
    let intervalStarted = false;
    
    function onClick() {
        if (counter > 100 && !intervalStarted) {
            setInterval(() => {
                document.getElementById("infinite-clicker").click();
            }, 50);
            intervalStarted = true;
        }
        x = getRandom(50, window.innerWidth - 100);
        y = getRandom(100, window.innerHeight - 100);
        counter = counter + 1;
    }

    function getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
</script>

<div class="infinite-clicker" style={`top: ${y}px; left: ${x}px;`} on:click={onClick} id="infinite-clicker" />

<style lang="scss">
    @import '../styles/infinite-clicker.scss';
</style>