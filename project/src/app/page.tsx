"use client"

import Image from "next/image";
import Link from "next/link";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Educations from "@/components/Educations";
import { useState } from "react";

export default function Home() {
  const [isVisible, setVisible] = useState(false);

  return (<>
          <h1 className="md:text-5xl sm:text-7xl font-semibold">
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 text-transparent bg-clip-text">Hello, I&apos;m</span>
            <div className="tracking-tight">Florian Essomba</div>
          </h1>
          <p className="md:text-2xl">Student in Application developpement</p>
          <div className="flex space-x-4 mt-1 items-center">
            <div className="flex flex-col">
              <Image src="/image/belgium-flag.png" width={50} height={45} className="border rounded-sm mt-1 border-slate-800" alt="Belgium flag"
                onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}/>
                {!isVisible && (<div className="hiddenFlagName">Belgium</div>)}
                {isVisible && (<div className="flagName rounded">Belgium</div>)}
            </div>
            <Link href="https://github.com/KBluelvl" target="_blank">
              <Image src="/image/github.jpg" width={45} height={45} className="rounded-full mb-5 border"  alt="GitHub logo" />
            </Link>
            <Link href="https://www.linkedin.com/in/florian-essomba-804b1b216/" target="_blank">
              <Image src="/image/linkedin.jpg" width={45} height={45} className="rounded-full mb-5 border"  alt="Linkedin logo" />
            </Link>
            <a href="/cv/Resume Florian.pdf" className="rounded-3xl bg-gradient-to-r from-[#0454c4] to-[#53abf5] transition ease-out hover:scale-110 p-1 mb-5" download>
              <p className="rounded-3xl max-[640px]:text-xs bg-background hover:bg-gradient-to-r from-[#0454c4] to-[#53abf5] px-3 py-2">Download CV</p>
            </a>
          </div>
          <Skills />
          <h1 className="text-2xl sm:text-1xl font-semibold mt-20 mb-10 text-center">Education</h1>
          <Educations />
          <h1 className="text-2xl sm:text-1xl font-semibold mt-20 mb-10 text-center">Projects</h1>
          <Projects />
      </>
  )
}