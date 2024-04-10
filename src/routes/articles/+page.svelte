<script lang="ts">
	import { Header } from '$lib/components';

	export let data;
</script>

<Header title="Articles" description="A collection of the articles I've written." />
<div class="flex items-center justify-center">
	<ul class="flex flex-col gap-5">
		{#each data.articles as article}
			<li class="flex w-full max-w-2xl items-start gap-4 md:gap-12">
				<span class="shrink-0 text-base text-stone-950">{article.date}</span>
				<a class="text-left font-medium" href={article.slugFull}>
					{article.title}
				</a>
			</li>
		{/each}
	</ul>
</div>
