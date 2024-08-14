import {Project} from "../components/Project.tsx";
import SectionDivide from "../components/SectionDivide.tsx";
import {Link} from "react-router-dom";
import {FC} from "react";
import {projects} from "../content/contents.ts";

interface ProjectSectionProps {
    show?: boolean
}

const ProjectSection:FC<ProjectSectionProps> = ({show = true}) => {
    return (
        <>
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                {show &&
                    <div className="flex flex-row justify-between w-full">
                        <SectionDivide sectionName={"projects"}/>
                        <div className="text-center text-white font-medium pt-2"><Link
                            to="/projects">{"View all ~~>"}</Link></div>
                    </div>
                }
                <div
                    className="mt-6 grid justify-items-stretch grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {projects.map(({img, name, tags, description, live, cached}, index) => (
                        <Project
                            img={img}
                            name={name}
                            description={description}
                            live={live}
                            tags={tags}
                            cached={cached}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectSection;