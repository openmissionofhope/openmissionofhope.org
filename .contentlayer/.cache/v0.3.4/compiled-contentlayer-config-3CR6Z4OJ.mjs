// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Program = defineDocumentType(() => ({
  name: "Program",
  filePathPattern: "programs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    slug: {
      type: "string",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    status: {
      type: "enum",
      options: ["active"],
      required: true
    },
    owner: {
      type: "string",
      required: true
    },
    hero: {
      type: "string",
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/programs/${doc.slug}`
    }
  }
}));
var Idea = defineDocumentType(() => ({
  name: "Idea",
  filePathPattern: "ideas/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    slug: {
      type: "string",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    stage: {
      type: "enum",
      options: ["incubating", "brainstorm"],
      required: true
    },
    priority: {
      type: "number",
      required: true
    },
    owner: {
      type: "string",
      required: false
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/incubator#${doc.slug}`
    }
  }
}));
var Update = defineDocumentType(() => ({
  name: "Update",
  filePathPattern: "updates/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    slug: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    summary: {
      type: "string",
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/updates/${doc.slug}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Program, Idea, Update]
});
export {
  Idea,
  Program,
  Update,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-3CR6Z4OJ.mjs.map
