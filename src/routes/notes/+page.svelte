<script lang="ts">
	export let data;
</script>

<div class="mx-auto mb-12 w-full text-center">
	<h1 class="text-3xl font-medium">Notes</h1>
	<p class="mt-3 text-xl text-stone-600">Useful bits of information I've collected over time.</p>
</div>
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
