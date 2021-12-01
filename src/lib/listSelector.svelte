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

<div class="content-container">
	{#each elements as element, _}
		<a class="list-element" href={element.route}>
			<h3>{element.name}</h3>
			<p>{element.description}</p>
		</a>
	{/each}
</div>

<style lang="css">
	@import "../styles/list-selector.scss";
</style>
