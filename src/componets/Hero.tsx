import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero  min-h-[500px] container mx-auto bg-[#15171D] mt-10 rounded-2xl p-4 md:p-6">
      <div className="hero-content flex-col lg:flex-row-reverse w-full items-start lg:items-center">
        <Image
          alt="Hero logo"
          src="/banner.png"
          className="max-w-md rounded-lg self-center"
          width={400}
          height={400}
        />
        <div className="space-y-2">
          <p className=" text-[#C2F800] text-[16px] font-sans font-semibold">
            WORKOUT LIBRARY
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-osw">
            TRAIN WITH INTENT. LOG <br className="hidden lg:block"/>
            EVERY SET.
          </h1>
          <p className="py-4 text-[#9CA3AF] font-sans font-semibold text-[15px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className="hidden lg:block"/>
            into today's plan, and watch the week's work add up.
          </p>
          <button className="btn btn-primary  w-full sm:w-[200px] font-sans text-[12px] font-bold text-black bg-[#C2F800] border-none">BROWSE WORKOUTS</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
