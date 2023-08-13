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
// const Testimonials = dynamic(async () => import("./testimonials"), {
//     ssr: false,
//     // loading: Loading,
// });
const Talk = dynamic(async () => import("./talk"), { ssr: true });
const OpenSource = dynamic(async () => import("./opensource"), {
  ssr: true,
});
const About = dynamic(async () => import("./about"));

export default async function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <OpenSource />
      <About />
      {/* <Testimonials /> */}
      <Talk />
    </>
  );
}
