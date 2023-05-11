"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FC, MutableRefObject } from "react";
import { MdArrowBack } from "react-icons/md";

interface ReadingBarProps {
    targetRef?: MutableRefObject<HTMLElement>;
}

const ReadingBar: FC<ReadingBarProps> = ({ targetRef }) => {
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // offset: ["start start", "end start"],
    });
    const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <>
            <motion.div
                style={{ width }}
                className="fixed top-0 left-0 h-1 bg-orange-500 rounded-full shadow-md shadow-orange-500/50 z-50"
            ></motion.div>
            <Link
                href={"/posts"}
                className="fixed top-0 left-0 p-5 sm:p-10  text-stone-50 mix-blend-difference outline-none z-50"
            >
                <motion.button className="outline-none">
                    <MdArrowBack className="text-5xl" />
                </motion.button>
            </Link>
        </>
    );
};

export default ReadingBar;
