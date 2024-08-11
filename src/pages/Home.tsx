import {HeroSection} from "../sections/HeroSection.tsx";
import ProjectSection from "../sections/ProjectSection.tsx";
import AnimateOnScroll from "../components/AnimateOnScroll.tsx";
import SkillSection from "../sections/SkillSection.tsx";
import AboutMeSection from "../sections/AboutMeSection.tsx";
import ContactsSection from "../sections/ContactsSection.tsx";
import {Dots} from "../components/Dots.tsx";

const Home = () => {

    return (
        <div className="flex flex-col gap-20 max-w-2xl lg:max-w-7xl -z-20 mx-auto">
            <HeroSection/>
            <div className="max-sm:hidden flex flex-col gap-20 ">
                <div>
                    <div className=" hidden md:block absolute left-0 translate-y-full translate-x-3"><Dots rows={5} columns={2}/> </div>
                    <div className=" hidden lg:block absolute border size-40 right-0 translate-x-1/2 translate-y-[170%]"/>
                    <AnimateOnScroll variant="right">
                        <ProjectSection/>
                    </AnimateOnScroll>
                </div>
                <div>
                    <AnimateOnScroll variant="left">
                        <SkillSection/>
                    </AnimateOnScroll>
                </div>
                <div>
                    <div className=" hidden lg:block absolute left-0 -translate-x-1/2 translate-y-[150%] size-40 border"></div>
                    <div className=" hidden md:block absolute right-0 translate-y-[550%]"><Dots rows={5} columns={4}/></div>
                    <AnimateOnScroll variant="right">
                        <AboutMeSection/>
                    </AnimateOnScroll>
                </div>
                <div>
                    <div className="hidden md:block absolute left-0 translate-y-[110%]"><Dots rows={5} columns={3}/> </div>
                    <AnimateOnScroll variant="left">
                        <ContactsSection/>
                    </AnimateOnScroll>
                </div>
            </div>
        </div>
    );
};

export default Home