import { allFinds } from '../../../.contentlayer/generated';
import { dev } from '$app/environment';

export async function load() {
	const finds = [...allFinds]
		.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		})
		.filter((find) => {
			if (dev) return true;
			return find.draft !== true;
		});

	return {
		finds
	};
}
