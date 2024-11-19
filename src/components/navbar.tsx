import React from "react";
import Image from "next/image";
import Sidebar from "../asssets/images/Sidebar.svg";
import Star from "../asssets/images/star.svg";
import Search from "../asssets/images/Search.svg";
import Text from "../asssets/images/Text.svg";
import Sun from "../asssets/images/sun.svg";
import Clock from "../asssets/images/ClockCounterClockwise.svg";
import Bell from "../asssets/images/Bell.svg";

function Navbar({  
  isCollapsed,
  setIsCollapsed,
}) {
  return (
    <nav className="flex justify-between items-center px-7 py-5 h-[8%] border-b border-primaryBorder bg-backgroundLight">
      <div className="flex space-x-4">
        <button
           onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-primaryFontColor w-5"
        >
          <Image src={Sidebar} alt="Sidebar" width={24} height={24} />
        </button>
        <button className="text-primaryFontColor w-5">
          <Image src={Star} alt="Star" width={24} height={24} />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-backgroundLight border border-secondaryBorder px-2 py-0.5 rounded-lg max-w-[280px]">
          <Image src={Search} alt="search" width={16} height={16} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent placeholder-secondaryBorder outline-none w-full text-secondaryFontColor"
          />
          <Image
            className="cursor-pointer"
            src={Text}
            alt="Text"
            width={16}
            height={16}
          />
        </div>
        <button className="text-primaryFontColor w-5">
          <Image src={Sun} alt="Sun" width={24} height={24} />
        </button>
        <button className="text-primaryFontColor w-5">
          <Image src={Clock} alt="Clock" width={24} height={24} />
        </button>
        <button className="text-primaryFontColor w-5">
          <Image src={Bell} alt="Bell" width={24} height={24} />
        </button>
        <button className="text-primaryFontColor w-5">
          <Image src={Sidebar} alt="Sidebar" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
