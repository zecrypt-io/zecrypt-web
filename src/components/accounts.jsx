/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";

import AddAccount from "../components/modalAddAccount";

import Image from "next/image";
import Google from "../asssets/images/google.svg";
import Github from "../asssets/images/Github2.svg";
import Microsoft from "../asssets/images/Microsoft.svg";
import Netflix from "../asssets/images/Netflix.svg";
import Spotify from "../asssets/images/Spotify.svg";
import Notion from "../asssets/images/Notion.svg";
import ArrowDown from "../asssets/images/arrow-down.svg";
import Plus from "../asssets/images/plus.svg";
import Menu from "../asssets/images/Menu.svg";
import UpDown from "../asssets/images/updown-arrow.svg";
import Search from "../asssets/images/Search.svg";

function accounts() {
  // Modal For Add Account
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [accountModalContent, setAccountModalContent] = useState("");
  // Modal Functions
  const openModalAccount = (contentPassowrd) => {
    setAccountModalContent(contentPassowrd);
    setIsAccountModalOpen(true);
  };
  const closeModalAccount = () => setIsAccountModalOpen(false);

  return (
    <div
      className="pt-[45px] pb-[45px] px-[26px] text-primaryFontColor h-[86%] relative bg-backgroundLight"
    >
      <div className="mb-4 text-gray-500 flex items-center space-x-2">
        <span className="cursor-pointer text-sm py-1 px-2 text-secondaryFontColor">
          Dashboards
        </span>
        <span className="text-secondaryFontColor">
          /
        </span>
        <span className="cursor-pointer text-sm py-1 px-2 text-primaryFontColor">
          Accounts
        </span>
      </div>

      <div className="flex items-center mb-4 gap-3">
        <div className="flex items-center p-1 px-2 gap-2 bg-backgroundLight">
          <button className="text-sm font-semibold rounded-md">
            All Accounts
          </button>
          <button className="flex items-center w-4 h-2">
            <Image
              src={ArrowDown}
              alt="arrowicon"
              className="w-full h-full block"
            />
          </button>
        </div>
        <button
          onClick={() => openModalAccount()}
          className="flex items-center gap-2 p-1 px-2 border rounded-lg border-primaryBorder"
        >
          <div className="bg-backgroundLight font-semibold text-sm">
            Add new account
          </div>
          <div>
            <Image src={Plus} alt="PlusIcon" />
          </div>
        </button>
        {/* Modal Component */}
        {isAccountModalOpen && (
          <AddAccount
            content={accountModalContent}
            onClose={closeModalAccount}
          />
        )}
      </div>

      <div className="flex items-center gap-3 mb-4 p-2 border rounded-lg border-primaryBorder">
        <div className="gap-2 flex items-center h-7 w-10/12">
          <button className="p-1 h-6 w-7">
            <Image src={Menu} alt="MenuIcon" className="w-full h-full" />
          </button>
          <button className="p-1 h-6 w-7">
            <Image src={UpDown} alt="UpdownIcon" className="w-full h-full" />
          </button>
        </div>
        <div
          className="flex items-center py-1 px-2 border rounded-lg border-searchBorder w-1/6 gap-2.5 bg-searchBg"
        >
          <Image src={Search} alt="search" width={20} height={20} />
          <input
            type="text"
            placeholder="Search"
            className="bg-searchBg text-searchText placeholder-searchHolder outline-none w-3/4 text-sm"
          />
          <span className="text-searchHolder">/</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mm:grid-cols-4 gap-4">
        <div className="bg-backgroundLight cursor-pointer py-7 px-4 rounded-xl border border-primaryBorder text-center">
          <div className="mb-4">
            <Image
              src={Google}
              alt="Google"
              className="p-2 w-10 h-10 bg-primaryBorder rounded-lg mx-auto"
            />
          </div>
          <div className="text-primaryFontColor text-lg font-semibold">Google</div>
          <div className="flex flex-col gap-3 py-3 px-0">
            <div className="flex justify-between items-center">
              <div className="text-xs text-searchIconText">
                Created :
              </div>
              <div className="text-xs">01/09/2024</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-searchIconText">
                Modified :
              </div>
              <div className="text-xs">03/09/2024</div>
            </div>
          </div>
        </div>

        <div className="bg-backgroundLight cursor-pointer py-7 px-4 rounded-xl border border-primaryBorder text-center">
          <div className="mb-4">
            <Image
              src={Github}
              alt="Github"
              className="p-2 w-10 h-10 bg-primaryBorder rounded-lg mx-auto"
            />
          </div>
          <div className="text-primaryFontColor text-lg font-semibold">GitHub</div>
          <div className="flex flex-col gap-3 py-3 px-0">
            <div className="flex justify-between items-center">
              <div className="text-xs text-searchIconText">
                Created :
              </div>
              <div className="text-xs">01/09/2024</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-searchIconText">
                Modified :
              </div>
              <div className="text-xs">03/09/2024</div>
            </div>
          </div>
        </div>

        <div className="bg-backgroundLight cursor-pointer py-7 px-4 rounded-xl border border-primaryBorder text-center">
          <div className="mb-4">
            <Image
              src={Microsoft}
              alt="Microsoft"
              className="p-2 w-10 h-10 bg-primaryBorder rounded-lg mx-auto"
            />
          </div>
          <div className="text-primaryFontColor text-lg font-semibold">Microsoft</div>
          <div className="flex flex-col gap-3 py-3 px-0">
            <div className="flex justify-between items-center">
              <div className="text-xs text-searchIconText">
                Created :
              </div>
              <div className="text-xs">01/09/2024</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-searchIconText">
                Modified :
              </div>
              <div className="text-xs">03/09/2024</div>
            </div>
          </div>
        </div>

        <div className="bg-backgroundLight cursor-pointer py-7 px-4 rounded-xl border border-primaryBorder text-center">
          <div className="mb-4">
            <Image
              src={Netflix}
              alt="Netflix"
              className="p-2 w-10 h-10 bg-primaryBorder rounded-lg mx-auto"
            />
          </div>
          <div className="text-primaryFontColor text-lg font-semibold">Netflix</div>
          <div className="flex flex-col gap-3 py-3 px-0">
            <div className="flex justify-between items-center">
              <div className="text-xs text-searchIconText">
                Created :
              </div>
              <div className="text-xs">01/09/2024</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-searchIconText">
                Modified :
              </div>
              <div className="text-xs">03/09/2024</div>
            </div>
          </div>
        </div>

        <div className="bg-backgroundLight cursor-pointer py-7 px-4 rounded-xl border border-primaryBorder text-center">
          <div className="mb-4">
            <Image
              src={Spotify}
              alt="Spotify"
              className="p-2 w-10 h-10 bg-primaryBorder rounded-lg mx-auto"
            />
          </div>
          <div className="text-primaryFontColor text-lg font-semibold">Spotify</div>
          <div className="flex flex-col gap-3 py-3 px-0">
            <div className="flex justify-between items-center">
              <div className="text-xs text-searchIconText">
                Created :
              </div>
              <div className="text-xs">01/09/2024</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-searchIconText">
                Modified :
              </div>
              <div className="text-xs">03/09/2024</div>
            </div>
          </div>
        </div>

        <div className="bg-backgroundLight cursor-pointer py-7 px-4 rounded-xl border border-primaryBorder text-center">
          <div className="mb-4">
            <Image
              src={Notion}
              alt="Notion"
              className="p-2 w-10 h-10 bg-primaryBorder rounded-lg mx-auto"
            />
          </div>
          <div className="text-primaryFontColor text-lg font-semibold">Notion</div>
          <div className="flex flex-col gap-3 py-3 px-0">
            <div className="flex justify-between items-center">
              <div className="text-xs text-searchIconText">
                Created :
              </div>
              <div className="text-xs">01/09/2024</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-searchIconText">
                Modified :
              </div>
              <div className="text-xs">03/09/2024</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 flex w-[96%] justify-end">
        <button className="px-3 py-1 rounded-md mx-1">&lt;</button>
        <button className="px-3 py-1 rounded-md mx-1">1</button>
        <button className="px-3 py-1 rounded-md mx-1">2</button>
        <button className="px-3 py-1 rounded-md mx-1">3</button>
        <button className="px-3 py-1 rounded-md mx-1">4</button>
        <button className="px-3 py-1 rounded-md mx-1">5</button>
        <button className="px-3 py-1 rounded-md mx-1">&gt;</button>
      </div>
    </div>
  );
}

export default accounts;
