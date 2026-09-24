import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#090A0D]">
      <footer className=" font-sans text-[#9CA3AF] container mx-auto footer sm:footer-horizontal footer-center  p-6 bg-[#090A0D] flex justify-between" >
        <Image
        src="/logo.png"
        alt="Logo"
        width={30}
        height={30}


        >
        </Image>
        <aside>
          <p>
            © {new Date().getFullYear()} FitLog -- Workout Library. Train hard, log honest.
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
