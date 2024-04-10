import type { PageLoad } from './$types.js';
import { getArticle } from '$lib/utils/content.js';

export const load: PageLoad = async (event) => {
	const { component, title, metadata } = await getArticle(event.params.slug, 'articles');
	return {
		component,
		title,
		metadata
	};
};
