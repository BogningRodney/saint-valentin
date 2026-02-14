"use client"

import Image from "next/image";
import { useState } from "react";

export default function Yes() {

  const [isOpen, setIsOpen] = useState(true);
  const [ yesButtonSize, setYesButtonSize ] = useState(0)

  if (!isOpen) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-3 px-3 bg-white sm:items-start">

        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">


          {/* Calin image */}
          <img src="/kiss.png" alt="" />

          {/* Content */}
          <div className="text-center mt-8 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Je savais que tu 
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              allais accepter !
            </h1>
          </div>

          {/* Buttons */}
          {/* <div className="flex gap-4 justify-center">
            <button
              onClick={() => alert('Yay! 💕')}
              className="px-12 py-4 bg-pink-500 hover:bg-pink-600 cursor-pointer text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Yes
            </button>
            <button
              onClick={() => alert('Maybe try again? 😢')}
              className="px-12 py-4 bg-red-950 hover:bg-red-900 cursor-pointer text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              No
            </button>
          </div> */}
        </div>

      </main>
    </div>
  );
}
