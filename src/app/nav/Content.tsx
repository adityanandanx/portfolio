import { Variants, motion } from "framer-motion";
import { Syne } from "next/font/google";
import Link from "next/link";
import { FC } from "react";
import { Url } from "url";
import { DialogClose } from "@radix-ui/react-dialog";

const syne = Syne({ subsets: ["latin"], weight: ["700"] });
interface Link {
    name: string;
    href: string | Url;
}

const LINKS: Link[] = [
    { name: "Home", href: "/#home" },
    { name: "About Me", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/posts" },
    { name: "Contact", href: "/#contact" },
];

interface ContentProps {}

const Content: FC<ContentProps> = ({}) => {
    const containerVariant: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.075,
            },
        },
    };
    return (
        <motion.div
            style={syne.style}
            className="relative w-full h-full text-4xl sm:text-7xl md:text-8xl overflow-hidden"
        >
            <motion.ul
                variants={containerVariant}
                initial={"hidden"}
                animate={"visible"}
                className="flex flex-col h-full max-h-screen justify-center py-20"
            >
                {LINKS.map((l, i) => {
                    return (
                        <NavLink key={i} href={l.href}>
                            {l.name}
                        </NavLink>
                    );
                })}
            </motion.ul>
        </motion.div>
    );
};

const AnimatedLink = motion(Link);

const NavLink: FC<{ children?: React.ReactNode; href: string | Url }> = ({
    children,
    href,
}) => {
    const itemVariant: Variants = {
        hidden: {
            // opacity: -1,
            y: "100%",
        },
        visible: {
            // opacity: 1,
            y: "0%",
            // transition: {},
        },
    };

    return (
        <li className="overflow-hidden">
            <DialogClose asChild>
                <AnimatedLink
                    variants={itemVariant}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{
                        scale: 1.05,
                        color: "rgb(250 250 249)",
                        transition: {
                            duration: 0.24,
                        },
                    }}
                    className="block p-5 text-stone-400 origin-left"
                    href={href}
                >
                    {/* <span className="text-stone-500 text-8xl leading-10">/</span> */}
                    {children}
                </AnimatedLink>
            </DialogClose>
        </li>
    );
};

export default Content;
