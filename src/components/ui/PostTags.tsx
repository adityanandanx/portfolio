import { FC } from "react";

interface PostTagProps {
    tags: string[];
}

const PostTags: FC<PostTagProps> = ({ tags }) => {
    return (
        <div className="flex flex-wrap text-sm gap-2 capitalize">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="rounded-full border text-stone-500 border-current px-3"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default PostTags;
