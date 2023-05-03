"use client";
import { FC, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { AnimatePresence, motion, useScroll } from "framer-motion";

interface CustomTooltipProps extends Tooltip.TooltipProps {
    tooltipText: string;
    side?: "left" | "right" | "top" | "bottom";
}

const CustomTooltip: FC<CustomTooltipProps> = ({
    children,
    tooltipText,
    side,
    ...props
}) => {
    const [open, setOpen] = useState(false);

    return (
        <Tooltip.Provider {...props}>
            <Tooltip.Root open={open} onOpenChange={setOpen}>
                <Tooltip.Trigger className="text-left">
                    {children}
                </Tooltip.Trigger>
                <AnimatePresence>
                    {open ? (
                        <Tooltip.Portal forceMount>
                            <Tooltip.Content
                                asChild
                                forceMount
                                sideOffset={5}
                                side={side || "top"}
                            >
                                <motion.div
                                    className="select-none rounded-md bg-stone-100 px-3 py-2 text-base border border-current leading-none shadow-lg will-change-[transform,opacity] text-black"
                                    initial={{ opacity: 0, y: "-10%" }}
                                    animate={{ opacity: 1, y: "10%" }}
                                    exit={{ opacity: 0, y: "-10%" }}
                                >
                                    {tooltipText}
                                    {/* <Tooltip.Arrow className="fill-stone-100" /> */}
                                </motion.div>
                                {/* {tooltipText} */}
                            </Tooltip.Content>
                        </Tooltip.Portal>
                    ) : null}
                </AnimatePresence>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

export default CustomTooltip;
