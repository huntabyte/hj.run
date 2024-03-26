<script lang="ts">
	import '../app.pcss';

	const navigation = [
		{ name: 'Projects', href: '/projects' },
		{ name: 'Posts', href: '/posts' },
		{ name: 'Stuff', href: '/stuff' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<div class="mx-auto max-w-3xl">
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
</div>
