"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Question() {

  const [isOpen, setIsOpen] = useState(true);
  const [ yesButtonSize, setYesButtonSize ] = useState(1)

  if (!isOpen) return null;

  // console.log(" test button size ", yesButtonSize.toString())

  return (


        <div className="bg-white rounded-3xl mx-auto mt-6 shadow-2xl w-full max-w-md inline-block p-8 relative">


          {/* Calin image */}
          <img src="/calin.png" alt="" />

          {/* Content */}
          <div className="text-center mt-8 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Veux-tu être 
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              ma Valentine ?
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <Link
              href="/yes"
              style={{ fontSize: `${yesButtonSize}rem` }}
              className={`px-12 py-4  bg-pink-500 hover:bg-pink-600 cursor-pointer text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200`}
            >
              Oui
            </Link>
            <button
              onClick={() => setYesButtonSize(yesButtonSize * 1.5)}
              className="px-12 py-4 bg-red-950 h-16 inline-block hover:bg-red-900 cursor-pointer text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Non
            </button>
          </div>
        </div>


  );
}
