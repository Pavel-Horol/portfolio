import {HeroSection} from "../sections/HeroSection.tsx";
import ProjectSection from "../sections/ProjectSection.tsx";
import AnimateOnScroll from "../components/AnimateOnScroll.tsx";

const Home = () => {

    return (
        <div className="flex flex-col gap-14">
            <HeroSection/>
                <AnimateOnScroll>
                    <ProjectSection/>
                </AnimateOnScroll>
            <AnimateOnScroll variant={"left"}>
                <ProjectSection/>
            </AnimateOnScroll>
            <AnimateOnScroll variant={"right"}>
                <ProjectSection/>
            </AnimateOnScroll>
            <AnimateOnScroll variant={"top"}>
                <ProjectSection/>
            </AnimateOnScroll>
        </div>
    );
};

export default Home