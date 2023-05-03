"use client";
import { FC, useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CustomTooltip from "@/components/ui/CustomTooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "@/components/ui/Heading";
import { MdChevronRight } from "react-icons/md";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
    const target = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.5, 1], ["100%", "90%"]);
    const y = useTransform(scrollYProgress, [0.5, 1], ["0%", "-100%"]);
    const position = useTransform(scrollYProgress, (pos) => {
        return pos >= 1 ? "relative" : "fixed";
    });

    return (
        <motion.section
            id="home"
            ref={target}
            style={{ opacity }}
            className="relative w-full h-screen mb-[100vh]"
        >
            <motion.div
                style={{ position }}
                className="fixed inset-0 top-0 p-10 flex flex-col justify-between h-full"
            >
                <Heading className="w-fit" style={{ scale }}>
                    Hello There! <br />I am <br />
                    <CustomTooltip
                        side="bottom"
                        delayDuration={0}
                        tooltipText="Say Hi!"
                    >
                        <Link
                            href={"/#contact"}
                            className="inline-block w-fit text-left outline-none text-orange-600 dark:text-orange-400 px-3 py-0 -mx-3 bg-stone-100 dark:bg-stone-900 leading-none rounded-lg"
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
                    <div className="flex flex-col items-start gap-3">
                        <Button>
                            Get In Touch <MdChevronRight />
                        </Button>
                        <Button variant={"secondary"}>Projects</Button>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
