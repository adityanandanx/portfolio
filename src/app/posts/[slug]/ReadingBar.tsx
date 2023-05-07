"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, MutableRefObject } from "react";

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
        <motion.div
            style={{ width }}
            className="fixed top-0 left-0 h-1 bg-orange-500 rounded-full shadow-md shadow-orange-500/50 z-50"
        ></motion.div>
    );
};

export default ReadingBar;
