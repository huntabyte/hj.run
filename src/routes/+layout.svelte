<script lang="ts">
	import '../app.pcss';
	import * as Icon from '$lib/icons/index.js';
	import type { ComponentType } from 'svelte';

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
		{ name: 'Projects', href: '/projects' },
		{ name: 'Posts', href: '/posts' },
		{ name: 'Uses', href: '/uses' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<div class="mx-auto flex min-h-screen max-w-3xl flex-col px-4 md:px-0">
	<nav class="flex items-center justify-between">
		<a href="/" class="py-6 text-xl font-bold"> HJ </a>
		<div class="flex items-center gap-5">
			{#each navigation as navItem}
				<a href={navItem.href} class="hover:text-orange-400">{navItem.name}</a>
			{/each}
		</div>
	</nav>
	<main class="py-10">
		<slot />
	</main>
	<footer class="mx-auto mt-auto py-6 text-center">
		<div class="mt-8 flex items-center gap-1">
			{#each socials as social}
				<a
					href={social.href}
					target="_blank"
					class="inline-flex size-8 items-center justify-center text-neutral-400 hover:text-neutral-50"
				>
					<svelte:component this={social.icon} class={social.name === 'X' ? 'size-4' : 'size-5'} />
					<span class="sr-only">{social.name}</span>
				</a>
			{/each}
		</div>
	</footer>
</div>
