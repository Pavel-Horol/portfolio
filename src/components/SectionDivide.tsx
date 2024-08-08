
interface SectionDivideProps {
    sectionName: string
    width: number
}

const SectionDivide = ({sectionName="Section name", width = 500}: SectionDivideProps) => {
    return (
        <div className="flex flex-row items-center mb-12">
            <h2 className="text-center text-4xl font-medium text-white mr-4"><span className="text-primary">#</span>{sectionName}</h2>
            <div
                className={`h-px bg-primary`}
                style={{width: `${width}px`}}
            ></div>
        </div>
    );
};

export default SectionDivide;