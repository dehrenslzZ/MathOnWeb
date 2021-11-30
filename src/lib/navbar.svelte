<script lang="ts">
	let navbarExtended = false;
</script>

<div class={`navbar ${navbarExtended ? 'extended' : ''}`}>
	<button class="navbar-toggler" on:click={() => {navbarExtended = !navbarExtended}}></button>
	<div class="navbar-menu">
		<a href="/">Home</a>
		<a href="/basic">Basic</a>
		<a href="/vector">Vector</a>
		<a href="/stochastics">Stochastics</a>
	</div>
</div>

<style lang="scss">
	@import "../styles/navbar.scss";
</style>
