<script context="module">
	export { pre, img, a } from './index.js';
</script>

<script lang="ts">
	export let title = '';
	export let description = '';
</script>

<slot {title} {description} />
