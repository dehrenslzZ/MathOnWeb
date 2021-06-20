<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
</svelte:head>

<script lang="ts">

	export let elements: any;

</script>

<div class='container'>
	{#each elements as element, _}
		<a class='list-element' href={element.route}>
			<h3>{element.name}</h3>
			<p>{element.description}</p>
		</a>
	{/each}
</div>

<style lang='scss'>
	.container {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -30%);
		width: 70vw;
		height: 60vh;
		overflow: hidden scroll;
		display: flex;
		flex-direction: column;
		-ms-overflow-style: none;
    scrollbar-width: none;
	}
	.container::-webkit-scrollbar {
		display: none;
	}
	.list-element {
		width: 100%;
		height: fit-content;
		display: grid;
		grid-template-columns: 30% 70%;
		background: #232228;
		text-align: center;
		text-decoration: none;
		color: white;
		border-radius: 10px;
		font-family: "Roboto", sans-serif;
		transition: .3s;
	}
	.list-element:hover {
		filter: brightness(1.4);
	}
</style>

