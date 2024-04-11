<script lang="ts">
	import { ContentList, Header } from '$lib/components';

	export let data;

	const title = 'Finds';
	const description = 'Random things I find that I feel are worth sharing.';
</script>

<Header {title} {description} />
<ContentList content={data.finds} />
