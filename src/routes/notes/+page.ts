import { allNotes } from '../../../.contentlayer/generated';

export async function load() {
	return {
		notes: allNotes
	};
}
