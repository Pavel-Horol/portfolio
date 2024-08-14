import photo from '../assets/project.jpg'

interface ProjectProps {
   tags?: string
   name?: string
   description?: string
   img?: string,
    live?: string,
    cached?: string
}

export const Project = ({
     tags = 'HTML SCSS TS',
    name = 'Cool site',
    description = 'Description for cool site',
    img = photo,
    live,
    cached,
}:ProjectProps) => {
    return (
        <div className="flex flex-col h-fit  border">
            <img className="w-auto" src={img} alt="project photo"/>
            <p className="p-2 border-b text-wrap">{tags}</p>
            <div className="p-4">
                <h3 className="font-medium text-2xl mb-4  text-white">{name}</h3>
                <p className="mb-4">{description}</p>
                <div className="flex flex-row justify-start gap-4">
                    {
                        live &&
                            <button className="btn-primary"><a target="_blank" href={live}>{"Live <~>"}</a></button>
                    }
                    {
                        cached &&

                        <button className="btn-gray"><a target="_blank" href={cached}>{"Cached >="}</a></button>
                    }
                </div>
            </div>
        </div>
    );
};