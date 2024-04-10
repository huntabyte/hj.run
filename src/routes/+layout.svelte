<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { dev } from '$app/environment';
	import * as Icon from '$lib/icons/index.js';
	import '$lib/styles/app.pcss';
	import '$lib/styles/markdown.pcss';

	type Social = {
		name: string;
		href: string;
		icon: ComponentType;
	};

	const socials: Social[] = [
		{
			name: 'GitHub',
			href: 'https://github.com/huntabyte',
			icon: Icon.GitHub
		},
		{
			name: 'X',
			href: 'https://x.com/huntabyte',
			icon: Icon.X
		},
		{
			name: 'YouTube',
			href: 'https://youtube.com/@huntabyte',
			icon: Icon.YouTube
		}
	];

	const navigation = [
		{ name: 'Articles', href: '/articles' },
		{ name: 'Notes', href: '/notes' },
		{ name: 'Uses', href: '/uses' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<div class="mx-auto flex min-h-screen flex-col px-4 md:px-0">
	<nav class="flex items-center justify-between">
		<a href="/" class="py-6 text-xl font-bold"> HJ </a>
		<div class="flex items-center gap-5 text-sm uppercase tracking-wide">
			{#if dev}
				{#each navigation as navItem}
					<a href={navItem.href} class="font-semibold text-stone-950">{navItem.name}</a>
				{/each}
			{/if}
		</div>
	</nav>
	<main class="py-10">
		<slot />
	</main>
	<footer class="mx-auto mt-auto flex w-full items-center justify-between py-4">
		<span class="text-xs">Copyright © 2024 Hunter Johnston</span>
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
	</footer>
</div>
