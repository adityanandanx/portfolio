import { FC } from "react";
import Project from "./Project";

import triviaImg from "./images/trivia.png";
import todolistImg from "./images/todolist.png";
import cryptImg from "./images/cryptracker.png";

interface indexProps {}

const index: FC<indexProps> = ({}) => {
    return (
        <section className="flex flex-col items-center justify-between gap-[100vh]">
            <Project
                title="Todo List"
                desc="A todo with minimal design and fast hotkeys for everything."
                tags={["next", "react", "zustand", "tailwind", "radix"]}
                imgPath={todolistImg}
                github={"/"}
                live={"/"}
            />
            <Project
                className="bg-green-800 dark:bg-green-800 text-stone-50"
                title="Trivia"
                desc="Simple minimalistic trivia which consumes the Open Trivia Database (opentdb)"
                tags={["next", "react", "tailwind", "radix"]}
                imgPath={triviaImg}
                github={"/"}
                live={"/"}
            />
            <Project
                className="bg-purple-950 dark:bg-purple-950 text-stone-50"
                title="Cryptracker"
                desc="This web app displays daily, weekly, and monthly prices for a variety of digital currencies including Bitcoin and Ethereum."
                tags={["next", "react", "zustand", "tailwind", "radix"]}
                imgPath={cryptImg}
                github={"/"}
                live={"/"}
            />
        </section>
    );
};

export default index;
