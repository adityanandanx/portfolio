"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Staatliches, Syne } from "next/font/google";
import { HTMLMotionProps, motion } from "framer-motion";
const syne = Syne({ subsets: ["latin"], weight: "700" });

interface HeadingProps extends HTMLMotionProps<"h1"> {}

const Heading: FC<HeadingProps> = ({
    children,
    style,
    className,
    ...props
}) => {
    return (
        <motion.h1
            style={{ ...syne.style, ...style }}
            className={cn(
                "text-5xl sm:text-7xl md:text-8xl leading-none",
                className
            )}
            {...props}
        >
            {children}
        </motion.h1>
    );
};

export default Heading;
