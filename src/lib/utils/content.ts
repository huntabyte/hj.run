import { error } from '@sveltejs/kit';

export type ArticleFrontMatter = {
	title: string;
	date: string;
};

export type ArticleFile = {
	default: import('svelte').ComponentType;
	metadata: ArticleFrontMatter;
};

export type NoteFrontMatter = {
	title: string;
	date: string;
};

export type NoteFile = {
	default: import('svelte').ComponentType;
	metadata: NoteFrontMatter;
};

export type UseFrontMatter = {
	title: string;
	subtitle: string;
	updated: string;
};

export type UseFile = {
	default: import('svelte').ComponentType;
	metadata: UseFrontMatter;
};

export type ArticleResolver = () => Promise<ArticleFile>;
export type NoteResolver = () => Promise<NoteFile>;
export type UseResolver = () => Promise<UseFile>;

type ArticleDoc = {
	component: ArticleFile['default'];
	metadata: ArticleFile['metadata'];
	title: string;
};

type NoteDoc = {
	component: NoteFile['default'];
	metadata: NoteFile['metadata'];
	title: string;
};

type UseDoc = {
	component: UseFile['default'];
	metadata: UseFile['metadata'];
	title: string;
};

export function slugFromPath(path: string) {
	return path.replace('/content/', '').replace('.md', '');
}

type Modules = Record<string, () => Promise<unknown>>;

function findMatch<Resolver>(slug: string, modules: Modules) {
	let match: { path?: string; resolver?: Resolver } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === slug) {
			match = { path, resolver: resolver as unknown as Resolver };
			break;
		}
	}
	if (!match.path) {
		match = getIndexDocIfExists(slug, modules);
	}

	return match;
}

function getIndexDocIfExists<Resolver>(slug: string, modules: Modules) {
	let match: { path?: string; resolver?: Resolver } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (path.includes(`/${slug}/index.md`)) {
			match = { path, resolver: resolver as unknown as Resolver };
			break;
		}
	}

	return match;
}

export type ContentType = 'articles' | 'notes' | 'snippets' | 'uses';

export async function getArticle(slug: string, type: ContentType): Promise<ArticleDoc> {
	const modules = import.meta.glob(`/content/articles/**/*.md`);
	const match = findMatch<ArticleResolver>(`${type}/${slug}`, modules);
	const doc = await match?.resolver?.();

	if (!doc || !doc.metadata) error(404);

	return {
		component: doc.default,
		metadata: doc.metadata,
		title: doc.metadata.title
	};
}

export async function getNote(slug: string): Promise<NoteDoc> {
	const modules = import.meta.glob(`/content/notes/**/*.md`);
	const match = findMatch<NoteResolver>(`notes/${slug}`, modules);
	const doc = await match?.resolver?.();

	if (!doc || !doc.metadata) error(404);

	return {
		component: doc.default,
		metadata: doc.metadata,
		title: doc.metadata.title
	};
}

export async function getUse(): Promise<UseDoc> {
	const modules = import.meta.glob(`/content/uses/**/*.md`);
	const match = findMatch<UseResolver>(`uses/index`, modules);
	const doc = await match?.resolver?.();

	if (!doc || !doc.metadata) error(404);

	return {
		component: doc.default,
		metadata: doc.metadata,
		title: doc.metadata.title
	};
}

export function slugFromPathname(pathname: string) {
	return pathname.split('/').pop() ?? '';
}
