interface SkillLabelProps {
    name: string
    content: string
}

const SkillLabel = ({name, content}: SkillLabelProps) => {
    return (
        <div className=" max-w-48 border mb-4">
            <h3 className="font-semibold text-white p-2 border-b border-gray">{name}</h3>
            <p className="text-wrap p-2">{content}</p>
        </div>
    );
};

export default SkillLabel;