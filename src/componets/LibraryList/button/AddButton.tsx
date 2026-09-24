"use client";
import {  useCustomContest } from "@/context/ExerciseContext";
import { Iexcercise } from "@/types/Excercise";
import { MdAssignmentAdd } from "react-icons/md";
import { toast } from "react-toastify";


const AddButton = ({ excercise }: {excercise:Iexcercise}) => {
  const { todaysPlan, setTodaysPlan }= useCustomContest();;

  const handleClick = () => {
    const present = todaysPlan.find((e) => {
      return e.id === excercise.id;
    });

    if (present) {
      toast.warning("already added");
    } else {
      setTodaysPlan([...todaysPlan, excercise]);
      toast.success(`${excercise.name} added to todays plan`)
    }
  };

  return (
    <button
      className="btn  px-6  font-sans text-[12px] font-bold text-black bg-[#C2F800] border-none"
      onClick={handleClick}
    >
      <MdAssignmentAdd className="text-[20px]" />
      Add to todays plan
    </button>
  );
};

export default AddButton;
