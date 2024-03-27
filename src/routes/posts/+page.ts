import { allPosts } from '../../../.contentlayer/generated';

export const load = async () => {
	return {
		posts: allPosts
	};
};
