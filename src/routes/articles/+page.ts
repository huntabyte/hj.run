import { allArticles } from '../../../.contentlayer/generated';
import { dev } from '$app/environment';

export async function load() {
	const articles = [...allArticles]
		.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		})
		.filter((article) => {
			if (dev) return true;
			return article.draft !== true;
		});

	return {
		articles
	};
}
