import { allArticles } from '../../../.contentlayer/generated';

export async function load() {
	return {
		articles: allArticles
	};
}
