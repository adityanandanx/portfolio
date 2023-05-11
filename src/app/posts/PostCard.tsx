import { FC } from "react";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import PostTags from "@/components/ui/PostTags";

interface PostCardProps {
    post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
    return (
        <Link
            href={post.url}
            className="py-6 flex flex-col sm:flex-row sm:items-center gap-5 mb-20 group"
        >
            <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-xl font-bold">{post.title}</h2>
                {post.tags && <PostTags tags={post.tags} />}
                <time
                    dateTime={post.date}
                    className="block text-xs text-stone-500"
                >
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
            </div>
            <div className="overflow-hidden rounded-md border-stone-900">
                <Image
                    src={post.heroImg}
                    alt={`${post.title} hero image`}
                    width={512}
                    height={512}
                    className="w-auto sm:max-w-[256px] object-cover group-hover:scale-125 transition-transform"
                />
            </div>
        </Link>
    );
};

export default PostCard;
