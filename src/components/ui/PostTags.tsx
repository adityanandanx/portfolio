import Link from "next/link";
import { FC } from "react";

interface PostTagProps {
    tags: string[];
    link?: boolean;
}

const PostTags: FC<PostTagProps> = ({ tags, link }) => {
    return (
        <div className="flex flex-wrap text-sm gap-2 capitalize">
            {tags.map((tag) => (
                <span
                    // href={`/posts?tag=${tag}`}
                    key={tag}
                    className="rounded-full border text-stone-500 border-current px-3"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
};

export const LinkedPostTags: FC<PostTagProps> = ({ tags, link }) => {
    return (
        <div className="flex flex-wrap text-sm gap-2 capitalize">
            {tags.map((tag) => (
                <Link
                    href={`/posts?tag=${tag}`}
                    key={tag}
                    className="rounded-full border text-stone-500 border-current px-3"
                >
                    {tag}
                </Link>
            ))}
        </div>
    );
};
export default PostTags;
