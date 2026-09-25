'use client'

import { useCustomContext } from "@/context/ExerciseContext";
import Link from "next/link";
import React from "react";

const Button = () => {

  const {todaysPlan,savedPlan}=useCustomContext();

  return (
    
      <div className="navbar-end col-span-1 gap-2 md:gap-8">
        <Link href={"/my-plan"}>
          <button className="flex cursor-pointer items-center">
            <p className="text-[#eff1f3] cursor-pointer font-semibold text-[13px] md:text-[18px] ">
              Plan
            </p>{" "}
            <div className="badge badge-secondary rounded-3xl font-bold text-[12px] md:text-[16px]  md:w-3 ml-2 p-2 md:p-4 bg-[#C2F800] border-0 text-black">
              {todaysPlan.length}
            </div>
          </button>
        </Link>
        <Link href={"/my-plan"}>
          <button className="flex cursor-pointer items-center ">
            <p className="text-[#D1D5DB] text-[13px] md:text-[18px] ">Saved</p>{" "}
            <div className="badge  rounded-3xl  font-bold text-[12px] md:text-[16px]  md:w-3 ml-2 p-2 md:p-4 bg-[#0C0D10] text-[#D1D5DB] border-2 border-[#2D313B]">
              {savedPlan.length}
            </div>
          </button>
        </Link>
      </div>
    
  );
};

export default Button;
