/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from "react";

import Image from "next/image";
import close from "../asssets/images/close.svg";
import hideIcon from "../asssets/images/hide-pass.svg";
import showIcon from "../asssets/images/show-pass.svg";
import downArrow from "../asssets/images/down-arrow-white.svg";

const modalAddAccount = ({ onClose }) => {
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

  // Password input show and hide
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  //   Account Name suggestion's
  const [accountName, setAccountName] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Sample list of account suggestions
  const accountSuggestions = [
    "Personal Account",
    "ABCD Account",
    "Business Account",
    "Savings Account",
    "Investment Account",
    "Corporate Account",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setAccountName(value);

    if (value) {
      const filteredSuggestions = accountSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setAccountName(suggestion);
    setSuggestions([]); // Hide suggestions after selection
  };

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-labelBg bg-opacity-60 backdrop-blur z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative bg-backgroundLight rounded-lg p-16 w-30rem text-primaryFontColor transform transition-transform duration-500 ${
          isVisible ? "scale-100" : "scale-90"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
      >
        <h2 className="text-center text-lg font-semibold mb-8">
          Add new account
        </h2>

        {/* Account Name Field */}
        <div className="mb-10">
          <label
            className="block text-base font-semibold mb-2"
            htmlFor="accountName"
          >
            Account Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="accountName"
              placeholder="start type to get account suggestion"
              value={accountName}
              onChange={handleInputChange}
              className="w-full py-2 px-3 rounded-lg text-sm font-normal bg-backgroundLight border border-primaryBorder text-primaryFontColor placeholder-secondaryFontColor focus:outline-none focus:border-gray-400 transition-colors"
            />
            <span className="absolute inset-y-0 right-3 flex items-center">
              <Image src={downArrow} alt="down-arrow-icon" />
            </span>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute mt-1 w-full bg-backgroundLight border border-primaryBorder rounded-lg text-primaryFontColor z-10">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 cursor-pointer hover:bg-primaryBorder transition-colors"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Username Field */}
        <div className="mb-6">
          <label
            className="block text-base font-semibold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="type here"
            className="w-full py-2 px-3 rounded-lg text-sm font-normal bg-backgroundLight border border-primaryBorder text-primaryFontColor placeholder-secondaryFontColor focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            className="block text-base font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="type here"
              className="w-full py-2 px-3 rounded-lg text-sm font-normal bg-backgroundLight border border-primaryBorder text-primaryFontColor placeholder-secondaryFontColor focus:outline-none focus:border-gray-400 transition-colors"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center focus:outline-none"
            >
              <Image
                src={showPassword ? showIcon : hideIcon}
                alt={showPassword ? "show-icon" : "hide-icon"}
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleClose}
          className="w-full mt-6 py-2 bg-primaryFontColor text-defaultBlack rounded-lg text-lg font-medium hover:bg-gray-200 transition"
        >
          Save
        </button>
      </div>

      {/* Close Button Centered Below Modal */}
      <div className="mt-4">
        <button
          onClick={handleClose}
          className="flex p-2 items-center justify-center border-defaultBlack border bg-defaultBlack rounded-full">
          <div className="w-4 h-4">
            <Image src={close} alt="close-icon" width={20} height={20} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default modalAddAccount;
