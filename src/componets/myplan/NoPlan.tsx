import Link from "next/link";
import React from "react";

const NoPlan = () => {
  return (
    <div className="px-5 py-20 flex justify-center items-center flex-col mt-10 gap-2 border-2 border-dashed rounded-2xl">
      <p className="text-3xl font-bold text-white">NOTHING HERE YET</p>
      <p className=" text-[14px] text-center mb-5 text-[#A1A1AA] font-sans font-normal">Browse the library and add a lift to get today moving.</p>
      <Link href={"/"}>
        <button className="btn shadow-none py-0 bg-[#C2F800] text-[12px] border-none md:text-[15px] px-3 md:px-8 rounded-3xl ">
          Go to Workouts
        </button>
      </Link>
    </div>
  );
};

export default NoPlan;
