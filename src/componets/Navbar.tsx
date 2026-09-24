import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#0C0D10] border-2">
      <div className="navbar bg-[#0C0D10] shadow-sm  container mx-auto">
        <div className="navbar-start justify-between lg:justify-start col-span-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" btn btn-ghost bg-[#C2F800]  lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow bg-[#C2F800] text-2xl text-black space-y-1"
            >
              <li className="border-b-2 border-black">
                <Link href={`workouts`}> Workouts </Link>
              </li>
              <li>
                <Link href={`/my-plan`}>My Plan</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center ">
            <Image
              src={"/logo.png"}
              alt="fit logo"
              width={25}
              height={225}
            ></Image>
            <p className="text-white  ml-2 font-semibold text-[20px]">FITLOG</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li className="bg-[#1A2312] px-2 rounded-3xl text-[14px] font-semibold">
              
              <Link href="/workouts" className="text-[#C2F800]">Workouts</Link>
            </li>
            <li className="text-[14px] font-semibold">
              <Link href={`/my-plan`} className="text-[#9CA3AF]">My Plan</Link>
            </li>
            
          </ul>
        </div>
        <div className="navbar-end col-span-1 gap-8">
          <Link href={"/my-plan"}>
            <button className="flex cursor-pointer items-center">
              <p className="text-[#eff1f3] cursor-pointer font-semibold text-[18px] ">
                Plan
              </p>{" "}
              <div className="badge badge-secondary rounded-3xl font-bold text-[16px]  w-3 ml-3 p-4 bg-[#C2F800] border-0 text-black">
                0
              </div>
            </button>
          </Link>
          <Link href={"/my-plan"}>
            <button className="flex cursor-pointer items-center ">
              <p className="text-[#D1D5DB] text-[18px] ">Saved</p>{" "}
              <div className="badge  rounded-3xl  font-bold text-[16px]  w-3 ml-3 p-4 bg-[#0C0D10] text-[#D1D5DB] border-2 border-[#2D313B]">
                0
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
