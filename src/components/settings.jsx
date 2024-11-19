"use client";

import React, { useState } from "react";
import Image from "next/image";
import Google from "../asssets/images/google.svg";

const Settings = () => {
  // State for tracking the active button
  const [activeButton, setActiveButton] = useState("General");

  // State for tracking the toggle button status
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="pt-[45px] pb-[80px] px-[26px] text-primaryFontColor h-fit bg-backgroundLight">
      <div className="flex gap-4 items-center">
        <button
          className={`text-sm font-normal ${activeButton === "General" ? "text-primaryFontColor border-b-2 border-white" : "text-secondaryFontColor"}`}
          onClick={() => setActiveButton("General")}
        >
          General
        </button>
        <button
          className={`text-sm font-normal ${activeButton === "Notifications" ? "text-primaryFontColor border-b-2 border-white" : "text-secondaryFontColor"}`}
          onClick={() => setActiveButton("Notifications")}
        >
          Notifications
        </button>
      </div>

      <form>
        <div className="pt-11">
          <h3 className="text-sm font-semibold mb-2">Profile Details</h3>
          <p className="text-xs mb-4 text-secondaryFontColor">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>

        <div className="mb-8 pl-11 rounded-lg bg-backgroundLight">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="firstName"
                className="bg-backgroundLight text-primaryFontColor placeholder-secondaryFontColor outline-none w-full border border-primaryBorder rounded-2xl px-5 py-4"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                className="bg-backgroundLight text-primaryFontColor placeholder-secondaryFontColor outline-none w-full border border-primaryBorder rounded-2xl px-5 py-4"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="mt-4 bg-backgroundLight w-full border border-primaryBorder rounded-2xl px-5 py-4 outline-none">
              <label className="block text-sm mb-2 text-secondaryFontColor" htmlFor="contactPhone">
                Contact Phone
              </label>
              <input
                type="text"
                id="contactPhone"
                className="outline-none bg-backgroundLight"
                defaultValue=""
              />
            </div>

            <div className="mt-4 bg-backgroundLight w-full border border-primaryBorder rounded-2xl px-5 py-4 outline-none">
              <label className="block text-sm mb-2 text-secondaryFontColor" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="text"
                id="dob"
                className="outline-none bg-backgroundLight"
                defaultValue=""
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="mt-4 bg-backgroundLight w-full border border-primaryBorder rounded-2xl px-5 py-4 outline-none">
              <label className="block text-sm mb-2 text-secondaryFontColor" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="outline-none bg-backgroundLight"
                defaultValue=""
              />
            </div>
          </div>

          <div className="flex flex-col items-start rounded-2xl px-5 py-4 border border-primaryBorder my-14">
            <label className="text-sm h-7 text-secondaryFontColor">
              Status
            </label>
            <div className="flex items-center">
              <div className="relative inline-flex items-center">
                <input type="checkbox" id="status" className="sr-only" checked={isActive} onChange={handleToggle} />
                <label htmlFor="status" className="block w-[2rem] h-[1rem] bg-primaryFontColor rounded-full cursor-pointer relative">
                  <span
                    className={`absolute top-0.5 w-[0.8rem] h-[0.8rem] bg-defaultBlack rounded-full transform transition-transform ${
                      isActive ? "translate-x-0.1" : "translate-x-0"
                    }`}
                    style={{ left: isActive ? "1rem" : "0.2rem" }}
                  ></span>
                </label>
              </div>
              <span className="ml-2 text-sm text-primaryFontColor">{isActive ? "Active" : "Inactive"}</span>
            </div>
          </div>
        </div>

        <div className="text-sm">
          <label className="block text-sm mb-4">Sign-in Method</label>
          <div className="pl-11">
            <button className="flex items-center py-4 px-6 bg-backgroundLight outline-none w-6/12 border border-primaryBorder rounded-2xl">
              <Image src={Google} alt="Google Icon" width={24} height={24} className="mr-2" />
              <span className="text-primaryFontColor text-lg">Google</span>
            </button>
          </div>
        </div>

        <div className="pt-12">
          <h3 className="text-sm mb-2">Deactivate account</h3>
          <p className="text-xs text-secondaryFontColor mb-3">
            If you need to delete your account, we’re sorry to see you go. Please note this action is irreversible, and all your data will be permanently erased.
          </p>
          <div className="flex justify-between items-center w-full">
            <div className="pl-11 flex items-center">
              <input type="checkbox" id="confirmDeactivation" className="mr-2 w-[21px] h-[21px]" />
              <span className="text-sm">
                I confirm my account deactivation
              </span>
            </div>
            <button type="button" className="py-1 px-2 font-normal text-sm bg-settingButtom text-primaryFontColor rounded-lg">
              Deactivate Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
