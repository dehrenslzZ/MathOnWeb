<div class="centered">
	<div class="container">
		<h1>MathOnWeb</h1>
		<p>
			MathOnWeb is an open source web application that executes complex math operations. Therefore
			it must be very fast to provide an acceptable user experience. This is the reason why it does
			not use a virtualDOM like React. It uses the default DOM of ES6, supported by the most modern
			browsers natively. It does not use any type of virtualization. Furthermore it uses Typescript,
			which is typesafe and has some performance improvements. I would appreciate it, if you
			suppport this project on
			<a href="https://github.com/MathisBurger/MathOnWeb">Github</a>
		</p>
	</div>
</div>

<style lang="css">
	.centered {
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, -20%);
	}
	.container {
		width: 60vw;
		height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
	.container h1 {
		color: white;
		font-family: 'Roboto', sans-serif;
		font-size: 2em;
	}
	.container p {
		color: white;
		font-family: 'Roboto', sans-serif;
		text-overflow: clip;
		font-size: 1.2em;
	}
</style>
