import LetterAnim from "@/components/animations/LetterAnim";
import React from "react";
import { FaHeart } from "react-icons/fa";
import Project from "../projects/Project";
import OpenSourceProject from "./OpenSourceProject";
import quivrImg from "./images/quivr.png";

type Props = {};

const OpenSource = (props: Props) => {
  return (
    <section
      id="opensource"
      className="flex flex-col items-start justify-between py-20 max-w-5xl px-5 mx-auto"
    >
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-Syne font-bold">
        <LetterAnim text="My Open Source Contributions" />
      </h1>
      <h2 className="text-xl mb-10">
        <span className="opacity-50">Open source is</span>{" "}
        <FaHeart className="inline text-red-500" />{" "}
      </h2>
      <OpenSourceProject
        title="Quivr"
        desc="Quivr is your second brain in the cloud, designed to easily store and retrieve unstructured information."
        tags={["nextjs"]}
        imgPath={quivrImg}
        live={"https://www.quivr.app/"}
        github={"https://github.com/StanGirard/quivr/"}
      />
    </section>
  );
};

export default OpenSource;
