<script lang="ts">
	import type { ListSelectorElement } from '../typings/ListSelectorElement';

	export let elements: ListSelectorElement[];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="container">
	{#each elements as element, _}
		<a class="list-element" href={element.route}>
			<h3>{element.name}</h3>
			<p>{element.description}</p>
		</a>
	{/each}
</div>

<style lang="css">
	.container {
		width: 100vw;
		height: 100vh;
		margin-top: 5em;
		overflow: hidden scroll;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 10px;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.container::-webkit-scrollbar {
		display: none;
	}
	.list-element {
		width: 80%;
		height: fit-content;
		display: grid;
		grid-template-columns: 30% 70%;
		background: #232228;
		text-align: center;
		text-decoration: none;
		color: white;
		border-radius: 10px;
		font-family: 'Roboto', sans-serif;
		transition: 0.3s;
	}
	.list-element:hover {
		filter: brightness(1.4);
	}
</style>
