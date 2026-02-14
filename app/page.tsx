"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TemplateCard from "./component/templatecard/templateCard";
import TemplateCard2 from "./component/templateCard2/templateCard2";
import TemplateCard3 from "./component/templateCard3/templateCard3";
import Question from "./question/page";

export default function Home() {

  const [isOpen, setIsOpen] = useState(true);
  const [ yesButtonSize, setYesButtonSize ] = useState(1)

  if (!isOpen) return null;

  // console.log(" test button size ", yesButtonSize.toString())

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-black">
      <main className="flex min-h-screen w-full pt-6 max-w-4xl flex-col items-center  px-3 bg-white sm:items-start overflow-hidden">

      <h1 className="text-center w-full text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-pink-700">
        Rodney te souhaite une merveilleuse Saint-Valentin 💘✨
      </h1>

        {/* 

        <h1 className="text-start border-b pb-3 my-6  w-full text-2xl md:text-3xl lg:text-4xl font-semibold"> 
          Themes
        </h1> */}

        {/* <div className="w-full flex justify-center my-4">
          <button className="text-white bg-pink-500 hover:bg-pink-400 cursor-pointer py-3 px-6 rounded-2xl w-full text-xl font-medium">New template</button>
        </div> */}

        {/* Template cards */}

          <Question />
      

      </main>
    </div>
  );
}
