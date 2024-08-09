import SectionDivide from "../components/SectionDivide.tsx";
import email from '../assets/Email.svg'
import discord from '../assets/Discord.svg'
import telegram from '../assets/Telegram.svg'
const ContactsSection = () => {
    return (
        <div>
           <SectionDivide sectionName={"contacts"}/>
            <div className="flex flex-row justify-between gap-4">
                <p className="max-w-[500px]">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                <div className="p-4 border w-fit max-md:text-sm">
                    <h4 className="mb-4 font-semibold text-white">Message me here</h4>
                    <div className="flex flex-row items-center mb-2 gap-2 text-ellipsis overflow-hidden"><img src={email} alt="email"/>pashahorolskij4@gmail.com</div>
                    <div className="flex flex-row items-center mb-2 gap-2"><img src={discord} alt="discord"/><p>salvador9380</p></div>
                    <div className="flex flex-row items-center gap-2"><a href="https://t.me/pavel_khorol" target="_blank"><img src={telegram} alt="telegram"/></a><p>@pavel_khorol</p></div>
                </div>
            </div>
        </div>
    );
};

export default ContactsSection;