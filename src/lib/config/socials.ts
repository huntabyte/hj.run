import type { ComponentType } from 'svelte';
import * as Icon from '$lib/icons/index.js';

type Social = {
	name: string;
	href: string;
	icon: ComponentType;
};

export const socials: Social[] = [
	{
		name: 'GitHub',
		href: 'https://github.com/huntabyte',
		icon: Icon.GitHub
	},
	{
		name: 'X',
		href: 'https://x.com/huntabyte',
		icon: Icon.X
	},
	{
		name: 'YouTube',
		href: 'https://youtube.com/@huntabyte',
		icon: Icon.YouTube
	}
];
