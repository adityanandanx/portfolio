"use client";
import { FC } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { AnimatePresence, motion } from "framer-motion";

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
    return (
        <Tooltip.Provider {...props}>
            <Tooltip.Root>
                <Tooltip.Trigger className="text-left">
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <AnimatePresence>
                        <Tooltip.Content
                            asChild
                            className="select-none rounded-md bg-stone-50 px-3 py-2 text-base leading-none shadow-lg will-change-[transform,opacity] text-black"
                            sideOffset={5}
                            side={side || "top"}
                            forceMount
                        >
                            <motion.div
                                initial={{ opacity: 0, y: "-100%" }}
                                animate={{ opacity: 1, y: "10%" }}
                                exit={{ opacity: 0, y: "-100%" }}
                            >
                                {tooltipText}
                                <Tooltip.Arrow className="fill-white" />
                            </motion.div>
                            {/* {tooltipText} */}
                        </Tooltip.Content>
                    </AnimatePresence>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

export default CustomTooltip;
