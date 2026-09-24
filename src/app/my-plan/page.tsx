import SavedPlan from "@/componets/myplan/SavedPlan";
import TodaysCard from "@/componets/myplan/TodaysCard";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-5 mt-5">
      <p className="text-4xl text-white">MY PLAN</p>
      <p className="text-[#8A92A0] text-[14px] mt-2 font-normal font-sans">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="overflow-x-auto rounded-box border border-[#232732] bg-[#13161D] mt-3 px-5 py-4">
        <table className="table font-sans font-semibold text-[#9CA3AF] p-0 ">
          {/* head */}

          <tbody>
            <tr>
              <td className="border-r-2 border-dashed border-[#232732]">
                <span className="font-sans font-normal">Exercises</span>
                <p className="mt-2 text-5xl text-[#C2F800] font-bold">1</p>
              </td>
              <td className="border-r-2 border-dashed border-[#232732]">
                <span className="font-sans font-normal">Miniutes</span>
                <p className="mt-2 text-5xl text-white">1</p>
              </td>
              <td className="">
                <span className="font-sans font-normal">Calories</span>

                <p className="mt-2 text-5xl text-white">1</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-10">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box bg-[#151921] ">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab text-[#8A92A0] "
            aria-label="Today's plan"
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab bg-[#1F242D] text-white"
            aria-label="Saved"
            defaultChecked
          />
        </div>

        <div className="flex gap-5 items-center">
            <p className="text-2xl text-[#C2F800]">Sort By</p>
          <select defaultValue="duration" className="select w-[200px] bg-transparent shadow-none border-2 border-[#374151] text-white rounded-3xl">
            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>
      </div>



      <TodaysCard />
      <SavedPlan />




    </div>
  );
};

export default page;
