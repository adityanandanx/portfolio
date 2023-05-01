"use client";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion, useInView } from "framer-motion";
import { Syne } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { MdArrowOutward, MdOpenInNew } from "react-icons/md";
import { Url } from "url";

const syne = Syne({ subsets: ["latin"], weight: ["600"] });

interface ProjectProps extends HTMLMotionProps<"div"> {
    title: string;
    desc: string;
    tags: string[];
    imgPath?: string | StaticImageData;
    github?: string | Url;
    live?: string | Url;
}

const Project: FC<ProjectProps> = ({
    title,
    desc,
    tags,
    imgPath,
    github,
    live,
    className,
    ...props
}) => {
    const target = useRef(null);
    const inView = useInView(target, { margin: "-100px", once: true });

    return (
        <motion.div
            className={cn(
                "overflow-hidden sticky p-5 py-10 sm:px-16 lg:px-32 rounded-md top-0 w-full min-h-screen group bg-stone-100 dark:bg-stone-700 flex items-center justify-center",
                className
            )}
            {...props}
        >
            <div
                ref={target}
                className="pb-32 md:pb-0 flex flex-col md:group-even:flex-row-reverse md:flex-row items-center justify-between gap-10"
            >
                <motion.div
                    style={{
                        y: inView ? "0%" : "50%",
                        opacity: inView ? 1 : 0,
                        transition:
                            "opacity 700ms ease-out, transform 700ms ease-out",
                    }}
                    className="flex-1 w-full flex flex-col gap-1"
                >
                    <h2 className="text-xl">{title}</h2>
                    <Link
                        target="_blank"
                        className="relative"
                        href={live || "/"}
                    >
                        <motion.h1
                            style={syne.style}
                            initial={{
                                backgroundSize: "0% 2px",
                            }}
                            whileHover={{
                                backgroundSize: "100% 2px",
                            }}
                            transition={{ duration: 0.5 }}
                            className="peer text-4xl inline text-justify bg-gradient-to-r from-stone-200 to-stone-100 bg-no-repeat bg-left-bottom"
                        >
                            {desc}
                        </motion.h1>
                        <MdArrowOutward className="text-4xl absolute bottom-full left-full opacity-0 peer-hover:opacity-100 transition-opacity" />
                    </Link>
                    <div className="flex flex-wrap items-center gap-0 text-xs">
                        {tags.map((tag, i) => (
                            <>
                                <span key={tag} className="px-2 py-1">
                                    {tag}
                                </span>
                            </>
                        ))}
                    </div>
                    <div className="flex gap-5">
                        {github && (
                            <Link href={github}>
                                <Button
                                    className="text-3xl p-2 text-inherit"
                                    variant={"secondary"}
                                >
                                    <FaGithub />
                                </Button>
                            </Link>
                        )}
                        {live && (
                            <Link href={live}>
                                <Button
                                    className="text-3xl p-2 text-inherit"
                                    variant={"secondary"}
                                >
                                    <FaLink />
                                </Button>
                            </Link>
                        )}
                    </div>
                </motion.div>
                {imgPath && (
                    <motion.div
                        style={{
                            y: inView ? "0%" : "50%",
                            opacity: inView ? 1 : 0,
                            transition:
                                "opacity 400ms ease-out, transform 400ms ease-out",
                        }}
                        className="absolute -bottom-4 sm:-bottom-16 left-10 right-10 -z-10 lg:static lg:w-1/2"
                    >
                        <Image className="" src={imgPath} alt={title} />
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default Project;
