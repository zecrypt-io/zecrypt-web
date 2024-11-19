'use client';  // Add this directive to mark this component as a Client Component
import { Inter } from "next/font/google";
import { RecoilRoot, useRecoilState } from 'recoil';  // Import RecoilRoot
import MainLayout from './MainLayout'
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
      <RecoilRoot> 
          <MainLayout>{children}</MainLayout>
        </RecoilRoot>
      </body>
    </html>
  );
}
