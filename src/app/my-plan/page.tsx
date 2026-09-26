"use client";

import NoPlan from "@/componets/myplan/NoPlan";
import SavedPlan from "@/componets/myplan/SavedPlan";
import TodaysCard from "@/componets/myplan/TodaysCard";
import { useCustomContext } from "@/context/ExerciseContext";
import React, { useState } from "react";

const Page = () => {
  const { todaysPlan, savedPlan } = useCustomContext();

  // const [renderData, setRenderData] = useState(todaysPlan);

  const [currentTab, setTab] = useState("today");

  const [sortType, setSortType] = useState("duration");


  const renderData = [
    ...(currentTab === "today" ? todaysPlan : savedPlan),
  ].sort((a, b) => {
    if (sortType === "duration") {
      return b.duration - a.duration;
    }

    if (sortType === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  return (
    <div className="container mx-auto px-5 mt-5 mb-10">
      <p className="text-4xl text-white">MY PLAN</p>
      <p className="text-[#8A92A0] text-[14px] mt-2 font-normal font-sans">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* head */}

      <div className="flex flex-col md:flex-row bg-[#1A1D23] text-[#8A92A0] gap-5 justify-between px-5 py-3 rounded-2xl mt-5">
        <div className=" border-b-2 md:border-r-2 md:border-b-0 border-dashed border-[#232732] w-full">
          <span className="font-sans font-normal">Exercises</span>
          <p className="mt-2 mb-3 text-5xl text-[#C2F800] font-semibold">
            {renderData.length}
          </p>
        </div>
        <div className="border-b-2 md:border-r-2 md:border-b-0 border-dashed border-[#232732] w-full">
          <span className="font-sans font-normal">Miniutes</span>
          <p className="mt-2 mb-3 text-5xl text-white font-semibold">
            {renderData.reduce((acc, e) => {
              return acc + e.duration;
            }, 0)}
          </p>
        </div>
        <div className="w-full">
          <span className="font-sans font-normal">Calories</span>

          <p className="mt-2  mb-3 text-5xl text-white font-semibold">
            {renderData.reduce((acc, e) => {
              return acc + e.caloriesBurned;
            }, 0)}
          </p>
        </div>
      </div>

      <div className="md:flex  justify-between mt-10  md:mb-0">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box bg-[#151921] w-[180px] py-2">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab text-[18px]  ${currentTab === "today" ? "bg-[#0F1115] text-[#C4F000]" : "text-white"} `}
            aria-label="Today's plan"
            onChange={() => {
              setTab("today");
            }}
            checked={currentTab === "today" ? true : false}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab  text-[18px] ${currentTab === "saved" ? "bg-[#0F1115] text-[#C4F000]" : "text-white"}`}
            aria-label="Saved"
            onChange={() => {
              setTab("saved");
            }}
            checked={currentTab === "saved" ? true : false}
          />
        </div>

        <div className="mt-5 md:mt-0 flex gap-5 items-center">
          <p className="text-2xl text-[#C2F800]">Sort By</p>
          <select
            defaultValue={sortType}
            className="select w-[200px] bg-transparent shadow-none border-2 border-[#374151] text-white rounded-3xl"
            onChange={(e) => {
              setSortType(e.target.value);
            }}
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {renderData.length === 0 ? (
        <NoPlan />
      ) : currentTab === "today" ? (
        <TodaysCard todaysPlan={renderData} />
      ) : (
        <SavedPlan savedPlan={renderData} />
      )}
    </div>
  );
};

export default Page;
