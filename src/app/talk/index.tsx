"use client";
import Button from "@/components/ui/Button";
import Socials from "@/components/ui/Socials";
import { Syne } from "next/font/google";
import { FC } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const syne = Syne({ subsets: ["latin"], weight: ["700"] });
interface TalkProps {}

const Talk: FC<TalkProps> = ({}) => {
    return (
        <section className="w-full h-[90vh] p-0">
            <div className="w-full p-16 md:p-24 bg-stone-800 dark:bg-stone-700 text-stone-50 rounded-xl h-full flex flex-col items-start justify-between">
                <div>
                    <h2 className="text-2xl">Have a project for Me?</h2>
                    <h1
                        style={{ ...syne.style }}
                        className="text-7xl sm:text-8xl md:text-9xl"
                    >
                        Let&rsquo;s Talk
                    </h1>
                    <Button className="text-base leading-none py-4 bg-stone-50 text-stone-900">
                        Get in touch
                        <MdChevronRight className="transform scale-150" />
                    </Button>
                </div>
                <footer className="w-full flex flex-col md:flex-row md:items-center justify-between">
                    <span style={syne.style} className="text-2xl">
                        Aditya Nandan
                    </span>
                    <Socials
                        className="text-stone-50"
                        socials={[
                            {
                                name: "Linkedin",
                                href: "https://www.linkedin.com/in/aditya-nandan-thats-it/",
                                icon: <FaLinkedin />,
                            },
                            {
                                name: "Twitter",
                                href: "https://twitter.com/iMADi69235681",
                                icon: <FaTwitter />,
                            },
                            {
                                name: "Github",
                                href: "https://github.com/iMADi-ARCH/cryptracker",
                                icon: <FaGithub />,
                            },
                        ]}
                    />
                </footer>
            </div>
        </section>
    );
};

export default Talk;
