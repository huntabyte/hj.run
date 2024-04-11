<script lang="ts">
	import { Header } from '$lib/components';
	export let data;

	const title = 'Uses';
	const description = 'The stuff I use on a regular basis.';
</script>

<Header {title} {description} />

<article class="markdown">
	<svelte:component this={data.component} />
</article>
