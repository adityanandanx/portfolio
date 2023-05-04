import { Variants, motion, useInView } from "framer-motion";
import { FC, useRef } from "react";

interface LetterAnimProps {
    text: string;
}

const LetterAnim: FC<LetterAnimProps> = ({ text }) => {
    // const letters = text.split("");
    const words = text.split(" ");

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
            className="flex flex-wrap"
            aria-label={text}
            role="heading"
        >
            {/* {inView.toString()} */}
            {words.map((word, i) => {
                const letters = word.split("");
                return (
                    <div aria-hidden key={i} className="flex">
                        {letters.map((letter, j) => {
                            return (
                                <motion.span
                                    variants={letterVariant}
                                    key={j}
                                    className="inline-block"
                                    aria-hidden
                                >
                                    {letter}
                                </motion.span>
                            );
                        })}
                        &nbsp;
                    </div>
                );
            })}
        </motion.div>
    );
};

export default LetterAnim;
