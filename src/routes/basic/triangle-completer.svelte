<script lang="ts">
	import { DefaultsProvider } from '$lib/defaults-provider';
	import Snackbar from '$lib/snackbar.svelte';
	import solveTriangle from '$lib/triangle-calculator';
	import {_} from 'svelte-i18n';
	let triangle = new DefaultsProvider().getDefaultTriangle();
	let showSnackbar = false;
	let errorSnackbar = '';

	function onChange(event: any, field: string) {
		let copy_triangle = Object.assign({}, triangle);
		if (field === 'beta' || field === 'gamma') {
			copy_triangle[field] = (+event.target.value * Math.PI) / 180;
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

	function parseAngle(angle: number): number {
		angle = (angle * 180) / Math.PI;
		if (angle < 0) {
			return 180 - angle * -1;
		}
		return angle;
	}
</script>

{#if showSnackbar}
	<Snackbar message={errorSnackbar} />
{/if}
<div class="centered">
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
				<p>{$_('basic.triangle-completer.alpha-angle')}</p>
			</div>
			<div class="input-flex">
				<input
					class="triangle-input"
					on:change={(event) => onChange(event, 'beta')}
					value={parseAngle(triangle.beta)}
				/>
				<p>{$_('basic.triangle-completer.beta-angle')}</p>
			</div>
			<div class="input-flex">
				<input
					class="triangle-input"
					on:change={(event) => onChange(event, 'gamma')}
					value={parseAngle(triangle.gamma)}
				/>
				<p>{$_('basic.triangle-completer.gamma-angle')}</p>
			</div>
		</div>
		<button class="calculate-button" on:click={solve}>{$_('general.calculate')}</button>
	</div>
</div>

<style lang="scss">
	@import '../../styles/general.scss';
	@import '../../styles/triangle.scss';
</style>
