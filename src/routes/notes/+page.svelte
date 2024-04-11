<script lang="ts">
	import { ContentList, Header } from '$lib/components/index.js';

	export let data;
	const title = 'Notes';
	const description = "Snippets, thoughts, and anything that doesn't fit elsewhere.";
</script>

<Header {title} {description} />
<ContentList content={data.notes} />
