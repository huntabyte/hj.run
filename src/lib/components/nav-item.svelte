<script lang="ts">
	import { page } from '$app/stores';
	import type { NavItem } from '$lib/config/index.js';
	import { cn } from '$lib/utils/index.js';

	export let navItem: NavItem;

	$: isActive = $page.url.pathname.startsWith(navItem.href);
</script>

<a
	href={navItem.href}
	class={cn(
		'font-semibold text-stone-600/85 hover:text-stone-700',
		isActive && 'text-stone-950 hover:text-stone-950'
	)}
>
	{navItem.name}
</a>
