<script lang="ts">
    import Navbar from "../../lib/navbar.svelte";
</script>

<Navbar />

<div class="centered">
    <div class='container'>
        <input class='data-display'>
        <div class='button-row'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    </div>
</div>

<style>
.centered {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.container {
    width: 30vw;
    height: 50vh;
}
.data-display {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    outline: none;
}
.button-row {
    width: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 25%);
}
.button-row button {
    width: 95%;
    aspect-ratio: 1/1;
}
</style>
