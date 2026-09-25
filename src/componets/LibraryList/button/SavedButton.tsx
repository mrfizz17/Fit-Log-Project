"use client";
import { useCustomContext } from "@/context/ExerciseContext";
import { Iexcercise } from "@/types/Excercise";
import { LuBookmark } from "react-icons/lu";
import { toast, Zoom } from "react-toastify";

const SavedButton = ({ excercise }: { excercise: Iexcercise }) => {
  const { savedPlan, setSavedPlan } = useCustomContext();

  const handleClick = () => {
    const present = savedPlan.find((e) => {
      return e.id === excercise.id;
    });

    if (present) {
      toast.warning("Its Already added", {
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
      setSavedPlan([...savedPlan, excercise]);
      toast.success(`${excercise.name} added to Saved plan`, {
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
    <button
      className="btn shadow-none text-[#E5E7EB]  font-sans text-[12px] font-bold bg-[#0F1115] border border-[#374151] "
      onClick={handleClick}
    >
      <LuBookmark className="text-[15px]" />
      Save for later
    </button>
  );
};

export default SavedButton;
