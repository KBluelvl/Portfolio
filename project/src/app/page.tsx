import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<>
      <main>
          <h1 className="md:text-5xl sm:text-7xl font-semibold">
            <span className="text-blue-300">Hello, I&apos;m</span>
            <div className="tracking-tight">Florian Essomba</div>
          </h1>
          <p className="md:text-2xl">Student in Application developpement</p>
          <div className="flex space-x-4 mt-1">
            <Link href="https://github.com/KBluelvl">
              <Image src="/image/github.jpg" width={45} height={45} className="rounded-full"  alt="github logo" />
            </Link>
            <Link href="https://www.linkedin.com/in/florian-essomba-804b1b216/">
              <Image src="/image/linkedin.jpg" width={45} height={45} className="rounded-full"  alt="github logo" />
            </Link>
          </div>
          <h1 className="text-2xl sm:text-1xl font-semibold mt-20">Skills</h1>
          <div className="inline-block border rounded-lg border-transparent bg-zinc-900 px-10">
              <Image src="/image/java-icon.svg" width="32" height="32" alt="github logo" />
              <p className="text-center">Java</p>
          </div>
      </main>
      <footer></footer>
      </>
  )
}
