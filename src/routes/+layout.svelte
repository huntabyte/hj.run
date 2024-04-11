<script lang="ts">
	import '$lib/styles/app.pcss';
	import '$lib/styles/markdown.pcss';
	import { Metadata, Navigation, SocialItems } from '$lib/components';
</script>

<Metadata />

<div class="mx-auto flex min-h-screen flex-col">
	<Navigation />
	<main class="py-6 md:py-10">
		<slot />
	</main>
	<footer class="mx-auto mt-auto flex w-full items-center justify-between py-4">
		<div class="flex items-center text-xs">
			<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" class="font-medium">
				CC BY-NC-SA 4.0
			</a>
			<span>&nbsp;© 2024 Hunter Johnston</span>
		</div>
		<SocialItems />
	</footer>
</div>
