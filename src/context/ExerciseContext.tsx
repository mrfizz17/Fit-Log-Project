'use client'

import { Iexcercise } from '@/types/Excercise';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';




export interface Icontext {
    todaysPlan:Iexcercise[],
    savedPlan:Iexcercise[],
    setTodaysPlan:Dispatch<SetStateAction<Iexcercise[]>>,
    setSavedPlan:Dispatch<SetStateAction<Iexcercise[]>>
}
export const exerciseContext = createContext<Icontext | null>(null);


const ContextProvider = ({children}:{children:ReactNode})=> {

const [todaysPlan, setTodaysPlan]=useState<Iexcercise[]>([]);

const [savedPlan ,setSavedPlan]=useState<Iexcercise[]>([]);

const object:Icontext ={
    todaysPlan,
    savedPlan,
    setTodaysPlan,
    setSavedPlan
}

    return (
        <exerciseContext.Provider value={object}>
            {children}
        </exerciseContext.Provider>
    );
};

export default ContextProvider;