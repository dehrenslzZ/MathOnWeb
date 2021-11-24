<script lang="ts">
	import { DefaultsProvider } from '$lib/defaults-provider';
	import Navbar from '$lib/navbar.svelte';
	import solveTriangle from '$lib/triangle-calculator';
	let triangle = new DefaultsProvider().getDefaultTriangle();

	function onChange(event: any, field: string) {
		let copy_triangle = Object.assign({}, triangle);
		copy_triangle[field] = +event.target.value;
		triangle = solveTriangle(copy_triangle);
	}
</script>

<Navbar />
<div class="center">
	<div class="triangle-container">
		<div class="outer-triangle">
			<input
				type="number"
				class="input-kath-left"
				on:change={(event) => onChange(event, 'kathete1')}
				value={triangle.kathete1}
			/>
			<input
				type="number"
				class="input-kath-bottom"
				on:change={(event) => onChange(event, 'kathete2')}
				value={triangle.kathete2}
			/>
			<div class="triangle">
				<div class="bottom-kath" />
				<div class="left-kath" />
				<div class="hypothenuse" />
			</div>
			<input
				type="number"
				class="input-hypothenuse"
				on:change={(event) => onChange(event, 'hypothenuse')}
				value={triangle.hypothenuse}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../styles/general.scss';
	@import '../../styles/triangle.scss';
</style>
