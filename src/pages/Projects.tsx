import {motion, useIsPresent} from "framer-motion";
import ProjectSection from "../sections/ProjectSection.tsx";
import SmallProject from "../components/SmallProject.tsx";

const Projects = () => {
    const isPresent = useIsPresent()
    return (
        <div className="max-w-2xl lg:max-w-7xl mx-auto flex flex-col gap-12">
            <div>
                <h2 className="mb-4 text-white font-semibold text-3xl"><span className="text-primary">/</span>projects
                </h2>
                <p className="text-white ">List of my projects</p>
            </div>
            <div>
                <h3 className="text-3xl text-white  font-medium mb-6"><span className="text-primary">#</span>complete-app</h3>
                <ProjectSection show={false}/>
            </div>
            <div>
                <h3 className="text-3xl text-white  font-medium mb-6"><span className="text-primary">#</span>small-projects</h3>
                <div className="mt-6 grid justify-items-stretch grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    <SmallProject/>
                    <SmallProject/>
                    <SmallProject/>
                    <SmallProject/>
                    <SmallProject/>
                </div>
            </div>

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