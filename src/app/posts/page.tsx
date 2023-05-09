import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "./PostCard";

interface BlogsHomeProps {
    searchParams?: { tag?: string; title?: string };
}

const BlogsHome = async ({ searchParams }: BlogsHomeProps) => {
    let posts = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
    });

    if (searchParams) {
        const { tag: filterTag, title: filterTitle } = searchParams;
        if (filterTag) {
            posts = posts.filter((post) => post.tags?.includes(filterTag));
        } else if (filterTitle) {
            posts = posts.filter((post) =>
                post.title.toLowerCase().includes(filterTitle)
            );
        }
    }

    return (
        <>
            <div className="">
                <h1 className="text-7xl sm:text-8xl md:text-9xl mt-10 md:mt-20 font-Syne font-bold">
                    Blogs
                </h1>
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </>
    );
};

export default BlogsHome;
