"use client";
import React from "react";

const error = () => {
  return (
    <div className="px-5 py-20 flex justify-center items-center flex-col mt-10 gap-2 border-2 border-dashed rounded-2xl">
      <p className="text-3xl font-bold text-red">ERROR DATA FETCHING</p>
    </div>
  );
};

export default error;
