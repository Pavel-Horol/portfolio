import {FC} from "react";

interface SmallProjectProps {
    tags?: string
    name?: string
    description?: string
    link?: string
}

const SmallProject:FC<SmallProjectProps> = (
    {
        name = "Name",
        tags = "Tags tags tags",
        description = "some description",
        link = "#"
    }) => {
    return (
        <div className="border">
            <p className="border-b p-2">{tags}</p>
            <div className="p-4">
                <h3 className="mb-3 font-medium text-white text-2xl">{name}</h3>
                <p className="mb-3">{description}</p>
                <button className="btn-primary"><a href={link}>{'Github <~>'}</a></button>
            </div>
        </div>
    );
};

export default SmallProject;