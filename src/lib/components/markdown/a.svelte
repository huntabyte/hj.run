<script lang="ts">
	export let href: string;

	$: isInternal = href.startsWith('/') || href.startsWith('#');
</script>

<a {href} target={isInternal ? undefined : '_blank'}>
	<slot />
</a>
