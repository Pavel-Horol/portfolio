import {motion, useIsPresent} from "framer-motion";
import dude from "../assets/aboutMeHuman.png";
import {Dots} from "../components/Dots.tsx";
import SkillLabel from "../components/SkillLabel.tsx";

const About = () => {
    const isPresent = useIsPresent()
    return (

        <div className="max-w-2xl lg:max-w-7xl mx-auto">
            <div>
                <h2 className="mb-4 text-white font-semibold text-3xl"><span className="text-primary">/</span>about-me</h2>
                <p className="text-white">Who am i?</p>
            </div>
            <div className="mb-24 flex max-md:flex-col flex-row items-center justify-between">
                <div className="max-w-[400px]">
                    <h3 className="leading-6 mb-8">Hello, i’m Pasha</h3>
                    <p className="leading-6 mb-8">I’m a self-taught front-end developer based in Kyiv, Ukraine.
                        I can develop responsive websites from scratch and raise them into modern user-friendly web
                        experiences.
                    </p>
                    <p className="leading-6 mb-8">
                        Transforming my creativity and knowledge into a websites has been
                        my passion for over a year. I have been helping various clients to establish their presence
                        online. I always strive to learn about the newest technologies and frameworks.
                    </p>
                </div>
                <div className="relative">
                    <img className="min-w-52" src={dude} alt="dude"/>
                    <div className="absolute top-[12%] -left-[7%]">
                        <Dots rows={5} columns={5}/>
                    </div>
                    <div className="absolute right-[5%] top-[50%]">
                        <Dots rows={4} columns={5}/>
                    </div>
                    <div className="mx-auto w-11/12 border-b border-primary"></div>
                </div>
            </div>
            <div className="mb-24">
                <h3 className="font-medium mb-8 text-2xl text-white"><span className="text-primary">#</span>skills</h3>
                <div className="flex flex-row items-start gap-4">
                    <SkillLabel name="Tools" content="Docker Docker Neovim Linux Insomnia Git Doker"/>
                    <SkillLabel name="Frameworks" content="React Redux Express NestJs"/>
                    <SkillLabel name="Databases" content="PostgreSQL MongoDB"/>
                    <SkillLabel name="Other" content="HTML CSS Tailwindcss SCSS Some more and also"/>
                    <SkillLabel name="Languages" content="TypeScript Lua Python JavaScript"/>
                </div>
            </div>
            <div>
                <h3 className="font-medium mb-6 text-2xl text-white"><span className="text-primary">#</span>my-fun-facts</h3>
                <div className="flex flex-wrap max-w-[650px] gap-4">
                    <p className="w-fit border p-2">I like winter more than summer</p>
                    <p className="w-fit border p-2">I often bike with my friends</p>
                    <p className="w-fit border p-2">I like pizza and pasta</p>
                    <p className="w-fit border p-2">I was in Egypt, Poland and Turkey</p>
                    <p className="w-fit border p-2">My favorite movie is The Green Mile</p>
                    <p className="w-fit border p-2">I am still in school</p>
                    <p className="w-fit border p-2">I don’t have any siblings</p>
                </div>
            </div>
            <motion.div
                initial={{x: "-100%"}}
                animate={{x: "100%", transition: {duration: 1, ease: "circOut"}}}
                exit={{x: "-100%", transition: {duration: 1,}}}
                style={{originX: isPresent ? 0 : 1}}
                className="privacy-screen"
            />
        </div>
    );
};

export default About