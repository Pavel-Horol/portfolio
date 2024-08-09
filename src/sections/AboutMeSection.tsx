import dude from '../assets/aboutMeHuman.png'
import SectionDivide from "../components/SectionDivide.tsx";
import {Link} from "react-router-dom";

const AboutMeSection = () => {
    return (
        <div className="">
            <SectionDivide sectionName={"about-me"}/>
            <div className="flex flex-row items-center justify-between">
                <div className=" max-w-[500px]">
                    <h3 className="leading-6 mb-8">Hello, i’m Pasha</h3>
                    <p className="leading-6 mb-8" >I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
                    <p className="leading-6 mb-8" >Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                    <button className="btn-primary font-medium py-2 px-4"><Link to={"/about"}>{"Read more ->"}</Link></button>
                </div>
                <div >
                    <img className="min-w-52" src={dude} alt="dude"/>
                    <div className="mx-auto w-11/12 border-b border-primary"></div>
                </div>
            </div>

        </div>
    );
};

export default AboutMeSection;