import { Variants, motion, useInView } from "framer-motion";
import { FC, useRef } from "react";

interface LetterAnimProps {
    text: string;
    splitter?: string;
}

const LetterAnim: FC<LetterAnimProps> = ({ text, splitter = "" }) => {
    const letters = text.split(splitter);

    const containerRef = useRef(null);
    const inView = useInView(containerRef, {
        margin: "100px 100px -100px 100px",
    });

    const containerVariant: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.075,
            },
        },
    };

    const letterVariant: Variants = {
        hidden: {
            opacity: -1,
            y: "20%",
        },
        visible: {
            opacity: 1,
            y: "0%",
            transition: {},
        },
    };

    return (
        <motion.div
            variants={containerVariant}
            animate={inView ? "visible" : "hidden"}
            ref={containerRef}
            className="inline"
            aria-label={text}
        >
            {/* {inView.toString()} */}
            {letters.map((l, i) => {
                if (l === " ") {
                    return <span className=""> </span>;
                }

                return (
                    <motion.span
                        variants={letterVariant}
                        key={i}
                        className="inline-block"
                        aria-hidden
                    >
                        {l}
                    </motion.span>
                );
            })}
        </motion.div>
    );
};

export default LetterAnim;
