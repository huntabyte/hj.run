import type { ParamMatcher } from '@sveltejs/kit';

export const links = [
	'github',
	'x',
	'twitter',
	'youtube',
	'discord',
	'coffee',
	'courses',
	'sponsor',
	'sponsors',
	'modern-saas'
] as const;

type Link = (typeof links)[number];

const X_URL = 'https://x.com/huntabyte';
const SPONSORS_URL = 'https://github.com/sponsors/huntabyte';

export const linkMap: Record<Link, string> = {
	github: 'https://github.com/huntabyte',
	x: X_URL,
	twitter: X_URL,
	youtube: 'https://youtube.com/@huntabyte',
	discord: 'https://discord.gg/nkWEKjnnZz',
	coffee: 'https://ko-fi.com/huntabyte',
	courses: 'https://courses.huntabyte.com',
	'modern-saas': 'https://courses.huntabyte.com/modern-saas',
	sponsor: SPONSORS_URL,
	sponsors: SPONSORS_URL
};

export function isLink(param: string): param is Link {
	return links.includes(param as Link);
}

export const match: ParamMatcher = (param) => {
	return links.includes(param.toLowerCase() as Link);
};
