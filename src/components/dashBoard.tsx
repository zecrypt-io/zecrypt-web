"use client";
import Image from "next/image";
import Downarrow from "../asssets/images/down-arrow-white.svg";
import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const [selectedOption, setSelectedOption] = useState("Today");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [activeButton, setActiveButton] = useState("30days");

  const handleOptionClick = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close the dropdown after selecting an option
  };

  return (
<div
      className="p-8 text-white h-fit bg-backgroundLight"
    >
      {/* Header */}
      <div className=" pl-2.5">
        {/* Breadcrumb Navigation */}
        <div className="text-sm mb-4 font-normal flex gap-3.5">
          <span
            onClick={() => setActiveTab("Dashboards")}
            style={{
              color: activeTab === "Dashboards" ? "#ffffff" : "#6e6e6e",
              cursor: "pointer",
            }}
          >
            Dashboards
          </span>
          <span
            className="text-secondaryFontColor">
            /
          </span>
          <span
            onClick={() => setActiveTab("Overview")}
            style={{
              color: activeTab === "Overview" ? "#ffffff" : "#6e6e6e",
              cursor: "pointer",
            }}
          >
            Overview
          </span>
        </div>

        {/* Dropdown Menu */}
        <div className="relative inline-block">
          {/* Display selected option with down arrow */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-sm tracking-wider font-semibold">
              {selectedOption}
            </span>
            <div>
              <Image src={Downarrow} alt="Dropdown arrow" />
            </div>
          </div>

          {/* Dropdown options */}
          {isDropdownOpen && (
            <div
              className="absolute left-0 mt-2 border-primaryBorder text-primaryFontColor bg-backgroundLight rounded-lg border shadow-lg z-10"
              style={{
                minWidth: "136px",
              }} // Set minimum width
            >
              <div
                className="p-2.5 hover:bg-primaryBorder text-sm tracking-wider font-semibold cursor-pointer"
                onClick={() => handleOptionClick("Today")}
              >
                Today
              </div>
              <div
                className="p-2.5 hover:bg-primaryBorder text-sm tracking-wider font-semibold cursor-pointer"
                onClick={() => handleOptionClick("This Week")}
              >
                This Week
              </div>
              <div
                className="p-2.5 hover:bg-primaryBorder text-sm tracking-wider font-semibold cursor-pointer"
                onClick={() => handleOptionClick("This Month")}
              >
                This Month
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-8 mt-4 mb-8">
        {[
          { title: "Total Passwords", value: 124 },
          { title: "Total Accounts", value: 34 },
          { title: "Total Folders", value: "04" },
          { title: "Total Notes", value: 16 },
        ].map((card, index) => (
          <div
            key={index}
            className="p-6 bg-primaryFontColor rounded-2xl gap-2 flex flex-col items-center text-center"
          >
            <p
              className="text-sm text-cardText w-full text-left font-semibold">
              {card.title}
            </p>
            <p
              className="text-2xl text-cardText w-full text-left font-semibold">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-4">
        {/* Line Chart */}
        <div
          className="col-span-2 px-6 py-8 border rounded-2xl bg-backgroundLight border-primaryBorder">
          <div className="flex items-center gap-4 mb-4">
            <p className="text-sm tracking-wider font-semibold">
              Password Actions
            </p>
            <div className="flex space-x-4">
              {/* Last 30 days button */}
              <button
                className={`text-sm font-normal ${
                  activeButton === "30days"
                    ? "text-primaryFontColor border-b-2 border-primaryFontColor"
                    : "text-secondaryFontColor"
                }`}
                onClick={() => setActiveButton("30days")}
              >
                Last 30 days
              </button>

              {/* Last 7 days button */}
              <button
                className={`text-sm font-normal ${
                  activeButton === "7days"
                    ? "text-primaryFontColor border-b-2 border-primaryFontColor"
                    : "text-secondaryFontColor"
                }`}
                onClick={() => setActiveButton("7days")}
              >
                Last 7 days
              </button>
            </div>
          </div>
          <div className="h-48 flex items-center justify-center">
            {/* Placeholder for Line Chart */}
            <p className="text-secondaryFontColor">
              Line Chart (replace with chart library)
            </p>
          </div>
        </div>

        {/* Password Stats */}
        <div
          className="border rounded-2xl px-6 py-8 bg-backgroundLight border-primaryBorder">
          <p className="text-sm tracking-wider font-semibold mb-6">
            Most passwords by
          </p>
          {[
            "Google",
            "GitHub",
            "Facebook",
            "Dropbox",
            "Adobe",
            "Amazon",
            "Netflix",
          ].map((service, index, array) => (
            <div
              key={index}
              className={`flex items-center ${
                index !== array.length - 1 ? "mb-6" : ""
              }`}
            >
              <p className="text-xs tracking-wider font-normal flex-1">
                {service}
              </p>
              <div
                className="w-3/4 h-2 rounded-full overflow-hidden bg-primaryBorder">
                <div className="bg-primaryFontColor h-full w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bar Chart */}
      <div
        className="mt-8 border rounded-2xl px-6 py-8 bg-backgroundLight border-primaryBorder"
      >
        <p className="text-sm tracking-wider font-semibold mb-4">
          Most passwords by
        </p>
        <div className="flex justify-between items-end h-32">
          {["Google", "GitHub", "Facebook", "Adobe", "Amazon", "Netflix"].map(
            (service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-primaryFontColor w-6 rounded-t-lg" style={{height:`${Math.random()*100}%`}}></div>
                <p className="text-sm tracking-wider font-semibold mt-2 text-secondaryFontColor">{service}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;