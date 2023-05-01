import { MutableRefObject, Ref, useEffect, useState } from "react";
import {
    AnimatePresence,
    PanInfo,
    motion,
    useAnimation,
    useAnimationControls,
} from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Testimonial, { ITestimonial } from "./Testimonial";
import Button from "@/components/ui/Button";

interface TestimonialSliderProps {
    testimonials: ITestimonial[];
    ref?: Ref<any>;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
    testimonials,
    ref,
}) => {
    const controls = useAnimationControls();

    async function handleDragEnd(
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -100 || velocity < -500) {
            await nextTestimonial();
        } else {
            await previousTestimonial();
        }
    }
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const nextTestimonial = async () => {
        const nextIndex =
            currentTestimonialIndex === testimonials.length - 1
                ? 0
                : currentTestimonialIndex + 1;
        // await controls.start()
        await controls.start({ opacity: 0 });
        // controls.set({ x: "50%" });
        setCurrentTestimonialIndex(nextIndex);
        await controls.start({ opacity: 1 });
    };

    const previousTestimonial = async () => {
        const previousIndex =
            currentTestimonialIndex === 0
                ? testimonials.length - 1
                : currentTestimonialIndex - 1;
        await controls.start({ opacity: 0 });
        // controls.set({ x: "-50%" });
        setCurrentTestimonialIndex(previousIndex);
        await controls.start({ opacity: 1 });
    };

    useEffect(() => {}, []);

    return (
        <motion.div
            ref={ref}
            className="flex w-full items-center justify-center"
        >
            <Button
                variant={"secondary"}
                brightness={"dim"}
                className="text-5xl p-0 sm:p-5"
                onClick={previousTestimonial}
            >
                <MdChevronLeft />
            </Button>
            <AnimatePresence mode={"wait"}>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    whileHover={{ cursor: "grab" }}
                    key={currentTestimonialIndex}
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: "0%" }}
                    exit={{ opacity: 0, y: "0%" }}
                    // animate={controls}
                    className="w-full"
                >
                    <Testimonial
                        testimonial={testimonials[currentTestimonialIndex]}
                    />
                </motion.div>
            </AnimatePresence>
            <Button
                variant={"secondary"}
                brightness={"dim"}
                className="text-5xl p-0 sm:p-5"
                onClick={nextTestimonial}
            >
                <MdChevronRight />
            </Button>
        </motion.div>
    );
};

export default TestimonialSlider;
