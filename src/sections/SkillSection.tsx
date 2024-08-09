import SkillLabel from "../components/SkillLabel.tsx";
import SectionDivide from "../components/SectionDivide.tsx";

const SkillSection = () => {
    return (
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <SectionDivide sectionName="Skills"/>
            <div className="ml-auto flex justify-end gap-4">
                <div className="flex flex-col">
                    <SkillLabel name="Languages" content="TypeScript Lua Python JavaScript"/>
                </div>
                <div className="flex flex-col">
                    <SkillLabel name="Databases" content="PostgreSQL MongoDB"/>
                    <SkillLabel name="Other" content="HTML CSS Tailwindcss"/>
                </div>
                <div className="flex flex-col">
                    <SkillLabel name="Tools" content="Neovim Linux Insomnia Git Doker"/>
                    <SkillLabel name="Frameworks" content="React Redux Express NestJs"/>
                </div>
            </div>
        </div>
    );
};

export default SkillSection;