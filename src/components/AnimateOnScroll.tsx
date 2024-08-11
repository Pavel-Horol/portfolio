import React from 'react';
import { motion } from 'framer-motion';
import {useInView} from "react-intersection-observer";

const fromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};
const fromTop = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0 },
};
const fromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
};
const fromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
};
const variants = {
    'top': fromTop,
    'bottom': fromBottom,
    'left': fromLeft,
    'right': fromRight
}

interface AnimateOnScrollProps { children: React.ReactNode, variant?: 'top' | 'bottom' | 'left' | 'right' }

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, variant = 'bottom' }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants[variant]}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimateOnScroll;
