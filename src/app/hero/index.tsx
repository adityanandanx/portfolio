"use client";
import { FC, useRef } from "react";
import heroImg from "./hero.jpg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CustomTooltip from "@/components/ui/CustomTooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "@/components/ui/Heading";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
    const target = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
    // const x = useTransform(scrollYProgress, [0.5, 1], ["0%", "5%"]);
    const scale = useTransform(scrollYProgress, [0.5, 1], ["100%", "90%"]);
    const y = useTransform(scrollYProgress, [0.5, 1], ["0%", "-100%"]);
    const imageY = useTransform(scrollYProgress, [0.5, 1], ["-50%", "0%"]);
    const position = useTransform(scrollYProgress, (pos) => {
        return pos >= 1 ? "relative" : "fixed";
    });

    return (
        <motion.section
            ref={target}
            style={{ opacity }}
            className="relative w-full h-screen mb-[100vh]"
        >
            <motion.div
                style={{ position }}
                className="fixed inset-0 top-0 p-10 flex flex-col justify-between h-full"
            >
                <Heading style={{ scale }}>
                    Hello There! <br />I am <br />
                    <CustomTooltip
                        side="right"
                        delayDuration={0}
                        tooltipText="Say Hi!"
                    >
                        <Link
                            href={"/"}
                            className="text-left outline-none text-orange-600 dark:text-orange-400 px-3 py-0 -mx-3 bg-stone-50 dark:bg-stone-900 hover:bg-stone-900 dark:hover:bg-stone-50 hover:text-orange-400 dark:hover:text-orange-600 leading-normal rounded-lg transition-colors ease-out"
                        >
                            Aditya Nandan
                        </Link>
                    </CustomTooltip>
                </Heading>
                <motion.div
                    style={{ y }}
                    className="max-w-lg w-[50vw] text-base flex flex-col gap-10"
                >
                    <p>
                        I am a self-taught Frontend Web Developer and Designer
                        and I make unique web experiences for small to large
                        scale brands.
                    </p>
                    <div className="flex gap-3">
                        <Button>Projects</Button>
                        <Button variant={"secondary"}>Projects</Button>
                    </div>
                </motion.div>
                {/* <motion.div
                    className="absolute right-0 sm:right-0 pl-64 top-1/2 -z-10"
                    style={{ y: imageY }}
                >
                    <Image
                        priority
                        className="rounded-full w-full h-full max-w-screen-lg"
                        src={heroImg}
                        alt="abstract design"
                    />
                </motion.div> */}
            </motion.div>
        </motion.section>
    );
};

export default Hero;
