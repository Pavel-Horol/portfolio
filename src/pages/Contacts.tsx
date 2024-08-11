import {motion, useIsPresent} from "framer-motion";

const Contacts = () => {
    const isPresent = useIsPresent()
    return (
        <div>
            Contacts Page
            <motion.div
                initial={{x: "-100%"}}
                animate={{x: "100%", transition: {duration: 1, ease: "circOut"}}}
                style={{originX: isPresent ? 0 : 1}}
                className="privacy-screen"
            />
        </div>
    );
};

export default Contacts;