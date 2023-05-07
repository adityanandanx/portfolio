import { FC } from "react";

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
    return (
        <div className="fixed inset-0 flex items-center flex-col justify-center z-30 bg-stone-100 dark:bg-stone-800 font-Syne font-extrabold">
            <div className="grid grid-cols-1">
                {Array.from({ length: 5 }).map((val, i) => (
                    <span className="animate-spin3d" key={i}>
                        Loading...
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Loading;
