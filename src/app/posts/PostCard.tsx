import { FC } from "react";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
    post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
    return (
        <Link
            href={post.url}
            className="py-6 flex flex-col sm:flex-row sm:items-center gap-5 mb-20"
        >
            <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <div className="flex flex-wrap gap-2 capitalize text-sm">
                    {post.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border text-stone-500 border-current px-3"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <time
                    dateTime={post.date}
                    className="block text-xs text-slate-600"
                >
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
            </div>
            <Image
                src={post.heroImg}
                alt={`${post.title} hero image`}
                width={512}
                height={512}
                className="w-auto sm:max-w-[256px] object-cover rounded-md overflow-hidden border-stone-900"
            />
        </Link>
    );
};

export default PostCard;
