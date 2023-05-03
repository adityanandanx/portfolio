"use client";
import { FC } from "react";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";
import useBlobity from "blobity/lib/react/useBlobity";
interface SmoothScrollWrapperProps {
    children?: React.ReactNode;
}

const SmoothScrollWrapper: FC<SmoothScrollWrapperProps> = ({ children }) => {
    const lenis = useLenis(({}) => {
        // called every scroll
    });
    const blobity = useBlobity({
        licenseKey: "opensource",
        invert: true,
        // dotColor: "#000000",
        tooltipPadding: 10,
        radius: 8,
        opacity: 0.1,
        magnetic: false,
    });

    return (
        // <ReactLenis root options={{}}>
        <>{children}</>
        // </ReactLenis>
    );
};

export default SmoothScrollWrapper;
