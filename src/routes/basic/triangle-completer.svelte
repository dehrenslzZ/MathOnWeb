<script lang="ts">
	import { DefaultsProvider } from '$lib/defaults-provider';
	import Navbar from '$lib/navbar.svelte';
import Snackbar from '$lib/snackbar.svelte';
	import solveTriangle from '$lib/triangle-calculator';
	let triangle = new DefaultsProvider().getDefaultTriangle();
	let showSnackbar = false;
	let errorSnackbar = '';

	function onChange(event: any, field: string) {
		let copy_triangle = Object.assign({}, triangle);
		if (field === 'beta' || field === 'gamma') {
			copy_triangle[field] = (+event.target.value) * Math.PI / 180;
		} else {
			copy_triangle[field] = +event.target.value;
		}
		triangle = copy_triangle;
	}

	function solve() {
		const [resp_triangle, err] = solveTriangle(triangle);
		if (err.errorOccurred) {
			errorSnackbar = err.message;
			showSnackbar = true;
			setTimeout(() => {
				showSnackbar = false;
				errorSnackbar = '';
			}, 2000);
		} else {
			triangle = resp_triangle;
		}
	}
</script>

<Navbar />
{#if showSnackbar}
	<Snackbar message={errorSnackbar} />
{/if}
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
		<div class="input-container">
			<div class="input-flex">
				<input class="triangle-input" value="90" disabled />
				<p>Alpha angle</p>
			</div>
			<div class="input-flex">
				<input class="triangle-input" on:change={(event) => onChange(event, 'beta')} value={triangle.beta * 180 / Math.PI} />
				<p>Beta angle</p>
			</div>
			<div class="input-flex">
				<input class="triangle-input" on:change={(event) => onChange(event, 'gamma')} value={triangle.gamma * 180 / Math.PI} />
				<p>Gamma angle</p>
			</div>
		</div>
		<button class="calculate-button" on:click={solve}>Solve</button>
	</div>
</div>

<style lang="scss">
	@import '../../styles/general.scss';
	@import '../../styles/triangle.scss';
</style>
