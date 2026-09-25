'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const HighLightButton = () => {

    const path = usePathname();
    console.log(path);
    return (
        <ul className="menu menu-horizontal px-1 gap-6">
            <li className={` ${(path)==='/' ? 'bg-[#1A2312]': ''}  px-2 rounded-3xl text-[14px] font-semibold`}>
              <Link href="/" className={`${(path)==='/' ? 'text-[#C2F800]': 'text-[#9CA3AF]'}`}>
                Workouts
              </Link>
            </li>
            <li className={`text-[14px] font-semibold ${(path)==='/my-plan' ? 'bg-[#1A2312]': ''} px-2 rounded-3xl`}>
              <Link href={`/my-plan`} className={`${(path)==='/my-plan' ? 'text-[#C2F800]': 'text-[#9CA3AF]'}`}>
                My Plan
              </Link>
            </li>
          </ul>
    );
};

export default HighLightButton;