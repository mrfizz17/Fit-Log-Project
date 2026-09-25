"use client";
import { useCustomContext } from "@/context/ExerciseContext";
import { Iexcercise } from "@/types/Excercise";
import React, { Dispatch, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast, Zoom } from "react-toastify";

interface props {
  exercise: Iexcercise;
  type: string;
}

const DeleteButton = ({ exercise, type }: props) => {
  const { todaysPlan, setTodaysPlan, savedPlan, setSavedPlan } =
    useCustomContext();

  const handleDelete = () => {
    if (type === "today") {
      const newPlan = todaysPlan.filter((e: Iexcercise) => {
        return e.id !== exercise.id;
      });

      setTodaysPlan(newPlan);
      toast.error(`${exercise.name} Removed from Todays plan`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    } else {
      const newPlan = savedPlan.filter((e: Iexcercise) => {
        return e.id !== exercise.id;
      });

      setSavedPlan(newPlan);
      toast.error(`${exercise.name} Removed from Saved plan`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    }
  };

  return (
    <RxCross2
      onClick={handleDelete}
      className="text-[#8A92A0] text-2xl cursor-pointer"
    />
  );
};

export default DeleteButton;
