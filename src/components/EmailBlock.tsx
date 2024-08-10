import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
const CopyBlock = ({ icon, text }: {icon: string, text: string}) => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
            })
    };

    return (
        <div
            onClick={handleCopyEmail}
            className="relative hover:text-white flex cursor-pointer flex-row items-center mb-2 gap-2 "
        >
            <img src={icon} alt="email" />
            <p className="truncate">{text}</p>
            <AnimatePresence>
                {copied && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 0 }}
                        animate={{ opacity: 1, scale: 1, y: -40 }}
                        exit={{ opacity: 0,}}
                        transition={{ duration: 0.2, ease: "easeInOut", exit:{duration: 0.1}}}
                        className={`absolute top-[0%] left-1/2 translate-x-1/2  bg-gray text-white p-2 rounded-md shadow-md`}>
                        Copied!
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CopyBlock;
