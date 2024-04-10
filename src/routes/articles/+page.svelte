<script lang="ts">
	export let data;
</script>

{#each data.articles as article}
	{article.title}-{article.slug}-{article.slugFull}-{article.date}
{/each}
