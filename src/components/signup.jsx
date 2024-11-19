"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Backgroundimageup from "../asssets/images/react-2.png";
import Backgroundimagedown from "../asssets/images/react-1.png";
import Googleicon from "../asssets/images/google.svg";
import Cricletick from "../asssets/images/circle-tick.svg";
import Githubicon from "../asssets/images/github.svg";
import { useRecoilState } from "recoil";
import { userCredentials } from '../atoms/userCredentials'
import { useRouter } from 'next/navigation';
import { auth, googleProvider, githubProvider, signInWithPopup } from './config/firebaseConfig'
import { userLogin } from '../app/api/context/login/index'
import toast, { Toaster } from 'react-hot-toast'

const SignUp = () => {
  const router = useRouter();
  const isValidUrl = (string) => {
    try {
      new URL(string); // If this doesn't throw, it's a valid URL
      return true;
    } catch (_) {
      return false;
    }
  };
  const [_, setLoginData] = useRecoilState(userCredentials);
  const userLoginApi = (data, loginData) => {
    // Function to create enquiry
    userLogin(data)((response) => {
      if (response && response?.status_code === 200) {

        const profile_url = isValidUrl(response?.data?.profile_url) ? response?.data?.profile_url : null
        setLoginData({ ...loginData, profile_url: profile_url })
        localStorage.setItem('token', response?.data?.token)
        toast.success(
          "Thank you for reaching out to us.",
          profile_url && {
            icon: <Image src={profile_url} width={210} height={127} alt='logo' />
          }
        );

      } else {
        setLoginData({ ...loginData })

        toast.error(
          "Something went wrong. Please try again later.",
          {
            // icon: <Image src={Cricletick} width={210} height={127} alt='logo' />
          }
        );
      }
    });
  }
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const loginData = {
        isLogin: true,
        accessToken: result?.user?.accessToken,
        displayName: result?.user?.displayName,
        email: result?.user?.email,
        uuid: result?.user?.uid,
        stsTokenManager: result.user.stsTokenManager,
      }
      const data = {
        uid: result?.user?.uid,
        email: result?.user?.email,
        login_method: "gmail"
      }
      userLoginApi(data, loginData)
      // setLoginData(loginData)
      router.push('/'); // navigates to /

    } catch (error) {
    }
  }

  const signInWithGitHub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider)
    } catch (error) {
    }
  }
  const handleNavigate = () => {
    // setHide(true)
    router.push('/'); // navigates to /about
  };

  return (
    <div
      className="relative flex justify-center items-center bg-backgroundLight min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${Backgroundimageup.src}), url(${Backgroundimagedown.src})`,
        backgroundSize: "600px auto, 600px auto",
        backgroundPosition: "top 0px right 0px, bottom 0px left 0px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 w-5/6 max-w-full mx-auto">
        <div className="flex flex-col justify-between mc:flex-row gap-10 mc:gap-0">
          {/* Left Section */}
          <div className="w-full mc:w-[47%] flex flex-col">
            <div>
              <h4 className="mc:text-3xl vs:text-2xl font-semibold text-primaryFontColor mb-4">
                Try up to 3Password Families free for 40 days
              </h4>
            </div>
            <ul className="mc:mb-12 vs:mb-6 mc:text-lg vs:text-base space-y-4 leading-5">
              {[
                "5 family members, unlimited devices",
                "Shared vaults let family members choose what they want to share (or keep private)",
                "Advanced security with authenticated encryption, PAKE, and more",
                "Alerts for compromised websites and vulnerable passwords",
                "Available on Mac, iOS, Windows, Android, Chrome OS, and Linux",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-secondaryFontColor"
                >
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      src={Cricletick}
                      alt="check icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <div>
              <p className="mc:text-lg vs:text-base mb-2 text-secondaryFontColor">
                Looking for an individual, team, or business account?
              </p>
              <Link href="/" className=" border-b border-primaryFontColor">
                <div className="text-primaryFontColor mc:text-lg vs:text-base inline-block">
                  See all account options
                </div>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="flex flex-col items-center justify-center w-full mc:w-[47%] p-6 bg-backgroundLight border rounded-lg border-secondaryBorder"
          >
            <div className="w-full max-w-mc">
              <div className="text-center mb-10">
                <h4 className="mc:text-2xl vs:text-xl font-semibold text-primaryFontColor mb-2">
                  Sign In
                </h4>
                <p className="text-sm text-secondaryFontColor">Your social campaigns</p>
              </div>
              <div>
                <button onClick={signInWithGoogle}
                  className="flex items-center justify-center w-full gap-3 py-2 mb-6 vs:text-base mc:text-lg font-normal text-primaryFontColor border rounded-lg border-primaryBorder"
                >
                  <div className="w-6">
                    <Image
                      src={Googleicon}
                      alt="Google icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  Sign in with Google
                </button>
                <p className="relative text-xs text-center mb-6 flex items-center gap-6 text-secondaryFontColor">
                  <span
                    className="flex-1 border-t border-primaryBorder"
                  ></span>
                  OR
                  <span
                    className="flex-1 border-t border-primaryBorder"
                  ></span>
                </p>
                <button onClick={signInWithGitHub}
                  className="flex items-center justify-center w-full gap-3 py-2 mc:text-lg vs:text-base font-normal text-primaryFontColor border rounded-lg border-primaryBorder"
                >
                  <div className="w-6 bg-primaryFontColor border border-backgroundLight rounded-full">
                    <Image
                      src={Githubicon}
                      alt="GitHub icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  Sign in with GitHub
                </button>
                <p className="mt-6 text-xs text-center text-secondaryFontColor">
                  We’ve set your account name based on your social campaign
                  name. Don’t worry, you can easily update it later on your
                  profile page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
