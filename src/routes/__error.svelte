<script>
	import { _ } from 'svelte-i18n';
</script>

<div class="centered">
	<div class="container">
		<div class="error-heading">404 Not Found</div>
		<div class="error-container">
			{$_('notFound')}
		</div>
	</div>
</div>

<style lang="scss">
	@import '../styles/general.scss';
	@import '../styles/error.scss';
</style>
