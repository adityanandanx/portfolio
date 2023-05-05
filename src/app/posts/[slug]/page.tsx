import { FC } from "react";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post._raw.flattenedPath,
    }));
}

interface PageProps {
    params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug
    );

    // 404 if the post does not exist.
    if (!post) notFound();

    return (
        <>
            <article
                dangerouslySetInnerHTML={{ __html: post.body.html }}
            ></article>
        </>
    );
};

export default Page;
