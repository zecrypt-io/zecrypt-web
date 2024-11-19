"use client";

import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import SidebarRight from "../components/sidebarRight";
import { userCredentials } from '../atoms/userCredentials'
import { useRecoilState } from 'recoil';  // Import RecoilRoot
import SignUp from "../components/signup";
import ToastNotifier from "../components/ToastNotifier";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Loader from "../components/loader";

export default function MainLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [loginData, setLoginData] = useRecoilState(userCredentials);
  console.log(pathname, 'pathnamepathname', loginData);
  useEffect(() => {
    if (!loginData?.isLogin && pathname !== '/login' && typeof window !== 'undefined') {
      router.push('/login'); // navigates to /about

    }
  }, [loginData?.isLogin])
  
  return (
    <>
      <ToastNotifier />
      {loginData?.isLogin && pathname !== '/login' ?
        <main className="flex w-full h-screen">
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <main className="max-w-full w-[76%] overflow-x-hidden" style={{ background: "#0e0e0e" }}>
            <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            {children} {/* The children will now have access to Recoil state */}
          </main>
          <SidebarRight />
        </main>
        : pathname === '/login' ? <main>
          <SignUp />
        </main> : 
          <Loader isVisible={true} />
        }
    </>
  );
}
