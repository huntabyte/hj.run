<script lang="ts">
	export let data;
</script>

<div class="mx-auto mb-12 w-full text-center">
	<h1 class="text-3xl font-medium">Articles</h1>
	<p class="mt-3 text-xl text-stone-600">A collection of the articles I've written.</p>
</div>
<div class="flex items-center justify-center">
	<ul class="flex flex-col gap-5">
		{#each data.articles as article}
			<li class="flex w-full max-w-2xl items-start gap-12">
				<span class=" shrink-0 text-stone-950">{article.date}</span>
				<a class="text-left font-medium" href={article.slugFull}>
					{article.title}
				</a>
			</li>
		{/each}
	</ul>
</div>
