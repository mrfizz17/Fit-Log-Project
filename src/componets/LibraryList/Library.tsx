
import React from "react";

import LibrayCard from "./LibrayCard";
import { Iexcercise } from "@/types/Excercise";

const getproducts = async():Promise<Iexcercise[]>=>{
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    // if(!res.ok){
    //   throw new error('failed to fetch')
    // }

    const data = await res.json();

    return data;
}

const Library = async() => {

  const excercises:Iexcercise[] = await getproducts();
  console.log(excercises);
  return (
    <div id="explore-library" className="container mx-auto  mt-10 mb-10 scroll-mt-25">


    <p className="text-white text-4xl">THE LIBRARY</p>
    <p className="text-[18px] text-[#9CA3AF] font-sans mt-1">Twelve lifts covering every major muscle group.</p>
    <div className=" mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

      {
        excercises.map((excercise:Iexcercise)=>{
          return(
              <LibrayCard  key = {excercise.id} excercise={excercise}/>
          )

        })
      }
    </div>
    
    </div>
    
  );
};

export default Library;
