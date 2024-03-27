import type { PageLoad } from './$types.js';
import { getContent } from '$lib/utils/posts.js';

export const load: PageLoad = async (event) => {
	const { component, title, metadata } = await getContent(event.params.slug, 'posts');
	return {
		component,
		title,
		metadata
	};
};
