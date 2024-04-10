import { error } from '@sveltejs/kit';

export type FrontMatter = {
	title: string;
	date: string;
};

export type ArticleFile = {
	default: import('svelte').ComponentType;
	metadata: FrontMatter;
};

export type DocResolver = () => Promise<ArticleFile>;

type ArticleDoc = {
	component: ArticleFile['default'];
	metadata: ArticleFile['metadata'];
	title: string;
};

export function slugFromPath(path: string) {
	return path.replace('/content/', '').replace('.md', '');
}

type Modules = Record<string, () => Promise<unknown>>;

function findMatch(slug: string, modules: Modules) {
	let match: { path?: string; resolver?: DocResolver } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === slug) {
			match = { path, resolver: resolver as unknown as DocResolver };
			break;
		}
	}
	if (!match.path) {
		match = getIndexDocIfExists(slug, modules);
	}

	return match;
}

function getIndexDocIfExists(slug: string, modules: Modules) {
	let match: { path?: string; resolver?: DocResolver } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (path.includes(`/${slug}/index.md`)) {
			match = { path, resolver: resolver as unknown as DocResolver };
			break;
		}
	}

	return match;
}

export type ContentType = 'articles' | 'notes' | 'snippets';

export async function getContent(slug: string, type: ContentType): Promise<ArticleDoc> {
	const modules = import.meta.glob(`/content/**/*.md`);
	const match = findMatch(`${type}/${slug}`, modules);
	const doc = await match?.resolver?.();

	if (!doc || !doc.metadata) {
		error(404);
	}

	return {
		component: doc.default,
		metadata: doc.metadata,
		title: doc.metadata.title
	};
}

export function slugFromPathname(pathname: string) {
	return pathname.split('/').pop() ?? '';
}
