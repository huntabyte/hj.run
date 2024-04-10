import type { PageLoad } from './$types.js';
import { getNote } from '$lib/utils/content.js';

export const load: PageLoad = async (event) => {
	const { component, title, metadata } = await getNote(event.params.slug);
	return {
		component,
		title,
		metadata
	};
};
