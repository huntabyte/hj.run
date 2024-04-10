export const siteConfig = {
	name: 'Hunter Johnston',
	url: 'https://hj.run',
	description: 'Developer and Creator',
	links: {
		x: 'https://hj.run/x',
		github: 'https://hj.run/github',
		youtube: 'https://hj.run/youtube',
		discord: 'https://hj.run/discord'
	},
	author: 'Huntabyte',
	keywords: 'Developer,Svelte,SvelteKit,Open Source,Typescript,NodeJS',
	ogImage: {
		url: 'https://hj.run/og.png',
		width: '1200',
		height: '630'
	}
};

export type SiteConfig = typeof siteConfig;
