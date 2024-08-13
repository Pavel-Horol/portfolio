import { motion } from "framer-motion";
import Portrait from "../components/Portrait.tsx";
import Quote from "../components/Quote.tsx";
import {useEffect, useState} from "react";
import MessagePopup from "../components/MessagePopup.tsx";

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isOpen);
        if (isOpen){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    }, [isOpen]);
    const toggleMenu = () => setIsOpen(prev => !prev)
    return (
        <div className="flex flex-col">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0 },
                }}
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
                    <button onClick={toggleMenu} className="btn-primary">Contact me !!</button>
                </div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        show: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <Portrait/>
                </motion.div>
            </motion.div>
            <motion.div>
                <Quote/>
            </motion.div>
            {isOpen &&
                <MessagePopup toggleMenu={toggleMenu}/>
            }
        </div>
    );
};

export default HeroSection