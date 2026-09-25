"use client";
import { useCustomContext } from "@/context/ExerciseContext";
import { Iexcercise } from "@/types/Excercise";
import { MdAssignmentAdd } from "react-icons/md";
import { toast, Zoom } from "react-toastify";

const AddButton = ({ excercise }: { excercise: Iexcercise }) => {
  const { todaysPlan, setTodaysPlan } = useCustomContext();

  const handleClick = () => {
    const present = todaysPlan.find((e) => {
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
      setTodaysPlan([...todaysPlan, excercise]);
      toast.success(`${excercise.name} added to todays plan`, {
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
      className="btn  px-6  font-sans text-[12px] font-bold text-black bg-[#C2F800] border-none"
      onClick={handleClick}
    >
      <MdAssignmentAdd className="text-[20px]" />
      Add to todays plan
    </button>
  );
};

export default AddButton;
