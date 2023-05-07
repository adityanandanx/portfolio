import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Image from "next/image";
import PostTags from "@/components/ui/PostTags";
import { format, parseISO } from "date-fns";
import ReadingBar from "./ReadingBar";

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
        <div className="flex flex-col gap-10">
            <Image
                src={post.heroImg}
                alt={post.title}
                width={1200}
                height={760}
                className="w-full h-full object-cover rounded-xl"
            />
            <div className="flex justify-between sticky top-0 py-3 border-b border-stone-500 bg-stone-100 dark:bg-stone-900 items-center">
                <time
                    dateTime={post.date}
                    className="block text-xs text-slate-600"
                >
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
                {post.tags && <PostTags tags={post.tags} />}
            </div>
            <article
                className="prose prose-stone mx-auto min-w-full"
                dangerouslySetInnerHTML={{ __html: post.body.html }}
            ></article>
            <ReadingBar />
        </div>
    );
};

export default Page;
