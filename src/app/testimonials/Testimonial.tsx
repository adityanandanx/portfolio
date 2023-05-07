import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { FaQuoteLeft } from "react-icons/fa";

import johnSrc from "./john.webp";
export interface ITestimonial {
    author?: string;
    message: string;
    imgSrc?: StaticImageData | string;
    designation?: string;
}

interface TestimonialProps {
    testimonial: ITestimonial;
}

const Testimonial: FC<TestimonialProps> = ({ testimonial }) => {
    const { message, author, imgSrc, designation } = testimonial;
    return (
        <div className="relative min-w-fit max-w-lg w-full p-5 md:p-10 flex flex-col gap-5">
            <h3 className="text-2xl md:text-3xl font-medium">{message}</h3>
            <div className="flex gap-3 items-center justify-end text-sm">
                <Image
                    className="rounded-full aspect-square object-cover"
                    src={imgSrc || johnSrc}
                    alt={author || "Anonymous Client"}
                    width={48}
                    height={48}
                />

                <div className="flex flex-wrap gap-0 justify-end items-end text-right">
                    <h4 className="font-bold">
                        {author || "Anonymous Client"}
                    </h4>
                    {designation && (
                        // <span className="flex gap-2 pl-2">
                        <p className="text-stone-400 pl-1">- {designation}</p>
                        // </span>
                    )}
                </div>
            </div>
            <FaQuoteLeft className="absolute -top-5 -left-5 md:top-0 md:left-0 text-3xl" />
        </div>
    );
};

export default Testimonial;
