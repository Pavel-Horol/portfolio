import {HeroSection} from "../components/HeroSection.tsx";
import ProjectSection from "../components/ProjectSection.tsx";

const Home = () => {
    return (
        <div className="flex flex-col gap-14">
            <HeroSection/>
            <ProjectSection/>
        </div>
    );
};

export default Home