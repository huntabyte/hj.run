<script lang="ts">
	import { Header } from '$lib/components';

	export let data;
</script>

<Header
	title="Finds"
	description="Things I find surfing the web that I want to share with the world."
/>
<div class="flex items-center justify-center">
	<ul class="flex flex-col gap-5">
		{#each data.finds as find}
			<li class="flex w-full max-w-2xl items-start gap-4 md:gap-12">
				<span class="shrink-0 text-base text-stone-950">{find.date}</span>
				<a class="text-left font-medium" href={find.slugFull}>
					{find.title}
				</a>
			</li>
		{/each}
	</ul>
</div>
