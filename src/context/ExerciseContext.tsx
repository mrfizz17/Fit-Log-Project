"use client";

import { Iexcercise } from "@/types/Excercise";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Icontext {
  todaysPlan: Iexcercise[];
  savedPlan: Iexcercise[];
  setTodaysPlan: Dispatch<SetStateAction<Iexcercise[]>>;
  setSavedPlan: Dispatch<SetStateAction<Iexcercise[]>>;
}
export const exerciseContext = createContext<Icontext | null>(null);

export const useCustomContext = () => {
  const context = useContext(exerciseContext);

  if (!context) {
    throw new Error("useExerciseContext must be used inside ContextProvider");
  }

  return context;
};

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<Iexcercise[]>([]);

  const [savedPlan, setSavedPlan] = useState<Iexcercise[]>([]);
    
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const today = localStorage.getItem("today");
    const saved = localStorage.getItem("saved");

    if (today) {
      setTodaysPlan(JSON.parse(today));
    }
    if (saved) {
      setSavedPlan(JSON.parse(saved));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if(!loaded) return ;
      
    localStorage.setItem("today", JSON.stringify(todaysPlan));
    localStorage.setItem("saved", JSON.stringify(savedPlan));
  }, [todaysPlan, savedPlan]);

  const object: Icontext = {
    todaysPlan,
    savedPlan,
    setTodaysPlan,
    setSavedPlan,
  };

  return (
    <exerciseContext.Provider value={object}>
      {children}
    </exerciseContext.Provider>
  );
};

export default ContextProvider;
