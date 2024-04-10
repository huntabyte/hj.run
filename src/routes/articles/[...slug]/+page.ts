import { getContent } from '$lib/utils/articles.js';
import type { PageLoad } from './$types.js';

export const load: PageLoad = async (event) => {
	const { component, title, metadata } = await getContent(event.params.slug, 'articles');
	return {
		component,
		title,
		metadata
	};
};
