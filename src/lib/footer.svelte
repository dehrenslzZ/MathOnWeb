<script lang="ts">
	import {multiview} from "$lib/multiview";

	let isIframe = window.self !== window.top;
	let shouldShrink = !isIframe && $multiview;
</script>

<div class="footer" style={shouldShrink ? 'width: 49vw !important' : undefined}>
	<div class="footer-copyright">©{new Date().getFullYear()} Mathis Burger</div>
</div>

<style lang="scss">
	@import '../styles/footer.scss';
</style>
