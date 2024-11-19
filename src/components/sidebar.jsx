"use client";

import { SetStateAction, useEffect, useState } from "react";

import Modal from "./modal";
import ModalPassword from "./modalPassword";
import ModalSupport from "./modalSupport";

import Image from "next/image";
import Logo from "../asssets/images/logo.svg";
import Key from "../asssets/images/key.svg";
import Dot from "../asssets/images/dot.svg";
import Support from "../asssets/images/support.svg";
import Setting from "../asssets/images/settings.svg";
import User from "../asssets/images/user.svg";
import Logoout from "../asssets/images/log-out.svg";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebaseConfig";
import { useRecoilState } from "recoil";
import { userCredentials } from "../atoms/userCredentials";
import { useRouter } from "next/navigation";
import CustomSelect from "../components/customeSeclect";
import LeftSideMainMenu from "../components/leftSideMainMenu";
import MenuIcon from "../asssets/images/menu.svg";

export default function SidebarLeft({ isCollapsed}) {
  const router = useRouter();
  const [selected, setSelected] = useState("Overview");
  const [loginData, setLoginData] = useRecoilState(userCredentials);
  const [projects, setProjects] = useState([]);
  const [labels, setLabels] = useState(["qqq", "test", "haloo"]);

  const [selectedProject, setSelectedProject] = useState(null);
  // Projects Dropdown and functions
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsDropdownOpen(false);
  };

  const handleSignOut = async () => {
    const logoutdata = await signOut(auth);
    setLoginData({
      isLogin: false,
      displayName: null,
      email: null,
      uuid: null,
      stsTokenManager: {},
    });
    localStorage.removeItem("token");
  };

  // Modal For Project
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  // Modal Functions
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  // Modal For Password
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordModalContent, setPasswordModalContent] = useState("");
  // Modal Functions
  const openModalPassword = (contentPassowrd) => {
    setPasswordModalContent(contentPassowrd);
    setIsPasswordModalOpen(true);
  };
  const closeModalPassword = () => setIsPasswordModalOpen(false);

  // Modal For Support and Shortcuts
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [supportModalContent, setSupportModalContent] = useState("");
  // Modal Functions
  const openModalSupport = (contentPassowrd) => {
    setSupportModalContent(contentPassowrd);
    setIsSupportModalOpen(true);
  };
  const closeModalSupport = () => setIsSupportModalOpen(false);

  const handleNavigate = (link) => {
    link ? router.push(link) : null; // navigates to /about
  };
  const handleAddLabel = (link) => {};
  // Getting volunteer activities

  return (
    <div
      className="text-primaryFontColor bg-backgroundLight border-primaryBorder w-64 h-screen flex flex-col justify-between p-3 border-r"
      style={{
        width: isCollapsed ? "80px" : "260px",
        transition: "width 1000ms, left 1000ms, right 1000ms",
      }}
      >
  
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex justify-center gap-2 mt-2 items-center mb-8">
          <div className="w-6 cursor-pointer">
            <Image src={Logo} alt="logo" />
          </div>
          {!isCollapsed && <h1 className="text-lg font-semibold">Zecrypt</h1>}
        </div>

        {/* Project Selector */}
        <CustomSelect
          openModal={openModal}
          setProjects={setProjects}
          projects={projects}
          setSelectedProject={setSelectedProject}
          selectedProject={selectedProject}
          isCollapsed={isCollapsed}
        />

        {/* Modal Component */}
        {isModalOpen && (
          <Modal
            content={modalContent}
            onClose={closeModal}
            setProjects={setProjects}
            projects={projects}
            setSelectedProject={setSelectedProject}
            selectedProject={selectedProject}
          />
        )}

        {/* Generate Password Button */}
        <button
          onClick={() => openModalPassword()}
          className={`flex border gap-2 text-sm font-normal border-primaryBorder items-center hover:bg-primaryBorder w-full py-1 px-2 rounded-lg mb-6 ${
            isCollapsed ? "justify-center" : ""
          }`}>
          <div className="w-5">
            <Image className="" src={Key} alt="key" />
          </div>
          {!isCollapsed &&`Generate Password`}
        </button>
        {/* Modal Component */}
        {isPasswordModalOpen && (
          <ModalPassword
            content={supportModalContent}
            onClose={closeModalPassword}
          />
        )}

        {/* Favorites Section */}
        <h2
          className={`text-sm ml-2.5 font-normal mb-2 text-secondaryFontColor ${
            isCollapsed ? "invisible" : "ml-2.5"
          }`}>
          Favorites
        </h2>
        <nav className={`space-y-2 mb-6 ${
            isCollapsed ? "invisible" : ""
          }`}>
          <button
            onClick={() => handleNavigate("/")}
            className={`flex ml-1.5 gap-2 text-sm font-normal items-center w-full py-1 px-2 rounded-lg hover:bg-primaryBorder${
              isCollapsed ? "justify-center" : "ml-1.5"
            }`}
          >
            <Image className="" src={Dot} alt="dot" />
            Accounts
          </button>
          <button
            onClick={() => handleNavigate("/settings")}
            className="flex ml-1.5 gap-2 text-sm font-normal items-center w-full py-1 px-2 rounded-lg hover:bg-primaryBorder"
          >
            <Image className="" src={Dot} alt="dot" />
            Settings
          </button>
        </nav>

        {/* Dashboards Section */}
        <h2
          className={`text-sm ml-2.5 font-normal mb-2 text-secondaryFontColor ${
            isCollapsed ? "invisible" : ""
          }`}>
          Dashboards
        </h2>
        {/* <nav className="space-y-2">
          {[
            { name: "Overview", route: "/dashboard" },
            { name: "Accounts", route: "/" },
            { name: "Secure Notes", route: "" },
            { name: "Labels", route: "" },
          ].map((item) => (
            <div key={item.name}>
              <button
                className={`flex items-center gap-2 text-sm font-normal w-full py-1 px-2 rounded-lg ${selected === item.name ? "bg-primaryBorder" : "hover:bg-primaryBorder"
                  } relative`}
                onClick={() => {
                  setSelected(item.name);
                  handleNavigate(item.route);
                }}
              >
                {selected === item.name && (
                  <div
                    className="absolute left-0 top-0 self-center bottom-0 w-1 bg-white rounded-xl"
                    style={{ height: "60%" }}
                  ></div>
                )}
                <div className="flex items-center w-full pl-5">
                  <div className="w-5 mr-2">
                    <Image
                      src={
                        require(`../asssets/images/${item.name
                          .toLowerCase()
                          .replace(" ", "-")}.svg`).default
                      }
                      alt={item.name.toLowerCase()}
                    />
                  </div>
                  {item.name}
                </div>
                {item.name === "Labels" && (
                  <button
                    className="ml-auto bg-blue-500 text-primaryFontColor text-xs px-2 py-1 rounded"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddLabel();
                    }}
                  >
                    +
                  </button>
                )}
              </button>

              {item.name === "Labels" && selected === "Labels" && (
                <div className="pl-8 pt-2">
                  <div className="flex items-center px-4 py-2 space-x-2">
                    <input
                      type="text"
                      placeholder="Enter project name"
                      className="flex-grow py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      className="px-3 py-1 bg-blue-600 text-primaryFontColor rounded-md hover:bg-blue-700"
                    >
                      Add
                    </button>
                  </div>
                  {labels.map((label, index) => (
                    <div
                      key={index}
                      className="text-sm flex justify-between items-center py-1"
                    >
                      <span>{label}</span>
                      <button
                        className="text-red-500 text-xs"
                        onClick={() => handleRemoveLabel(index)} // Function to remove a label
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav> */}

        <LeftSideMainMenu isCollapsed={isCollapsed} />
      </div>

      {/* Bottom Section */}
      <div>
        <button
          onClick={() => openModalSupport()}
          className={`flex gap-1 text-sm font-normal items-center mb-1.5 w-full py-1 px-2 rounded-lg text-primaryFontColor hover:bg-primaryBorder ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <div className={`w-5 ${
            isCollapsed ? "" : "ml-5"
          }`}>
            <Image className="" src={Support} alt="support" />
          </div>
          {!isCollapsed && `Support`}
        </button>
        {/* Modal Component */}
        {isSupportModalOpen && (
          <ModalSupport
            content={passwordModalContent}
            onClose={closeModalSupport}
          />
        )}
        <button
          onClick={() => handleNavigate("/settings")}
          className={`flex gap-1 text-sm font-normal items-center w-full py-1 px-2 rounded-lg text-primaryFontColor hover:bg-primaryBorder mb-14 ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <div className={`w-5 ${
            isCollapsed ? "" : "ml-5"
          }`}>
            <Image className="" src={Setting} alt="settings" />
          </div>
          {!isCollapsed && `Settings`}
        </button>
        <div className="flex gap-2 items-center">
          <Image
            className="w-8 h-8 rounded-full "
            width={32}
            height={32}
            src={loginData?.profile_url ?? User}
            alt="user"
          />
          <span className="text-sm font-normal">
          {!isCollapsed &&loginData?.displayName ? "":""}
          </span>
          <button onClick={handleSignOut} className="text-gray-400 ml-auto">
            <div className="w-4">
              <Image src={Logoout} alt="log-out" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
