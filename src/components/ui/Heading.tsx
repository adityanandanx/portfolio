"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface HeadingProps extends HTMLMotionProps<"h1"> {}

const Heading: FC<HeadingProps> = ({
    children,
    style,
    className,
    ...props
}) => {
    return (
        <motion.h1
            style={{ ...style }}
            className={cn(
                "text-5xl sm:text-7xl md:text-8xl leading-none font-Syne font-bold",
                className
            )}
            {...props}
        >
            {children}
        </motion.h1>
    );
};

export default Heading;
