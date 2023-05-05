import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "./PostCard";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["600"] });

interface BlogsHomeProps {}

const BlogsHome = async ({}: BlogsHomeProps) => {
    const posts = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
    });

    return (
        <>
            <div className="">
                <h1
                    style={{ ...syne.style }}
                    className="text-7xl sm:text-8xl md:text-9xl mt-10 md:mt-20"
                >
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
