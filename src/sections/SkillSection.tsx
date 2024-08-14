import SkillLabel from "../components/SkillLabel.tsx";
import SectionDivide from "../components/SectionDivide.tsx";
import {Dots} from "../components/Dots.tsx";
import logo from "../assets/outlineLogo.svg"
import {skills} from "../content/contents.ts";
const SkillSection = () => {
    return (
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <SectionDivide sectionName="Skills"/>
            <div className="flex flex-row justify-between">
                <div className="relative hidden lg:block w-[45%] max-w-[500px]">
                    <div className="absolute top-[10%] left-[10%]">
                        <Dots rows={5} columns={5} gap={3}/>
                    </div>
                    <div className="absolute bottom-[40%] left-[50%]">
                        <Dots rows={5} columns={5} gap={3}/>
                    </div>
                    <div className="absolute right-[10%] top-0 border size-20 "/>
                    <div className="absolute right-0 bottom-[10%] border size-14"/>
                    <div className="absolute w-28 bottom-[10%] left-[15%]"><img className="w-28" src={logo} alt="logo"/></div>
                </div>
                <div className="ml-auto flex justify-end gap-4">
                    <div className="flex flex-col">
                        <SkillLabel name={skills[0].name} content={skills[0].content}/>
                    </div>
                    <div className="flex flex-col">
                        <SkillLabel name={skills[1].name} content={skills[1].content}/>
                        <SkillLabel  name={skills[2].name} content={skills[2].content}/>
                    </div>
                    <div className="flex flex-col">
                        <SkillLabel  name={skills[3].name} content={skills[3].content}/>
                        <SkillLabel  name={skills[4].name} content={skills[4].content}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSection;