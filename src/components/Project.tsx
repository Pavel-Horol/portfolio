import photo from '../assets/project.jpg'

interface ProjectProps {
   tags?: string
   label?: string
   desc?: string
   image?: string
}

export const Project = ({
     tags = 'HTML SCSS TS',
    label = 'Cool site',
    desc = 'Description for cool site',
    image = photo
}:ProjectProps) => {
    return (
        <div className="flex flex-col h-fit w-fit border">
            <img className="w-[330px]" src={image} alt="project photo"/>
            <p className="p-2 border-b text-wrap">{tags}</p>
            <div className="p-4">
                <h3 className="font-medium text-2xl text-white">{label}</h3>
                <p>{desc}</p>
                <div className="flex flex-row justify-start gap-4">
                    <button className="btn-primary">Live</button>
                    <button className="btn-gray">Cached</button>
                </div>
            </div>
        </div>
    );
};