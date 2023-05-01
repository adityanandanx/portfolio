"use client";
import { FC } from "react";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";
interface SmoothScrollWrapperProps {
    children?: React.ReactNode;
}

const SmoothScrollWrapper: FC<SmoothScrollWrapperProps> = ({ children }) => {
    const lenis = useLenis(({}) => {
        // called every scroll
    });

    return (
        <ReactLenis root options={{}}>
            {children}
        </ReactLenis>
    );
};

export default SmoothScrollWrapper;
