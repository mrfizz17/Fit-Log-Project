import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaFire, FaRegClock } from "react-icons/fa";

const LibrayCard = ({ excercise }) => {
  return (
    <div className="card bg-[#15171D] border border-transparent shadow-lg  hover:border-[#C2F800] transition-colors duration-500">
      <figure className="h-50 w-full">
        <Image
          src={`${excercise.image}`}
          alt={`${excercise.name}`}
          width={400}
          height={500}
          className=" w-full h-full object-cover"
        />
      </figure>
      <div className="card-body gap-0">
        <h2 className="card-title">
          {excercise.muscleGroups.map((muscle,ind) => {
            return (
              <div key={ind} className="badge badge-secondary bg-[#C2F800] border-none text-black  text-[12px] px-4 rounded-3xl">
                {muscle}
              </div>
            );
          })}
        </h2>
        <p className="text-[18px] text-white font-semibold mt-2">
          {excercise.name}
        </p>
        <p className="text-[11px] text-[#9CA3AF]">{excercise.equipment}</p>
        <div className="divider  h-[0.5px] mt-2 mb-3 bg-[#C2F800] "></div>
        <div className="flex text-[15px] gap-4 justify-start font-sans text-[#9CA3AF] font-semibold">
          <span className="flex items-center gap-1 ">
            <FaRegClock className="text-[#C2F800] text-[15px] storke-2" /> {excercise.duration} {" "}
            min
          </span>
          <span className="flex items-center gap-1">
            <FaFire className="text-[#C2F800] text-[15px]" /> {excercise.caloriesBurned} {" "} kcal
          </span>
          <span className="flex items-center gap-1">
        <CiStar className="text-[#C2F800] text-[18px] stroke-2" /> {" "} {excercise.rating} 
          </span>
        </div>
      </div>
    </div>
  );
};

export default LibrayCard;
