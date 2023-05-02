import { ButtonHTMLAttributes, FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

const ButtonVariants = cva(
    "px-10 py-3 text-sm font-medium rounded-full focus:ring ring-stone-200 outline-none flex items-center gap-2 disabled:opacity-50 transition-all",
    {
        variants: {
            variant: {
                primary:
                    "bg-stone-900 text-stone-50 dark:bg-stone-50 dark:text-stone-900",
                secondary: "text-stone-900 dark:text-stone-50 bg-transparent",
                // special:
                //     "outline-none text-orange-600 dark:text-orange-400 px-3 py-0 -mx-3 bg-stone-50 dark:bg-stone-900 hover:bg-stone-900 dark:hover:bg-stone-50 hover:text-orange-400 dark:hover:text-orange-600 leading-normal rounded-lg transition-colors ease-out",
            },
            brightness: {
                dim: "opacity-50 hover:opacity-100 focus:opacity-100 transition-opacity shadow-none",
                default: "opacity-100",
            },
        },
        defaultVariants: {
            variant: "primary",
            brightness: "default",
        },
    }
);
export interface ButtonProps
    extends HTMLMotionProps<"button">,
        VariantProps<typeof ButtonVariants> {
    isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
    className,
    children,
    variant,
    brightness,
    ...props
}) => {
    return (
        <motion.button
            className={cn(ButtonVariants({ variant, brightness, className }))}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
