<script lang="ts">
	import { Header } from '$lib/components/index.js';

	export let data;
</script>

<Header title="Notes" description="Useful bits of information I've collected over time." />
<div class="flex items-center justify-center">
	<ul class="flex flex-col gap-5">
		{#each data.notes as note}
			<li class="flex w-full max-w-2xl items-start gap-12">
				<span class=" shrink-0 text-stone-950">{note.date}</span>
				<a class="text-left font-medium" href={note.slugFull}>
					{note.title}
				</a>
			</li>
		{/each}
	</ul>
</div>
