import {Outlet} from "react-router-dom";
import {Header} from "../components/Header.tsx";
import {Footer} from "../components/Footer.tsx";
import MediaLabel from "../components/MediaLabel.tsx";
import {AnimatePresence} from "framer-motion";

export const Layout = () => {
    return (
        <div className="bg-background relative w-full overflow-x-hidden">

            <MediaLabel/>
            <div className="z-50 sm:w-4/5 w-11/12 min-h-screen mx-auto flex flex-col gap-14">
                <Header/>
                <main className="flex-auto">
                    <AnimatePresence
                    mode='wait'
                    >
                        <Outlet/>
                    </AnimatePresence>
                </main>
                <Footer/>
            </div>
        </div>
    );
};
