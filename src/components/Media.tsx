import {FC, ReactNode} from "react";

interface MediaProps {
    text: string
    link: string
    children: ReactNode
}


const Media:FC<MediaProps> = ({children, link, text}) => {
    return (
        <div className="hover:text-white max-md:w-3/5">
            <a href={link} target={"_blank"} className="flex flex-row items-center gap-3 p-2 text-xl leading-none cursor-pointer">
                {children}
                <p>{text}</p>
            </a>

        </div>
    );
};

export default Media;