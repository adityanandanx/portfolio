import dynamic from "next/dynamic";
import Loading from "./loading";

const Hero = dynamic(async () => import("./hero"), {
    ssr: false,
    loading: Loading,
});
const Projects = dynamic(async () => import("./projects"), {
    ssr: false,
    // loading: Loading,
});
const Testimonials = dynamic(async () => import("./testimonials"), {
    ssr: false,
    // loading: Loading,
});
const Talk = dynamic(async () => import("./talk"), { ssr: false });

export default async function Home() {
    return (
        <>
            {/* <Loading /> */}
            <Hero />
            <Projects />
            <Testimonials />
            <Talk />
        </>
    );
}
