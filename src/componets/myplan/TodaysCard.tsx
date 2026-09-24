"use client";
import { exerciseContext, Icontext } from "@/context/ExerciseContext";
import { Iexcercise } from "@/types/Excercise";
import Image from "next/image";
import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { FaFire, FaRegClock } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const TodaysCard = () => {
  const { todaysPlan }= useContext(exerciseContext);

  console.log(todaysPlan);

  return (
    <>
      {todaysPlan.map((exercise:Iexcercise) => {
        return (
          <div key={exercise.id} className="lg:flex space-y-4 lg:space-y-0 gap-5 justify-between   mt-10 bg-[#1A1D23] rounded-3xl p-4">
            <Image
              src={`${exercise.image}`}
              alt="alt image"
              width={580}
              height={580}
              className="w-full h-[150px] lg:w-[150px] md:h-[100px] object-cover  text-center rounded-2xl"
            ></Image>

            <div className=" grow text-white space-y-2">
              <p className="text-2xl ">{exercise.name}</p>
              <p className="font-sans text-[#8A92A0] -mt-2">{exercise.equipment}</p>
              <div className="flex text-[15px] gap-4 justify-start font-sans text-[#9CA3AF] font-semibold">
                <span className="flex items-center gap-1 ">
                  <FaRegClock className="text-[#C2F800] text-[15px] storke-2" />{" "}
                  {exercise.duration} min
                </span>
                <span className="flex items-center gap-1">
                  <FaFire className="text-[#C2F800] text-[15px]" /> {exercise.caloriesBurned} kcal
                </span>
                <span className="flex items-center gap-1">
                  <CiStar className="text-[#C2F800] text-[18px] stroke-2" /> {exercise.rating}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <button className="btn  btn-outline hover:bg-[#1A1D23] border-2 border-[#374151] text-white font-sans font-normal px-8 rounded-3xl">
                View Details
              </button>
              <button className="btn bg-[#C2F800] border-none text-[15px] px-8 rounded-3xl ">
                <MdDone className="text-[16px]" />
                Mark as Done
              </button>
              <RxCross2 className="text-[#8A92A0] text-2xl cursor-pointer" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodaysCard;
