"use client";

import { useState } from "react";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";

import ModalSupport from "./modalSupport";
import CustomSelect from "../components/customeSeclect";
import { auth } from "./config/firebaseConfig";
import { userCredentials } from "../atoms/userCredentials";

import Logo from "../asssets/images/logo.svg";
import Key from "../asssets/images/key.svg";
import Support from "../asssets/images/support.svg";
import Setting from "../asssets/images/settings.svg";
import User from "../asssets/images/user.svg";
import Logoout from "../asssets/images/log-out.svg";
import MenuIcon from "../asssets/images/menu.svg";

export default function SidebarLeft() {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loginData, setLoginData] = useRecoilState(userCredentials);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut(auth);
    setLoginData({
      isLogin: false,
      displayName: null,
      email: null,
      uuid: null,
      stsTokenManager: {},
    });
    localStorage.removeItem("token");
  };

  const handleNavigate = (link) => {
    if (link) router.push(link);
  };

  const openModalSupport = () => setIsSupportModalOpen(true);
  const closeModalSupport = () => setIsSupportModalOpen(false);

  return (
    <div
      className="text-white flex flex-col justify-between p-3 border-r"
      style={{
        width: isCollapsed ? "80px" : "240px",
        transition: "width 1000ms, left 1000ms, right 1000ms",
        backgroundColor: "#0e0e0e",
        borderColor: "#262626",
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center justify-center mb-6 p-2 hover:bg-customGray rounded-lg"
        style={{ backgroundColor: "#1e1e1e" }}
      >
        <Image
          src={MenuIcon}
          alt="menu"
          width={20}
          height={20}
          className={`transition-transform duration-300 ${
            isCollapsed ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex justify-center gap-2 mt-2 items-center mb-8">
          <div className="w-6 cursor-pointer">
            <Image src={Logo} alt="logo" />
          </div>
          {!isCollapsed && (
            <h1 className="text-lg font-semibold" style={{ fontSize: "1rem" }}>
              Zecrypt
            </h1>
          )}
        </div>

        {/* Project Selector */}
        <CustomSelect isCollapsed={isCollapsed} />

        {/* Generate Password Button */}
        <button
          onClick={() => openModalSupport()}
          className={`flex gap-2 items-center border hover:bg-customGray w-full py-1 px-2 rounded-lg mb-6 ${
            isCollapsed ? "justify-center" : ""
          }`}
          style={{ borderColor: "#262626" }}
        >
          <div className="w-5">
            <Image src={Key} alt="key" />
          </div>
          {!isCollapsed && (
            <span
              className="text-sm font-normal"
              style={{ fontSize: "0.875rem" }}
            >
              Generate Password
            </span>
          )}
        </button>

        {/* Favorites Section */}
        <h2
          className={`text-sm font-normal mb-2 ${
            isCollapsed ? "hidden" : "ml-2.5"
          }`}
          style={{ fontSize: "0.875rem", color: "#6e6e6e" }}
        >
          Favorites
        </h2>
        <nav className="space-y-2 mb-6">
          <button
            onClick={() => handleNavigate("/")}
            className={`flex gap-2 items-center w-full py-1 px-2 rounded-lg hover:bg-customGray ${
              isCollapsed ? "justify-center" : "ml-1.5"
            }`}
          >
            <Image src={Key} alt="dot" width={20} height={20} />
            {!isCollapsed && (
              <span
                className="text-sm font-normal"
                style={{ fontSize: "0.875rem" }}
              >
                Accounts
              </span>
            )}
          </button>
          <button
            onClick={() => handleNavigate("/settings")}
            className={`flex gap-2 items-center w-full py-1 px-2 rounded-lg hover:bg-customGray ${
              isCollapsed ? "justify-center" : "ml-1.5"
            }`}
          >
            <Image src={Key} alt="dot" width={20} height={20} />
            {!isCollapsed && (
              <span
                className="text-sm font-normal"
                style={{ fontSize: "0.875rem" }}
              >
                Settings
              </span>
            )}
          </button>
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        <button
          onClick={openModalSupport}
          className={`flex gap-1 items-center w-full py-1 px-2 rounded-lg hover:bg-customGray mb-1.5 ${
            isCollapsed ? "justify-center" : "ml-1.5"
          }`}
        >
          <Image src={Support} alt="support" width={20} height={20} />
          {!isCollapsed && (
            <span
              className="text-sm font-normal"
              style={{ fontSize: "0.875rem" }}
            >
              Support
            </span>
          )}
        </button>
        <button
          onClick={() => handleNavigate("/settings")}
          className={`flex gap-1 items-center w-full py-1 px-2 rounded-lg hover:bg-customGray mb-14 ${
            isCollapsed ? "justify-center" : "ml-1.5"
          }`}
        >
          <Image src={Setting} alt="settings" width={20} height={20} />
          {!isCollapsed && (
            <span
              className="text-sm font-normal"
              style={{ fontSize: "0.875rem" }}
            >
              Settings
            </span>
          )}
        </button>
        <div className="flex items-center gap-2">
          <Image
            src={loginData?.profile_url ?? User}
            alt="user"
            width={32}
            height={32}
            className="rounded-full"
          />
          {!isCollapsed && (
            <span
              className="text-sm font-normal"
              style={{ fontSize: "0.875rem" }}
            >
              {loginData?.displayName}
            </span>
          )}
          <button onClick={handleSignOut} className="text-gray-400 ml-auto">
            <Image src={Logoout} alt="log-out" width={20} height={20} />
          </button>
        </div>
      </div>

      {/* Modal Support */}
      {isSupportModalOpen && (
        <ModalSupport content="Support Content" onClose={closeModalSupport} />
      )}
    </div>
  );
}
