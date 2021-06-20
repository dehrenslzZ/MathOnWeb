<script lang="ts">
	import Navbar from '../../lib/navbar.svelte';
	import ListSelector from '../../lib/listSelector.svelte';

	let apps = [
		{name: "Calculator", description: "A basic calculator", route: "/basic/calculator"}
	];
</script>

<Navbar />

<ListSelector elements={apps}/>


