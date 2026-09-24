'use client'
import { exerciseContext } from "@/context/ExerciseContext";
import { Iexcercise } from "@/types/Excercise";
import React, { useContext } from "react";
import { LuBookmark } from "react-icons/lu";

const SavedButton = ({excercise}:{excercise:Iexcercise}) => {
const {savedPlan,setSavedPlan} = useContext(exerciseContext);

  return (
    <button className="btn shadow-none text-[#E5E7EB]  font-sans text-[12px] font-bold bg-[#0F1115] border border-[#374151] ">
      <LuBookmark className="text-[15px]" />
      Save for later
    </button>
  );
};

export default SavedButton;
