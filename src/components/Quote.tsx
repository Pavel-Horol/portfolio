const Quote = () => {
    return (
        <div className=" mx-auto w-fit flex flex-col">
            <div className="p-8 border border-gray quote-block">
                <p className="font-medium text-[24px] text-white">With great power comes great electricity bill</p>
            </div>
            <div className="border-b border-l border-r p-4 self-end">
                <p className="font-normal md:text-2xl text-white">- Dr. Who</p>
            </div>
        </div>
    );
};

export default Quote;