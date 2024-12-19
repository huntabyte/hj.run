//@ts-check
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { visit } from 'unist-util-visit';
import { getHighlighter } from 'shiki';
import rehypeSlug from 'rehype-slug';
import { defineConfig } from 'mdsx';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/**
 * @typedef {import('mdast').Root} MdastRoot
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('unified').Transformer<HastRoot, HastRoot>} HastTransformer
 * @typedef {import('unified').Transformer<MdastRoot, MdastRoot>} MdastTransformer
 */

/**
 * @type {import('rehype-pretty-code').Options}
 */
const prettyCodeOptions = {
	theme: "github-light",
	getHighlighter: (options) =>
		getHighlighter({
			...options,
			langs: [
				'plaintext',
				import('shiki/langs/javascript.mjs'),
				import('shiki/langs/typescript.mjs'),
				import('shiki/langs/css.mjs'),
				import('shiki/langs/svelte.mjs'),
				import('shiki/langs/shellscript.mjs'),
				import('shiki/langs/markdown.mjs')
			]
		}),
	keepBackground: false,
	onVisitLine(node) {
		if (node.children.length === 0) {
			//@ts-expect-error - typescript is wrong here, we want to force a text node
			node.children = { type: 'text', value: ' ' };
		}
	},
	onVisitHighlightedLine(node) {
		node.properties.className = ['line--highlighted'];
	},
	onVisitHighlightedChars(node) {
		node.properties.className = ['chars--highlighted'];
	}
};

export const mdsxConfig = defineConfig({
	extensions: ['.md'],
	remarkPlugins: [
		// use remark-gfm to support GitHub Flavored Markdown
		remarkGfm
		// remove prettier-ignore comments from code blocks
		// remarkRemovePrettierIgnore,
	],
	rehypePlugins: [
		// syntax highlight code blocks with rehype-pretty-code
		[rehypePrettyCode, prettyCodeOptions],
		// apply data-metadata to <figure> elements that contain a <figcaption>
		rehypeHandleMetadata,
		// add IDs to headings for table of contents links
		rehypeSlug
	],
	blueprints: {
		default: {
			path: resolve(__dirname, './src/lib/components/markdown/blueprint.svelte')
		}
	}
});

/**
 * Adds `data-metadata` to `<figure>` elements that contain a `<figcaption>`.
 * We use this to style elements within the `<figure>` differently if a `<figcaption>`
 * is present.
 *
 * @returns {HastTransformer} - a unified transformer
 */
function rehypeHandleMetadata() {
	return async (tree) => {
		visit(tree, (node) => {
			if (node?.type === 'element' && node?.tagName === 'figure') {
				if (!('data-rehype-pretty-code-figure' in node.properties)) {
					return;
				}

				const preElement = node.children.at(-1);
				if (preElement && 'tagName' in preElement && preElement.tagName !== 'pre') {
					return;
				}

				const firstChild = node.children.at(0);
				if (firstChild && 'tagName' in firstChild && firstChild.tagName === 'figcaption') {
					node.properties['data-metadata'] = '';
					const lastChild = node.children.at(-1);
					if (lastChild && 'properties' in lastChild) {
						lastChild.properties['data-metadata'] = '';
					}
				}
			}
		});
	};
}
