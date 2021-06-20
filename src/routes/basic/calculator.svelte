<script lang="ts">
	import Navbar from '../../lib/navbar.svelte';
</script>

<Navbar />

<div class="centered">
	<div class="container">
		<input class="data-display" />
		<div class="button-row">
			<button class='extra-button'>C</button>
			<button class='extra-button'>ANS</button>
			<button class='extra-button'></button>
			<button class='extra-button'></button>
		</div>
		<div class="button-row">
			<button class='normal-button'>7</button>
			<button class='normal-button'>8</button>
			<button class='normal-button'>9</button>
			<button class='action-button'>/</button>
		</div>
		<div class="button-row">
			<button class='normal-button'>4</button>
			<button class='normal-button'>5</button>
			<button class='normal-button'>6</button>
			<button class='action-button'>*</button>
		</div>
		<div class="button-row">
			<button class='normal-button'>1</button>
			<button class='normal-button'>2</button>
			<button class='normal-button'>3</button>
			<button class='action-button'>-</button>
		</div>
		<div class="button-row">
			<button class='normal-button'>0</button>
			<button class='normal-button'>.</button>
			<button class='normal-button'>=</button>
			<button class='action-button'>+</button>
		</div>
	</div>
</div>

<style lang='scss'>
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
	height: 75px;
	outline: none;
	padding: 0;
	margin: 0;
		border-radius: 0;
		border: none;
	font-size: 2em;
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
  }
}
@include btnBase(normal-button, #313039);
@include btnBase(action-button, #dc5f11);
@include btnBase(extra-button, #9e9e9e);
</style>
