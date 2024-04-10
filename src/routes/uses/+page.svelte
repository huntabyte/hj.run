<script lang="ts">
	import { Header } from '$lib/components';
	export let data;
</script>

<Header title="Uses" description="The hardware & software I use on a regular basis" />

<article class="markdown">
	<svelte:component this={data.component} />
</article>
