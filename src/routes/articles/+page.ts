import { allArticles } from '../../../.contentlayer/generated';

export async function load() {
	const articles = [...allArticles].sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return {
		articles
	};
}
