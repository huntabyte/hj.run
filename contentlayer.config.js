import path from 'node:path';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	slug: {
		type: 'string',
		resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
	},
	slugFull: {
		type: 'string',
		resolve: (doc) => `/${doc._raw.flattenedPath}`
	},
	fileName: {
		type: 'string',
		resolve: (doc) => path.parse(doc._raw.sourceFilePath.split('/').slice(-1).join('/')).name
	},
	suffix: {
		type: 'string',
		resolve: (doc) => path.parse(doc._raw.sourceFilePath.split('/').slice(-1).join('/')).ext
	}
};

export const Article = defineDocumentType(() => ({
	name: 'Article',
	filePathPattern: `articles/**/*.md`,
	fields: {
		title: {
			type: 'string',
			required: true
		},
		date: {
			type: 'string',
			required: true
		},
		draft: {
			type: 'boolean',
			required: false
		}
	},
	computedFields
}));

export const Note = defineDocumentType(() => ({
	name: 'Note',
	filePathPattern: `notes/**/*.md`,
	fields: {
		title: {
			type: 'string',
			required: true
		},
		date: {
			type: 'string',
			required: true
		},
		draft: {
			type: 'boolean',
			required: false
		}
	},
	computedFields
}));

export const Use = defineDocumentType(() => ({
	name: 'Use',
	filePathPattern: `uses.md`,
	fields: {
		title: {
			type: 'string',
			required: true
		},
		subtitle: {
			type: 'string',
			required: true
		},
		updated: {
			type: 'string',
			required: true
		}
	}
}));

export default makeSource({
	contentDirPath: './content',
	documentTypes: [Article, Note],
	disableImportAliasWarning: true
});
