import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import { getArticle } from '$lib/utils/content.js';
import { dev } from '$app/environment';

export const load: PageLoad = async (event) => {
	const { component, title, metadata } = await getArticle(event.params.slug, 'articles');
	if (metadata.draft && !dev) error(404, 'Not found.');

	return {
		component,
		title,
		metadata
	};
};
