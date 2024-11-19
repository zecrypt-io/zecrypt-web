import React from "react";
import Image from "next/image";
import Plus from "../asssets/images/plus-white.svg";
import Delete from "../asssets/images/Delete.svg";
import UpDown from "../asssets/images/updown-arrow.svg";
import Folder from "../asssets/images/Folder.svg";
import NewFolder from '../asssets/images/NewFolder.svg';

export default function Notes() {
  return (
    <div
      className="pt-[45px] pb-[45px] px-[26px] bg-backgroundLight text-primaryFontColor h-[86%] relative"
    >
      <div className="mb-4 text-gray-500 flex items-center space-x-2">
        <span className="text-sm cursor-pointer py-1 px-2 text-secondaryFontColor">
          Dashboards
        </span>
        <span className="text-secondaryFontColor">
          /
        </span>
        <span className="text-sm cursor-pointer py-1 px-2 text-primaryFontColor">
          Secure Notes
        </span>
      </div>
      <div className="flex items-center mb-4 gap-3">
        <div className="flex items-center gap-2 py-1 px-2 border rounded-lg border-primaryBorder">
          <button className="bg-backgroundLight text-sm">All Notes</button>
        </div>
        <div className="flex items-center gap-2 py-1 px-2 border rounded-lg border-primaryBorder">
          <button className="bg-backgroundLight text-sm">Folder 1</button>
        </div>
        <div className="flex items-center gap-2 py-1 px-2 border rounded-lg border-primaryBorder">
          <button className="bg-backgroundLight text-sm">Folder 2</button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 mb-4 p-2 border rounded-lg border-primaryBorder">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 py-1 px-2 border rounded-lg border-primaryBorder">
            <Image src={Plus} alt="Plusicon" className="w-[12px] h-[22px]" />
            <button className="text-sm">Create Note</button>
          </div>
          <div className="p-1 h-7 flex justify-center cursor-pointer w-7">
            <Image src={UpDown} alt="UpDownIcon" />
          </div>
        </div>
        <div className="flex items-center gap-2 py-1 px-2 border rounded-lg border-primaryBorder">
          <Image src={Delete} alt="DeleteIcon" />
          <button className="">Delete Note</button>
        </div>
      </div>
      <div className="flex gap-4 h-[90%]">
        <div className="w-1/6 bg-backgroundLight flex flex-col">
          <div className="flex flex-col">
            <div
              className="mb-4 flex flex-col gap-2 cursor-pointer rounded-xl py-4 px-5 bg-primaryFontColor text-defaultBlack"
            >
              <h3 className="text-sm font-bold">Heading here</h3>
              <p className="text-sm whitespace-nowrap overflow-hidden">
                11:03 PM - Text goes here
              </p>
              <div className="flex items-center gap-1">
                <Image src={Folder} alt="folderIcon" />
                <p className="text-sm text-noteFont">
                  Folder 1
                </p>
              </div>
            </div>
            <div
              className="flex flex-col gap-2 cursor-pointer py-4 px-5 text-primaryFontColor bg-backgroundLight border rounded-xl border-primaryBorder"
            >
              <h3 className="text-sm font-bold">Heading here</h3>
              <p className="text-sm whitespace-nowrap overflow-hidden">
                02/09/2024 - Text goes here
              </p>
              <div className="flex items-center gap-1">
                <Image src={Folder} alt="folderIcon" />
                <p className="text-sm text-noteFont">
                  Folder 2
                </p>
              </div>
            </div>
          </div>
          <div className="font-normal mt-auto justify-center flex items-center gap-2 py-1 px-2 border rounded-lg border-primaryBorder">
            <Image
            src={NewFolder}
            alt="NewFolderIcon"
            />
            <button className="text-sm">Create New Folder</button>
          </div>
        </div>
        {/* Main Content */}
        <div className="w-full bg-backgroundLight p-4 flex gap-2 border rounded-lg border-primaryBorder">
          <div className="w-full h-full bg-backgroundLight">
          <textarea
            id="projectDescription"
            placeholder="Enter project description"
            className="w-full h-full py-2 px-3 bg-backgroundLight text-primaryFontColor placeholder-secondaryFontColor focus:outline-none focus:border-gray-400 transition-colors"
          />
            </div>
        </div>
      </div>
    </div>
  );
}
