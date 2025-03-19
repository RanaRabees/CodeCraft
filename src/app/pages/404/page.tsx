"use client";

import Link from "next/link";
import Bars from "@/app/components/Bars";

export default function Home() {
  return (
    <>
      <Bars />
      <main className="min-h-screen w-full p-6 overflow-y-auto pt-20 pl-0 sm:pl-[255px] flex-1 bg-[#f9fafb]">
        <div className="flex flex-col items-center text-center">
          <svg
            className="w-12 h-12  text-purple-200"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="text-[4rem] font-semibold text-gray-700 mt-4">404</h1>
          <p className="text-gray-600 mt-2">
            Page not found. Check the address or{" "}
            <Link href="/" className="text-purple-600 hover:underline">
              go back
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
}
