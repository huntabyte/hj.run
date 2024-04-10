---
title: Tailwind Wins the Component Era
date: 2024-04-09
---

Ah, [TailwindCSS](https://tailwindcss.com) - the most controversial CSS framework of the decade for reasons unknown to me. I've never passionately hated something I didn't have to use. I just looked at the thing and thought, "Huh, that's interesting but not for me," and moved on like a normal person. But I digress. Let's talk about why Tailwind is winning the component era and why you should give it a shot if you're on the fence about it.

## Shortcomings of Scoped Styles

Scoped styles are great. They solve one of the biggest pains with CSS: global scope. You can apply styles to a component and not worry about them leaking out, which is fantastic if you're authoring all your components from scratch. But what if you're not?

### Component Libraries

Component libraries save you time and effort. For smaller teams or solo developers, they're a godsend. You offload the maintenance to others and focus on your app's business logic, which works great until it doesn't.

Your design colleague who used to work at Linear just wrapped up a new design system that you're responsible for converting to code. You pray that the library you're using exposes enough props to make the changes you need. You open up the docs to check the 600 style-related props you can pass to the component, and you're overwhelmed, but you get to work...

```svelte
<script lang="ts">
	import { Button } from 'awesome-components';
</script>

<Button
	bgColor="blue"
	color="white"
	// and more...
>
	Click me
</Button>
```

After a few hours of tweaking, you realize the component doesn't expose everything you need. You think to yourself, "If only I could just pass in the class names I need to the component and be done with it," something like this:

```svelte
<script lang="ts">
	import { Button } from 'awesome-components';
</script>

<Button class="btn-primary">Click me</Button>

<style>
	.btn-primary {
		background-color: blue !important;
		color: white !important;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) !important;
	}
</style>
```

But this violates the sacred rule of scoped styles. They don't leave the component, which is good, but you probably hate this rule now.

One solution offered up is to turn the scoped style into a global style:

```svelte
<style>
	:global(.btn-primary) {
		background-color: blue !important;
		color: white !important;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) !important;
	}
</style>
```

But now you've lost the benefits of scoped styles. You're back to square one. There's got to be a better way, right?

## Enter Tailwind

What if, instead of passing 600 predefined props to a generic component, you could override the styles you need with a few classes, each overriding a specific style? That's what Tailwind can do for you and why it's winning the component era.

Now, Tailwind doesn't get _all_ the credit for this, as some incredible libraries have come along to make overriding and merging Tailwind classes a breeze, but it's the "Catalyst" for this change ;).

### The Tailwind Way

If the library you're using uses Tailwind, they can use some of the awesome libraries like [clsx](/), [cva](/), [tailwindMerge](/), or [tailwind-variants](/) to ensure you can override any of their default styles with ease.

Here's an example of how that `<Button>` might look under the hood:

```svelte
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	export let className: string | undefined = undefined;
</script>

<button class={twMerge('h-5 bg-red-200 px-2 py-1 text-sm text-black', className)}>
	<slot />
</button>
```

Anything you pass to the `className` prop will selectively override the default classes applied to the button. It won't fully replace them; you just override those that conflict with the classes you pass.

So this is now possible:

```svelte
<script lang="ts">
	import { Button } from 'awesome-components';
</script>

<Button className="bg-blue-500 text-white shadow-xl">Click me</Button>
```

And you're done. No more digging through docs to find the right prop to pass in. No more worrying about the component not exposing all the props you need. You _just_ pass in the classes you need and move on with your life.

## Conclusion

The compositional nature of Tailwind is what makes it so powerful. You can take a component and tweak it to your heart's content without worrying about the component's API. You can even use Tailwind to style your internal components and have the same flexibility.

You can learn the utility classes once and apply them anywhere. You learn them once and can now instantly recognize them in any codebase, making it easier to jump into new projects.

Tailwind is winning the component era because it's the most flexible way to style components. It's not the only way, but the most accessible way. If you're on the fence about it, give it a real shot on a real project. You might just find that it's the best thing since sliced bread. Or not. Who knows?
