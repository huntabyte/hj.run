import type { ParamMatcher } from '@sveltejs/kit';

export const links = ['github', 'x', 'youtube', 'discord', 'coffee'] as const;

type Link = (typeof links)[number];

export const linkMap: Record<Link, string> = {
	github: 'https://github.com/huntabyte',
	x: 'https://x.com/huntabyte',
	youtube: 'https://youtube.com/@huntabyte',
	discord: 'https://discord.gg/nkWEKjnnZz',
	coffee: 'https://ko-fi.com/huntabyte'
};

export function isLink(param: string): param is Link {
	return links.includes(param as Link);
}

export const match: ParamMatcher = (param) => {
	return links.includes(param.toLowerCase() as Link);
};
