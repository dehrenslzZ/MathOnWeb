<script lang="ts">
	import Navbar from '../../lib/navbar.svelte';

	let inputString = '0';
	let lastResult = '0';

	// This function adds a new Letter/char
	// to the math operation
	function addLetter(char: string): void {
		if (inputString === '0') {
			inputString = char;
		} else {
			inputString += char;
		}
	}

	// This function solves the math
	// operation in the input
	function solve() {
		try {
			inputString = eval(inputString);
			lastResult = inputString;
		} catch (e) {
			inputString = 'ERROR';
		}
	}

	// This function clears the input
	// of the math operation
	function clear() {
		inputString = '0';
	}

	// This function adds the last math
	// operation result to the inputString
	function ans() {
		if (inputString === '0') {
			inputString = lastResult;
		} else {
			inputString += lastResult;
		}
	}

	// This function checks, if the Enter key
	// is pressed and then solves the math operation
	// in the input.
	function KeydownEnter(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			solve();
		}
	}

	// This function removes the last char
	// of the inputString and acts like a
	// backspace key.
	function back() {
		let newStr = inputString.slice(0, -1);
		if (newStr === '') {
			inputString = '0';
		} else {
			inputString = newStr;
		}
	}
</script>

<Navbar />

<div class="centered">
	<div class="container">
		<input class="data-display" bind:value={inputString} on:keydown={(e) => KeydownEnter(e)} />

		<div class="button-row">
			<button class="extra-button" on:click={() => clear()}>C</button>
			<button class="extra-button" on:click={() => ans()}>ANS</button>
			<button class="extra-button" on:click={() => back()}>BCK</button>
			<button class="extra-button" />
		</div>
		<div class="button-row">
			<button class="normal-button" on:click={() => addLetter('7')}>7</button>
			<button class="normal-button" on:click={() => addLetter('8')}>8</button>
			<button class="normal-button" on:click={() => addLetter('9')}>9</button>
			<button class="action-button" on:click={() => addLetter('/')}>/</button>
		</div>
		<div class="button-row">
			<button class="normal-button" on:click={() => addLetter('4')}>4</button>
			<button class="normal-button" on:click={() => addLetter('5')}>5</button>
			<button class="normal-button" on:click={() => addLetter('6')}>6</button>
			<button class="action-button" on:click={() => addLetter('*')}>*</button>
		</div>
		<div class="button-row">
			<button class="normal-button" on:click={() => addLetter('1')}>1</button>
			<button class="normal-button" on:click={() => addLetter('2')}>2</button>
			<button class="normal-button" on:click={() => addLetter('3')}>3</button>
			<button class="action-button" on:click={() => addLetter('-')}>-</button>
		</div>
		<div class="button-row">
			<button class="normal-button" on:click={() => addLetter('0')}>0</button>
			<button class="normal-button" on:click={() => addLetter('.')}>.</button>
			<button class="normal-button" on:click={() => solve()}>=</button>
			<button class="action-button" on:click={() => addLetter('+')}>+</button>
		</div>
	</div>
</div>

<style lang="scss">
	.centered {
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, -20%);
	}
	.container {
		width: 30vw;
		height: 50vh;
	}
	.data-display {
		width: 100%;
		height: 100px;
		outline: none;
		padding: 0;
		margin: 0;
		border-radius: 0;
		border: none;
		font-size: 3em;
	}
	.button-row {
		width: 100%;
		display: grid;
		place-items: center;
		grid-template-columns: repeat(4, 25%);
	}

	@mixin btnBase($name, $background) {
		.#{$name} {
			width: 100%;
			aspect-ratio: 1/1;
			font-size: x-large;
			font-weight: bold;
			color: white;
			background: $background;
			border: 1px solid black;
			transition: 0.3s;
		}

		.#{$name}:hover {
			filter: brightness(1.4);
		}
	}
	@include btnBase(normal-button, #313039);
	@include btnBase(action-button, #dc5f11);
	@include btnBase(extra-button, #9e9e9e);

	@media only screen and (max-width: 820px) {
		.centered {
			top: 50%;
			transform: translate(-50%, -50%);
		}
		.container {
			width: 95vw;
			height: 70vh;
		}
		.data-display {
			height: 75px;
		}
	}
</style>
