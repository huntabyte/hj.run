<script lang="ts">
	export let content: { title: string; slugFull: string; date: string }[];
</script>

<div class="flex items-center justify-center">
	<ul class="flex w-full max-w-xl flex-col gap-5">
		{#each content as { title, slugFull, date }}
			<li>
				<a class="flex w-full items-center gap-4 text-left font-medium md:gap-12" href={slugFull}>
					<span class="text-left font-medium">
						{title}
					</span>
					<span class="ml-auto w-[110px] shrink-0 border text-sm text-stone-600/85">
						<span class="sr-only">Published on:</span>
						{date}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
