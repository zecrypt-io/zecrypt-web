/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from "react";
import Image from "next/image";
import closeIcon from "../asssets/images/close.svg";
import copyIcon from "../asssets/images/copy.svg";
import refreshIcon from "../asssets/images/refresh.svg";

const modalPassword = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false); // Start invisible

  useEffect(() => {
    // Add delay for opening transition
    const timer = setTimeout(() => {
      setIsVisible(true);
    }); // Delay before showing the modal

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Handle closing the modal with a transition
  const handleClose = () => {
    setIsVisible(false); // Start hiding animation
    setTimeout(onClose, 500); // Wait for animation to complete before closing
  };

  // default value and slider state
  const [passwordLength, setPasswordLength] = useState(12);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-primaryBorder bg-opacity-60 backdrop-blur z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative bg-backgroundLight rounded-lg p-16 w-30rem text-primaryFontColor transform transition-transform duration-500 ${
          isVisible ? "scale-100" : "scale-90"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
      >
        {/* Password Display */}
        <div
          className="flex items-center justify-between p-6 mb-12 border border-modalBorder bg-backgroundLight rounded-lg">
          <input
            type="text"
            value="s411rw*sx*a3"
            readOnly
            className="w-full bg-transparent text-primaryFontColor font-medium text-lg placeholder-secondaryFontColor focus:outline-none"
          />
          <button className="ml-2 text-primaryFontColor p-2">
            <div className="w-7">
              <Image src={copyIcon} alt="copy-icon" width={21} height={21} />
            </div>
          </button>
          <button className="ml-2 text-primaryFontColor p-2">
            <div className="w-7">
              <Image
                src={refreshIcon}
                alt="refresh-icon"
                width={21}
                height={21}
              />
            </div>
          </button>
        </div>

        {/* Password Length Slider */}
        <div className="mb-7">
          <label className="block text-primaryFontColor text-lg font-normal mb-3">
            Customize your password
          </label>
          <label className="block text-primaryFontColor text-sm font-normal mb-3">
            Password Length
          </label>
          <div className="flex w-full items-center">
            <div
              className="text-primaryFontColor w-1/5 text-sm font-normal border border-modalBorder bg-backgroundLight rounded-lg py-3.5 text-center mr-3">
              {passwordLength} {/* Display the dynamic password length */}
            </div>
            <input
              type="range"
              min="1"
              max="32"
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              className="w-full accent-white slider"
              style={{ "--value": passwordLength }}
            />
          </div>
        </div>

        {/* Character Options */}
        <div className="">
          <div className="grid text-sm font-normal grid-cols-2">
            <div className="space-y-4">
              <label className="flex gap-2.5 items-center text-primaryFontColor">
                <input
                  type="radio"
                  name="option"
                  value="easyToSay"
                  className="mr-2 cursor-pointer custom-radio"
                />
                Easy to say
              </label>
              <label className="flex gap-2.5 items-center text-primaryFontColor">
                <input
                  type="radio"
                  name="option"
                  value="easyToRead"
                  className="mr-2 cursor-pointer custom-radio"
                />
                Easy to read
              </label>
              <label className="flex gap-2.5 items-center text-primaryFontColor">
                <input
                  type="radio"
                  name="option"
                  value="all"
                  className="mr-2 cursor-pointer custom-radio"
                />
                All characters
              </label>
            </div>
            <div className="ml-auto space-y-4">
              <label className="flex gap-2.5 items-center text-primaryFontColor">
                <input
                  type="checkbox"
                  id="uppercase"
                  className="mr-2 cursor-pointer custom-checkbox"
                />
                Uppercase
              </label>

              <label className="flex gap-2.5 items-center text-primaryFontColor">
                <input
                  type="checkbox"
                  id="lowercase"
                  className="mr-2 cursor-pointer custom-checkbox"
                />
                Lowercase
              </label>

              <label className="flex gap-2.5 items-center text-primaryFontColor">
                <input
                  type="checkbox"
                  id="numbers"
                  className="mr-2 cursor-pointer custom-checkbox"
                />
                Numbers
              </label>
              <label className="flex gap-2.5 items-center text-primaryFontColor">
                <input
                  type="checkbox"
                  id="symbols"
                  className="mr-2 cursor-pointer custom-checkbox"
                />
                Symbols
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Close Button Centered Below Modal */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleClose}
          className="p-2 bg-defaultBlack rounded-full flex items-center justify-center"
        >
          <div className="w-4 h-4">
            <Image src={closeIcon} alt="close-icon" width={20} height={20} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default modalPassword;
