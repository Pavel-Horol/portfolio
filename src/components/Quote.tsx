import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll.tsx";

const Quote = () => {
    return (
        <>
            <motion.div
                variants={{
                    hidden: { x: 150 },
                    show: { x: 50 },
                }}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.1 }}
                className={`hidden md:block absolute right-0 translate-x-1/2 border size-24 z-30 `}></motion.div>
            <AnimateOnScroll variant="right">
                <div
                    className=" mx-auto w-fit flex flex-col">
                    <div className="p-8 border border-gray quote-block">
                        <p className="font-medium text-[24px] text-white">With great power comes great electricity
                            bill</p>
                    </div>
                    <div className="border-b border-l border-r p-4 self-end">
                        <p className="font-normal md:text-2xl text-white">- Dr. Who</p>
                    </div>
                </div>

            </AnimateOnScroll>
        </>
    );
};

export default Quote;