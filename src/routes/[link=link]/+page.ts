import { redirect } from '@sveltejs/kit';
import { isLink, linkMap } from '../../params/link.js';

export async function load(event) {
	const link = event.params.link.toLowerCase();
	if (!isLink(link)) {
		redirect(302, '/');
	}

	redirect(302, linkMap[link]);
}
