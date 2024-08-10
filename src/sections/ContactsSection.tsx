import SectionDivide from "../components/SectionDivide.tsx";
import discord from '../assets/Discord.svg'
import CopyBlock from "../components/EmailBlock.tsx";
import emailIcon from "../assets/Email.svg"

const ContactsSection = () => {

    return (
        <div>
           <SectionDivide sectionName={"contacts"}/>
            <div className="flex flex-row justify-between gap-4">
                <p className="max-w-[500px]">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                <div className="p-4 border w-fit max-md:text-sm">
                    <h4 className="mb-4 font-semibold text-white">Message me here</h4>
                    <CopyBlock text={"pashahorolskij4@gmail.com"} icon={emailIcon}/>
                    <CopyBlock icon={discord} text={"salvador9380"}/>

                    <a href="https://t.me/pavel_khorol" target="_blank"
                       className="transition-colors duration-300 ease-linear text-gray hover:text-white">
                        <div className="flex flex-row items-center gap-2">


                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M27 15.5C27 18.55 25.7884 21.4751 23.6317 23.6317C21.4751 25.7884 18.55 27 15.5 27C12.45 27 9.52494 25.7884 7.36827 23.6317C5.2116 21.4751 4 18.55 4 15.5C4 12.45 5.2116 9.52494 7.36827 7.36827C9.52494 5.2116 12.45 4 15.5 4C18.55 4 21.4751 5.2116 23.6317 7.36827C25.7884 9.52494 27 12.45 27 15.5ZM15.9126 12.4899C14.7942 12.9556 12.5574 13.9187 9.20519 15.3792C8.66181 15.5949 8.37575 15.8076 8.34987 16.0146C8.30675 16.3639 8.74519 16.5019 9.34175 16.6903L9.59331 16.7693C10.1798 16.9605 10.9704 17.1833 11.3801 17.1919C11.7539 17.2006 12.1693 17.0482 12.6279 16.7319C15.7602 14.6174 17.3774 13.5493 17.478 13.5263C17.5499 13.5091 17.6505 13.4889 17.7166 13.5493C17.7842 13.6083 17.777 13.7218 17.7698 13.752C17.7267 13.9374 16.006 15.5359 15.1162 16.3639C14.8387 16.6227 14.6418 16.8053 14.6016 16.8469C14.5129 16.9375 14.4228 17.0267 14.3313 17.1143C13.7851 17.6404 13.3768 18.0343 14.3529 18.6783C14.8229 18.9888 15.1996 19.2432 15.5747 19.4991C15.983 19.778 16.3912 20.0554 16.9202 20.4033C17.0539 20.4896 17.1833 20.583 17.3084 20.6721C17.7842 21.0114 18.214 21.3161 18.7416 21.2673C19.0492 21.2385 19.3669 20.951 19.5279 20.0885C19.9088 18.0516 20.6578 13.6399 20.8302 11.8214C20.8408 11.6703 20.8345 11.5184 20.8116 11.3686C20.798 11.2478 20.7395 11.1364 20.6477 11.0567C20.5169 10.9664 20.361 10.9196 20.2021 10.923C19.7708 10.9302 19.1052 11.1616 15.9126 12.4899Z"
                                    fill="currentColor"/>
                            </svg>
                    <p className="hover:text-white">@pavel_khorol</p></div>
                    </a>
            </div>
        </div>
</div>
)
    ;
};

export default ContactsSection;