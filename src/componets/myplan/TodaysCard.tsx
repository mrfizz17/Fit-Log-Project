"use client";
import {
  exerciseContext,
  Icontext,
  useCustomContest,
} from "@/context/ExerciseContext";
import { Iexcercise } from "@/types/Excercise";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { FaFire, FaRegClock } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const TodaysCard = ({ todaysPlan }: { todaysPlan: Iexcercise[] }) => {
  console.log(todaysPlan);

  return (
    <>
      {todaysPlan.map((exercise: Iexcercise) => {
        return (
          <div
            key={exercise.id}
            className="lg:flex space-y-4 lg:space-y-0 gap-5 justify-between   mt-10 bg-[#1A1D23] rounded-3xl p-3"
          >
            <Image
              src={`${exercise.image}`}
              alt="alt image"
              width={580}
              height={580}
              className="w-full h-[150px] lg:w-[150px] md:h-[100px] object-cover  text-center rounded-2xl"
            ></Image>

            <div className=" grow text-white space-y-2">
              <p className="text-2xl ">{exercise.name}</p>
              <p className="font-sans text-[#8A92A0] -mt-2">
                {exercise.equipment}
              </p>
              <div className="flex text-[15px] gap-4 justify-start font-sans text-[#9CA3AF] font-semibold">
                <span className="flex items-center gap-1 ">
                  <FaRegClock className="text-[#C2F800] text-[15px] storke-2" />{" "}
                  {exercise.duration} min
                </span>
                <span className="flex items-center gap-1">
                  <FaFire className="text-[#C2F800] text-[15px]" />{" "}
                  {exercise.caloriesBurned} kcal
                </span>
                <span className="flex items-center gap-1">
                  <CiStar className="text-[#C2F800] text-[18px] stroke-2" />{" "}
                  {exercise.rating}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-5">
              <Link href={`workouts/details/${exercise.id}`}>
                <button className="btn py-0  btn-outline hover:bg-[#1A1D23] border-2 border-[#374151] text-white font-sans font-normal md:px-8 rounded-3xl">
                  View Details
                </button>
              </Link>

              
              <button className="btn shadow-none py-0 bg-[#C2F800] text-[12px] border-none md:text-[15px] px-3 md:px-8 rounded-3xl ">
                <MdDone className="md:text-[16px]" />
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
