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
                <Tooltip.Trigger>{children}</Tooltip.Trigger>
                <Tooltip.Portal>
                    <AnimatePresence>
                        <Tooltip.Content
                            asChild
                            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-stone-50 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] text-black"
                            sideOffset={5}
                            side={side || "top"}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: "-100%" }}
                                animate={{ opacity: 1, x: "10%" }}
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
