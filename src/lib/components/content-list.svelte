<script lang="ts">
	export let content: { title: string; slugFull: string; date: string }[];
</script>

<div class="flex items-center justify-center">
	<ul class="flex flex-col gap-5">
		{#each content as { title, slugFull, date }}
			<li class="flex w-full items-start gap-4 md:gap-12">
				<span class="w-[110px] shrink-0 border text-base text-stone-950">{date}</span>
				<a class="text-left font-medium" href={slugFull}>
					{title}
				</a>
			</li>
		{/each}
	</ul>
</div>
