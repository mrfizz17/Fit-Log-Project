'use client'
import { useCustomContest } from "@/context/ExerciseContext";
import { Iexcercise } from "@/types/Excercise";
import { LuBookmark } from "react-icons/lu";

const SavedButton = ({excercise}:{excercise:Iexcercise}) => {
const {savedPlan,setSavedPlan} = useCustomContest();

  return (
    <button className="btn shadow-none text-[#E5E7EB]  font-sans text-[12px] font-bold bg-[#0F1115] border border-[#374151] ">
      <LuBookmark className="text-[15px]" />
      Save for later
    </button>
  );
};

export default SavedButton;
