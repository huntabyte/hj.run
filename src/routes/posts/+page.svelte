<script lang="ts">
	export let data;
</script>

{#each data.posts as post}
	{post.title}
{/each}
