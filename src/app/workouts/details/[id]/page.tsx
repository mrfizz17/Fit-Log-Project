import Image from "next/image";
import React, { useContext } from "react";
import { Iexcercise } from "@/types/Excercise";

import AddButton from "@/componets/LibraryList/button/AddButton";
import SavedButton from "@/componets/LibraryList/button/SavedButton";
import { notFound } from "next/navigation";

interface Iparams {
  params: {
    id: string;
  };
}

const getsingleData = async (id: number): Promise<Iexcercise> => {

  
  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(`Invalid to fetch : ${res.status}`);
  }

  const data = await res.json();

  if (!data) {
    notFound();
  }

  return data;
};

const page = async ({ params }: Iparams) => {
  const { id } = await params;
  const excercise: Iexcercise = await getsingleData(Number(id));

  return (
    <div className="container mx-auto mt-15 mb-15 flex">
      <div className="card card-side block lg:flex shadow-sm gap-8">
        <Image
          src={`${excercise.image}`}
          alt="Movie"
          width={580}
          height={580}
          className="h-[500px] lg:h-full rounded-3xl "
        />

        <div className="card-body text-amber-50 p-0 mt-5 lg:mt-0">
          <h2 className="card-title text-2xl mt-2">{excercise.name.toUpperCase()}</h2>
          <p className="font-sans text-[#9CA3AF] flex-grow-0">
            {excercise.description}
          </p>
          <div className="flex gap-3 mt-2">
            {excercise.muscleGroups.map((muscle, ind) => {
              return (
                <div
                  key={ind}
                  className="badge badge-secondary bg-[#C2F800] border-none text-black  text-[12px] px-4 rounded-3xl"
                >
                  {muscle}
                </div>
              );
            })}
          </div>

          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#151922] mt-3">
            <table className="table font-sans font-semibold text-[#9CA3AF] p-0">
              {/* head */}

              <tbody>
                <tr>
                  <td className="py-2">EQUIPMENT</td>
                  <td className="text-end py-1">{excercise.equipment}</td>
                </tr>

                <tr>
                  <td className="py-1">DIFFICULTY</td>
                  <td className="text-end py-1">{excercise.difficulty}</td>
                </tr>

                <tr>
                  <td className="py-1">SETS</td>
                  <td className="text-end py-1">{excercise.sets}</td>
                </tr>
                <tr>
                  <td className="py-1">REPS</td>
                  <td className="text-end py-1">{excercise.reps}</td>
                </tr>
                <tr>
                  <td className="py-1">DURATION</td>
                  <td className="text-end py-1">{excercise.duration} min</td>
                </tr>
                <tr>
                  <td className="py-1">CALORIES</td>
                  <td className="text-end py-1">
                    {excercise.caloriesBurned} kcal
                  </td>
                </tr>
                <tr>
                  <td className="py-1">RATING</td>
                  <td className="text-end py-1">{excercise.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <p className="text-[16px] mb-2 mt-4 ">INSTRUCTION</p>

            {excercise.instructions.map((instruction, ind) => {
              return (
                <p key={ind} className="font-sans text-[14px] text-[#D1D5DB] ">
                  {ind + 1}. {instruction}{" "}
                </p>
              );
            })}
          </div>

          <div className="flex gap-2 mt-2">
            <AddButton excercise={excercise} />
            <SavedButton excercise={excercise} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
