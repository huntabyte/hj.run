<script lang="ts">
	export let data;
</script>

<article class="markdown">
	<h1 class="!mb-0 !text-3xl">{data.title}</h1>
	<span class="!mt-0 mb-4 text-sm text-stone-600/85">{data.metadata.date}</span>
	<svelte:component this={data.component} />
</article>
