<script lang="ts">
	import { navigation } from '$lib/config/index.js';
	import { NavItem } from '$lib/components/index.js';
</script>

<nav class="flex items-center justify-between py-6">
	<a href="/" class="text-lg font-bold md:text-xl"> HJ </a>
	<div class="flex items-center gap-3 text-sm uppercase tracking-wide md:gap-5">
		{#each navigation as navItem}
			<NavItem {navItem} />
		{/each}
	</div>
</nav>
