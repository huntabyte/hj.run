<script lang="ts">
	import { ContentList, Header } from '$lib/components';

	export let data;
</script>

<Header title="Articles" description="A collection of the articles I've written." />
<ContentList content={data.articles} />
