---
title: DevTools for Mobile Browsers
date: 2024-06-24
---

I only recently became part of the "Apple gang" and so I was unaware of the Safari Web Inspector until now. I was pleasantly surprised to find out that it's a powerful tool for debugging websites on mobile devices. However, for those of you who don't have a Mac, but have an iPhone, I found this awesome tool called [Eruda](https://github.com/liriliri/eruda).

Eruda is a console for mobile browsers that allows you to inspect and debug your website on your phone. It's basically a shrunken down version of the Chrome DevTools that you can embed into your site for debugging purposes. It's super easy to use and has a lot of the same features as the Chrome DevTools, like the console, network, elements, and more.

## Using Eruda with SvelteKit

Since Eruda can only be executed in a browser, you can't just directly import it into your SvelteKit project, since SvelteKit is a server-side rendered framework. However, you can use the `onMount` lifecycle function paired with [Dynamic Imports](https://vitejs.dev/guide/features#dynamic-import) to load Eruda when the page is mounted. Here's how you can do it:

First, install Eruda:

```bash
npm install eruda
```

Then, in your Svelte component, you can import and initialize Eruda like this:

```svelte
<script lang="ts">
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (!dev) return;
		const eruda = (await import('eruda')).default;
		eruda.init();
	});
</script>
```

This code will only load Eruda when the environment is set to development. This way, you can debug your site on your phone without having to worry about Eruda being loaded in production.

I hope you find this tool as useful as I did!
