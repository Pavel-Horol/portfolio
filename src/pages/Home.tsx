import {HeroSection} from "../sections/HeroSection.tsx";
import ProjectSection from "../sections/ProjectSection.tsx";
import AnimateOnScroll from "../components/AnimateOnScroll.tsx";
import SkillSection from "../sections/SkillSection.tsx";
import AboutMeSection from "../sections/AboutMeSection.tsx";
import ContactsSection from "../sections/ContactsSection.tsx";

const Home = () => {

    return (
        <div className="flex flex-col gap-20 max-w-2xl lg:max-w-7xl -z-20 mx-auto">
            <HeroSection/>
            <div className="max-sm:hidden flex flex-col gap-20 ">
                <AnimateOnScroll variant="right">
                    <ProjectSection/>
                </AnimateOnScroll>
                <AnimateOnScroll variant="left">
                    <SkillSection/>
                </AnimateOnScroll>
                <AnimateOnScroll variant="right">
                    <AboutMeSection/>
                </AnimateOnScroll>
                <AnimateOnScroll variant="left">
                    <ContactsSection/>
                </AnimateOnScroll>
            </div>
        </div>
    );
};

export default Home