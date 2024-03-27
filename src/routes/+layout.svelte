<script lang="ts">
	import '../app.pcss';

	const navigation = [
		{ name: 'Projects', href: '/projects' },
		{ name: 'Posts', href: '/posts' },
		{ name: 'Uses', href: '/uses' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<div class="mx-auto flex min-h-screen max-w-3xl flex-col">
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
	<footer class="mt-auto py-6 text-center">
		<p>© 2024 Hunter Johnston</p>
	</footer>
</div>
