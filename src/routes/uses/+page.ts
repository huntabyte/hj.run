import type { PageLoad } from './$types.js';
import { getArticle, getUse } from '$lib/utils/content.js';

export const load: PageLoad = async () => {
	const { component, title, metadata } = await getUse();
	return {
		component,
		title,
		metadata
	};
};
