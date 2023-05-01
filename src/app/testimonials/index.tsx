"use client";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Testimonial from "./Testimonial";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import useWindowSize from "./useWindowSize";
import TestimonialSlider from "./TestimonialSlider";

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = ({}) => {
    const target = useRef(null);
    const inView = useInView(target, { margin: "-100px", once: true });

    return (
        <motion.div className="min-h-screen w-full gap-10 flex items-center justify-center outline-none">
            <motion.div
                ref={target}
                style={{
                    y: inView ? "0%" : "50%",
                    opacity: inView ? 1 : 0,
                    transition:
                        "opacity 700ms ease-out, transform 700ms ease-out",
                }}
                className="w-full h-full max-w-2xl"
            >
                <TestimonialSlider
                    testimonials={[
                        {
                            author: "John Doe",
                            message:
                                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, neque.",
                            designation: "CEO, Acme Industries",
                        },
                        {
                            author: "Jane Doe",
                            message: "Very good guy 1",
                            designation: "CEO, Acme Industries",
                        },
                        {
                            author: "John Doe 1",
                            message: "Very good guy 2",
                            designation: "CEO, Acme Industries",
                        },
                        {
                            author: "John Doe 2",
                            message: "Very good guy 3",
                            designation: "CEO, Acme Industries",
                        },
                    ]}
                />
            </motion.div>
        </motion.div>
    );
};

export default Testimonials;
