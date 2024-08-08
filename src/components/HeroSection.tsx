import { motion } from "framer-motion";
import Portrait from "./Portrait.tsx";
import Quote from "./Quote.tsx";
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
};
const fadeInDown = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
};
const fadeInRight = {
    hidden: { opacity: 0, x: 150 },
    show: { opacity: 1, x: 0 },
}

export const HeroSection = () => {
    return (
        <div className="flex flex-col">
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="show"
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="flex md:flex-row flex-col mb-20 items-center justify-between gap-2"
            >
                <div className="mb-5 max-md:w-full ">
                    <h2 className="max-w-[500px] mb-8 font-semibold lg:text-3xl text-2xl ">Pasha is a <span
                        className="text-primary">fullstack developer</span></h2>
                    <p className="text-wrap mb-6 md:max-w-80">He crafts responsive websites where technologies meet creativity</p>
                    <button className="btn-primary">Contact me !!</button>
                </div>
                <motion.div
                    variants={fadeInDown}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <Portrait/>
                </motion.div>
            </motion.div>
            <motion.div
                variants={fadeInRight}
                initial="hidden"
                animate="show"
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <Quote/>
            </motion.div>
        </div>
    );
};