import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "./PostCard";

interface BlogsHomeProps {}

const BlogsHome = async ({}: BlogsHomeProps) => {
    const posts = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
    });

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
