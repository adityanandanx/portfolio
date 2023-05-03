import { Syne } from "next/font/google";
import { FC } from "react";

const syne = Syne({ subsets: ["latin"], weight: ["800"] });
interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
    return (
        <div
            style={syne.style}
            className="fixed inset-0 flex items-center flex-col justify-center"
        >
            <h1 className="opacity-5 absolute inset-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl flex items-center justify-center">
                <span className="aspect-square border-4 border-stone-900 rounded-xl p-10 flex items-center justify-center">
                    Loading...
                </span>
            </h1>
            <div className="grid grid-cols-1">
                {Array.from({ length: 5 }).map((val, i) => (
                    <span
                        className="animate-spin3d"
                        key={i}
                        // initial={{
                        //     rotateY: "0deg",
                        //     rotateX: "0deg",
                        //     rotateZ: "0deg",
                        // }}
                        // animate={{
                        //     rotateY: "360deg",
                        //     rotateX: "360deg",
                        //     rotateZ: "360deg",
                        // }}
                        // transition={{
                        //     repeat: Infinity,
                        //     type: "spring",
                        //     stiffness: 10,
                        // }}
                    >
                        Loading...
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Loading;
