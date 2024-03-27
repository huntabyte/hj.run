<script lang="ts">
	export let data;
</script>

<article class="prose prose-invert md:prose-lg prose-headings:font-medium prose-h1:text-4xl">
	<svelte:component this={data.component} />
</article>
