import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.md`,
    fields: {
        title: {
            type: "string",
            description: "The title of the post",
            required: true,
        },
        heroImg: {
            type: "string",
            description: "Hero Image of the post",
            required: true,
            default: "/assets/posts/placeholder.jpg",
        },
        date: {
            type: "date",
            description: "The date of the post",
            required: true,
        },
        tags: {
            type: "list",
            of: { type: "string" },
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (post) => `/posts/${post._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
});
