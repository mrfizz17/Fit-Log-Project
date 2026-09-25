"use client";
import { useCustomContext } from "@/context/ExerciseContext";
import { Iexcercise } from "@/types/Excercise";
import { MdDone } from "react-icons/md";
import { toast, Zoom } from "react-toastify";

const MarkAsDone = ({ exercise }: { exercise: Iexcercise }) => {
  const { todaysPlan, setTodaysPlan } = useCustomContext();

  const handleClick = () => {
    const newPlan = todaysPlan.filter((e) => {
      return e.id !== exercise.id;
    });

    setTodaysPlan(newPlan);
    toast.success("Workout Logged --Nice work", {
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
  };

  return (
    <button
      onClick={handleClick}
      className="btn shadow-none py-0 bg-[#C2F800] text-[12px] border-none md:text-[15px] px-3 md:px-8 rounded-3xl "
    >
      <MdDone className="md:text-[16px]" />
      Mark as Done
    </button>
  );
};

export default MarkAsDone;
