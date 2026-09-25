import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import Button from "./NavbarButton/Button";

const Navbar = () => {
  return (
    <div className="bg-[#0C0D10] border-2 font-sans sticky top-0 z-50">
      <div className="navbar bg-[#0C0D10] shadow-sm  container mx-auto">
        <div className="navbar-start lg:justify-start gap-5">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" btn btn-ghost bg-[#C2F800]  lg:hidden"
            >
              <FiAlignJustify className="text-2xl" />
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow bg-[#C2F800] text-2xl text-black space-y-1"
            >
              <li className="border-b-2 border-black">
                <Link href={"/"}> Workouts </Link>
              </li>
              <li>
                <Link href={`/my-plan`}>My Plan</Link>
              </li>
            </ul>
          </div>

          <Link href={"/"}>
            <div className="flex items-center justify-center ">
              <Image
                src={"/logo.png"}
                alt="fit logo"
                width={25}
                height={225}
              ></Image>
              <p className="text-white  ml-2 font-bold text-[20px] ">FITLOG</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li className="bg-[#1A2312] px-2 rounded-3xl text-[14px] font-semibold">
              <Link href="/" className="text-[#C2F800]">
                Workouts
              </Link>
            </li>
            <li className="text-[14px] font-semibold">
              <Link href={`/my-plan`} className="text-[#9CA3AF]">
                My Plan
              </Link>
            </li>
          </ul>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
