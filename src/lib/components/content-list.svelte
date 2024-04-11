<script lang="ts">
	export let content: { title: string; slugFull: string; date: string }[];
</script>

<div class="flex items-center justify-center">
	<ul class="flex w-full max-w-xl flex-col gap-5">
		{#each content as { title, slugFull, date }}
			<li class="flex w-full items-center gap-4 md:gap-12">
				<a class="text-left font-medium" href={slugFull}>
					{title}
				</a>
				<span class="ml-auto w-[110px] shrink-0 border text-sm text-stone-600/85">{date}</span>
			</li>
		{/each}
	</ul>
</div>
