/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from "react";
import Image from "next/image";
import close from "../asssets/images/close.svg";
import mobileIcon from "../asssets/images/mobile.svg";
import mailIcon from "../asssets/images/mail.svg";

const modalSupport = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false); // Start invisible
  const [activeTab, setActiveTab] = useState("support"); // Tab state: 'support' or 'shortcuts'
  const [tabTransition, setTabTransition] = useState(false); // Transition state

  useEffect(() => {
    // Add delay for opening transition
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay before showing the modal

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Handle closing the modal with a transition
  const handleClose = () => {
    setIsVisible(false); // Start hiding animation
    setTimeout(onClose, 500); // Wait for animation to complete before closing
  };

  // Handle tab switching with transition
  const handleTabSwitch = (tab) => {
    if (tab !== activeTab) {
      setTabTransition(true);
      setTimeout(() => {
        setActiveTab(tab);
        setTabTransition(false);
      }, 200); // Duration of the fade-out animation
    }
  };

  return (
    <>
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
          {/* Tab Header */}
          <div className="flex space-x-6 mb-8">
            <button
              className={`pb-1 text-sm ${
                activeTab === "support"
                  ? "text-primaryFontColor font-semibold border-b-2 border-primaryFontColor rounded-b-sm"
                  : "text-secondaryFontColor"
              }`}
              onClick={() => handleTabSwitch("support")}
            >
              Support
            </button>
            <button
              className={`pb-1 text-sm ${
                activeTab === "shortcuts"
                  ? "text-primaryFontColor font-semibold border-b-2 border-primaryFontColor rounded-b-sm"
                  : "text-secondaryFontColor"
              }`}
              onClick={() => handleTabSwitch("shortcuts")}
            >
              Shortcuts
            </button>
          </div>

          {/* Tab Content with Transitions */}
          <div
            className={`transition-opacity duration-300 ${
              tabTransition ? "opacity-0" : "opacity-100"
            }`}
          >
            {activeTab === "support" ? (
              <div>
                <h2 className="text-center text-xl mt-16 font-semibold mb-1">
                  Need Help? We’re Here for You!
                </h2>
                <p className="text-center text-secondaryFontColor font-light text-xs mb-12">
                  If you have any questions or need assistance, feel free to
                  reach out. Our support team is ready to assist you with
                  whatever you need.
                </p>

                <div className="space-y-4">
                  <button
                    className="flex items-center justify-center w-full gap-3 py-2 vs:text-base mc:text-lg font-normal text-primaryFontColor border border-primaryBorder rounded-lg"
                    style={{ marginBottom: "32px" }}
                  >
                    <span className="text-primaryFontColor flex gap-2 items-center font-normal text-lg">
                      <div className="w-4">
                        <Image
                          src={mobileIcon}
                          alt="copy-icon"
                          width={21}
                          height={21}
                        />
                      </div>
                      +91 81570 10156
                    </span>
                  </button>
                  <p
                    className="relative text-xs font-normal text-center flex items-center gap-6 text-secondaryFontColor"
                    style={{ margin: 0 }}
                  >
                    <span className="flex-1 border-t border-primaryBorder"></span>
                    OR
                    <span className="flex-1 border-t border-primaryBorder"></span>
                  </p>
                  <button
                    className="flex items-center justify-center w-full gap-3 py-2 vs:text-base mc:text-lg font-normal text-primaryFontColor border border-primaryBorder rounded-lg"
                    style={{ marginTop: "32px" }}
                  >
                    <span className="text-primaryFontColor flex gap-2 items-center font-normal text-lg">
                      <div className="">
                        <Image
                          src={mailIcon}
                          alt="copy-icon"
                          width={21}
                          height={21}
                        />
                      </div>
                      support@zecrypt.io
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-primaryFontColor">
                  {/* General Section */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-4 text-primaryFontColor">
                      General
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="text-sm w-1/6">⌘ K</span>
                        <span className="text-sm text-modalSupport">
                          Command menu
                        </span>
                      </li>
                      <li className="flex">
                        <span className="text-sm w-1/6">⌘ G</span>
                        <span className="text-sm text-modalSupport">
                          Generate password
                        </span>
                      </li>
                      <li className="flex">
                        <span className="text-sm w-1/6">N</span>
                        <span className="text-sm text-modalSupport">
                          Notifications
                        </span>
                      </li>
                      <li className="flex">
                        <span className="text-sm w-1/6">?</span>
                        <span className="text-sm text-modalSupport">
                          Support
                        </span>
                      </li>
                      <li className="flex">
                        <span className="text-sm w-1/6">/</span>
                        <span className="text-sm text-modalSupport">
                          Search
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Navigation Section */}
                  <div>
                    <h3 className="text-sm font-semibold mb-4 text-primaryFontColor">
                      Navigation
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="text-sm w-1/6">G O</span>
                        <span className="text-sm text-modalSupport">
                          Go to Overview
                        </span>
                      </li>
                      <li className="flex">
                        <span className="text-sm w-1/6">G A</span>
                        <span className="text-sm text-modalSupport">
                          Go to Accounts
                        </span>
                      </li>
                      <li className="flex">
                        <span className="text-sm w-1/6">G N</span>
                        <span className="text-sm text-modalSupport">
                          Go to Notes
                        </span>
                      </li>
                      <li className="flex">
                        <span className="text-sm w-1/6">G S</span>
                        <span className="text-sm text-modalSupport">
                          Go to Settings
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Close Button Centered Below Modal */}
        <div className="mt-4">
          <button
            onClick={handleClose}
            className="flex p-2 items-center justify-center border border-defaultBlack bg-defaultBlack rounded-full">
            <div className="w-4 h-4">
              <Image src={close} alt="close-icon" width={20} height={20} />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default modalSupport;
