import {Project} from "./Project.tsx";
import SectionDivide from "./SectionDivide.tsx";
import {Link} from "react-router-dom";

const ProjectSection = () => {
    return (
        <div>
            <div className="flex flex-row justify-between ">
                <SectionDivide sectionName={"projects"} width={500}/>
                <div className="text-center text-white font-medium pt-2"><Link to="/projects">View all →</Link></div>
            </div>
            <div className="flex flex-wrap gap-4 mx-auto">
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    );
};

export default ProjectSection;