import dude from '../assets/human.png'
import outlineLogo from '../assets/outlineLogo.svg'
import {Dots} from "./Dots.tsx";
const Portrait = () => {
    return (
        <div className="relative ">
            <img className="relative z-20 max-sm:w-full" alt="humanoid" src={dude}/>
            <img className="absolute top-1/4 z-10 size-44  md:top-[15%] lg:top-1/4 max-[360px]:size-24 " alt="logo" src={outlineLogo}/>
            <div className="absolute right-[5%] bottom-1/4 z-20">
                <Dots columns={5} rows={5}/>
            </div>
                <div
                    className="curr-working w-11/12 relative left-[10px] flex flex-row items-center border border-gray p-2">
                    <div className="size-4 bg-primary mr-2.5"></div>
                    <p className="">Current working on <span className="text-white font-semibold">Portfolio</span></p>
                </div>
        </div>
    );
};

export default Portrait;