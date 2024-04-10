// contentlayer.config.js
import path from "node:path";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  slugFull: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  fileName: {
    type: "string",
    resolve: (doc) => path.parse(doc._raw.sourceFilePath.split("/").slice(-1).join("/")).name
  },
  suffix: {
    type: "string",
    resolve: (doc) => path.parse(doc._raw.sourceFilePath.split("/").slice(-1).join("/")).ext
  }
};
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.md`,
  fields: {
    title: {
      type: "string",
      required: true
    },
    excerpt: {
      type: "string",
      required: true
    },
    date: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var Note = defineDocumentType(() => ({
  name: "Note",
  filePathPattern: `notes/**/*.md`,
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Article, Note],
  disableImportAliasWarning: true
});
export {
  Article,
  Note,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7JCM3N25.mjs.map
