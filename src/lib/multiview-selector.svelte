<script lang="ts">
    import {multiview} from "$lib/multiview";

    function change(event: any) {
        multiview.set(event.target.checked);
    }
</script>

<label class="switch">
    <input type="checkbox" {multiview} on:change={(event) => change(event)} />
    <span class="slider">
		<div class="slider-icon" />
	</span>
</label>
