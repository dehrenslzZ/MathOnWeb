<script lang="ts">
    import Navbar from "../../lib/navbar.svelte";
</script>

<Navbar />

<div class="centered">
    <table>
        <tr><td><input /></td></tr>
    </table>
</div>

<style>
    .centered {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>