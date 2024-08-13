import {Link, useLocation} from "react-router-dom";
import logo from '../assets/logo.svg'
import {useEffect, useState} from "react";
import { motion } from "framer-motion";

export const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isOpen, setIsOpen] = useState<boolean>(false)
    useEffect(() => {
        document.body.classList.toggle('no-scroll', isOpen);
    }, [isOpen]);
    const toggleMenu = () => setIsOpen(prev => !prev)

    return (

        <motion.header
            variants={{
                hidden: { opacity: 0, y: -100 },
                show: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="show"
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-row justify-between items-center py-3 mt-3 w-full max-w-2xl lg:max-w-7xl mx-auto">
            <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                    <img className="h-4" src={logo} alt="logo"/>
                    <p className="ml-2 font-bold text-white">Pasha</p>
                </div>
                <div className="lg:gap-5 gap-3 hidden sm:flex">
                    <Link to="/">
                        <span className="text-primary">#</span><span
                        className={`hover:text-white transition-all duration-150 ease-linear ${currentPath === '/' ? 'text-white font-bold' : ''}`}>home</span>
                    </Link>
                    <Link to="/projects">
                        <span className="text-primary">#</span><span
                        className={`hover:text-white transition-all duration-150 ease-linear ${currentPath === '/projects' ? 'text-white font-bold' : ''}`}>works</span>
                    </Link>
                    <Link to="/about">
                        <span className="text-primary">#</span><span
                        className={`hover:text-white transition-all duration-150 ease-linear ${currentPath === '/about' ? 'text-white font-bold' : ''}`}>about-me</span>
                    </Link>
                    <Link to="/contacts">
                        <span className="text-primary">#</span><span
                        className={`hover:text-white transition-all duration-150 ease-linear ${currentPath === '/contacts' ? 'text-white font-bold' : ''}`}>contacts</span>
                    </Link>
                </div>
            </div>
            <div className="sm:hidden flex items-center">
                <button
                    className="relative w-10 h-8 flex items-center justify-center"
                    onClick={toggleMenu}
                >
                    <div className={`burger z-[60]  ${isOpen ? 'open' : ''}`}>
                        <div className="block w-6 h-0.5 bg-[#D9D9D9] mb-1 transition-transform duration-300 z-50"></div>
                        <div
                            className="block w-4 h-0.5 bg-[#D9D9D9] mb-1 ml-auto transition-transform duration-300 z-50"></div>
                    </div>
                </button>
                <div className={`menu-burger ${isOpen ? 'open' : ''}`}>
                    <ul className="list-none text-4xl pl-7 flex flex-col gap-8">
                        <li>
                            <Link to="/" onClick={() => setIsOpen(false)}>
                                <span className="text-primary">#</span><span
                                className={`hover:text-white transition-all duration-150 ease-linear ${currentPath === '/' ? 'text-white font-bold' : ''}`}>home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" onClick={() => setIsOpen(false)}>
                                <span className="text-primary">#</span><span
                                className={`hover:text-white transition-all duration-150 ease-linear ${currentPath === '/projects' ? 'text-white font-bold' : ''}`}>works</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => setIsOpen(false)}>
                                <span className="text-primary">#</span><span
                                className={`hover:text-white transition-all duration-150 ease-linear ${currentPath === '/about' ? 'text-white font-bold' : ''}`}>about-me</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts" onClick={() => setIsOpen(false)}>
                                <span className="text-primary">#</span><span
                                className={`hover:text-white transition-all duration-150 ease-linear ${currentPath === '/contacts' ? 'text-white font-bold' : ''}`}>contacts</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.header>
    );
};
