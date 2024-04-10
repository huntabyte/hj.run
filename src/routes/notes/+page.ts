import { allNotes } from '../../../.contentlayer/generated';
import { dev } from '$app/environment';

export async function load() {
	const notes = [...allNotes]
		.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		})
		.filter((note) => {
			if (dev) return true;
			return note.draft !== true;
		});

	return {
		notes
	};
}
