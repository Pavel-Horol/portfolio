import {Project} from "../components/Project.tsx";
import SectionDivide from "../components/SectionDivide.tsx";
import {Link} from "react-router-dom";

const ProjectSection = () => {
    return (
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6  lg:max-w-7xl lg:px-8">
            <div className="flex flex-row justify-between w-full">
                <SectionDivide sectionName={"projects"}/>
                <div className="text-center text-white font-medium pt-2"><Link to="/projects">View all →</Link></div>
            </div>
            <div className="mt-6 grid max-sm:justify-items-center grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    );
};

export default ProjectSection;