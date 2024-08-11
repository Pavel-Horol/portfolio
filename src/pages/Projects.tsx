import {motion, useIsPresent} from "framer-motion";

const Projects = () => {
    const isPresent = useIsPresent()
    return (
        <div>
            Projects page
            <motion.div
                initial={{x: "-100%"}}
                animate={{x: "100%", transition: {duration: 1, ease: "circOut"}}}
                exit={{x: "-100%", transition: {duration: 1,}}}
                style={{originX: isPresent ? 0 : 1}}
                className="privacy-screen"
            />
        </div>
    );
};

export default Projects;