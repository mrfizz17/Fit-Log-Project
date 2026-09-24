import Image from 'next/image';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaFire, FaRegClock } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const SavedPlan = () => {
    return (
        <div>
            <div className="lg:flex space-y-4 lg:space-y-0  gap-5 justify-between   mt-10 bg-[#1A1D23] rounded-3xl p-5">
                  <Image src={"/demo.jpg"} alt="alt image" width={580} height={580}
                   className="w-full h-[150px] lg:w-[150px] md:h-[100px] object-cover  text-center rounded-2xl"></Image>
            
                  <div  className=" grow text-white space-y-2">
                    <p className="text-2xl ">Hollow-Body Plank</p>
                    <p className="font-sans text-[#8A92A0] -mt-2">Bodyweight</p>
                    <div className="flex text-[15px] gap-4 justify-start font-sans text-[#9CA3AF] font-semibold">
                    <span className="flex items-center gap-1 ">
                      <FaRegClock className="text-[#C2F800] text-[15px] storke-2" />{" "}
                      25 min
                    </span>
                    <span className="flex items-center gap-1">
                      <FaFire className="text-[#C2F800] text-[15px]" />{" "}
                      100 kcal
                    </span>
                    <span className="flex items-center gap-1">
                      <CiStar className="text-[#C2F800] text-[18px] stroke-2" />{" "}
                      4.5
                    </span>
                  </div>
                  </div>
                  <div className="flex items-center gap-5">
                      <button className="btn  btn-outline hover:bg-[#1A1D23] border-2 border-[#374151] text-white font-sans font-normal px-8 rounded-3xl">View Details</button>
                      <RxCross2 className="text-[#8A92A0] text-2xl cursor-pointer"/>
                  </div>
            
                  
                </div>
        </div>
    );
};

export default SavedPlan;