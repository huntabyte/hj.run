import { error } from '@sveltejs/kit';

export type FrontMatter = {
	title: string;
	date: string;
};

export type PostFile = {
	default: import('svelte').ComponentType;
	metadata: FrontMatter;
};

export type DocResolver = () => Promise<PostFile>;

type PostDoc = {
	component: PostFile['default'];
	metadata: PostFile['metadata'];
	title: string;
};

export function slugFromPath(path: string) {
	return path.replace('/content/', '').replace('.md', '');
}

type Modules = Record<string, () => Promise<unknown>>;

function findMatch(slug: string, modules: Modules) {
	let match: { path?: string; resolver?: DocResolver } = {};

	console.log(slug);
	console.log(modules);

	for (const [path, resolver] of Object.entries(modules)) {
		console.log(slugFromPath(path));
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

export async function getDoc(slug: string): Promise<PostDoc> {
	const modules = import.meta.glob(`/content/**/*.md`);
	const match = findMatch(slug, modules);
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
