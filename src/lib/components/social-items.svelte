<script lang="ts">
	import { socials } from '$lib/config/socials';
</script>

<div class="flex items-center gap-1">
	{#each socials as social}
		<a
			href={social.href}
			target="_blank"
			class="inline-flex size-8 items-center justify-center text-stone-500 hover:text-stone-700"
		>
			<svelte:component this={social.icon} class={social.name === 'X' ? 'size-4' : 'size-5'} />
			<span class="sr-only">{social.name}</span>
		</a>
	{/each}
</div>
