"use client";
import { FC, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MdClose, MdMenu } from "react-icons/md";
import { Syne } from "next/font/google";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Content from "./Content";

const syne = Syne({ subsets: ["latin"], weight: ["700"] });

interface navProps {}

const Nav: FC<navProps> = ({}) => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog.Root onOpenChange={(o) => setOpen(o)}>
            <Dialog.Trigger asChild>
                <motion.button
                    animate={{ skewX: open ? "-30deg" : "0deg" }}
                    whileTap={{ scale: 0.95 }}
                    className="text-5xl fixed top-0 right-0 z-20 cursor-pointer p-10 text-stone-50 mix-blend-difference outline-none"
                >
                    <MdMenu className="" />
                </motion.button>
            </Dialog.Trigger>
            <AnimatePresence>
                {open ? (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild forceMount>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.01 },
                                }}
                                className="fixed inset-0 bg-stone-900/50"
                            ></motion.div>
                        </Dialog.Overlay>
                        <Dialog.Content asChild forceMount>
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                exit={{ x: "-100%" }}
                                transition={{ ease: "circOut" }}
                                className="fixed z-30 inset-0 right-10 bg-stone-900 text-stone-50 p-5 flex flex-col shadow-lg focus:outline-none"
                            >
                                <MotionConfig
                                    transition={{
                                        duration: 1,
                                        ease: "anticipate",
                                    }}
                                >
                                    {/* <Dialog.Title
                                        style={syne.style}
                                        className="text-5xl p-10 leading-none overflow-hidden opacity-10 absolute"
                                    >
                                        <motion.h1
                                            initial={{ y: "100%" }}
                                            animate={{
                                                y: "0%",
                                            }}
                                        >
                                            Aditya Nandan
                                        </motion.h1>
                                    </Dialog.Title> */}
                                    {/* <hr className="w-full border border-current opacity-10" /> */}
                                    <Content />
                                    <Dialog.Close asChild>
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            className="absolute top-0 right-0 p-10 text-5xl outline-none"
                                            aria-label="Close"
                                        >
                                            <MdClose />
                                        </motion.button>
                                    </Dialog.Close>
                                </MotionConfig>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                ) : null}
            </AnimatePresence>
        </Dialog.Root>
    );
};

export default Nav;
