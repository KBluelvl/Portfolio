import Link from "next/link";

export default function Home() {
  return (<>
      <header>
        <nav className="fixed border border-[#0e1845] top-0 left-0 right-0">
          <div className="flex justify-between">
            <h1 className="text-2xl my-3 ml-5 font-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">PORTFOLIO</h1>
            <div className="my-3">
              <ul className="flex justify-between text-2xl md:space-x-20 ">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="https://github.com/KBluelvl/Portfolio" target="_blank">code</Link></li>
                <li>Language</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="container mt-24 px-12">
          <h1 className="text-5xl sm:text-7xl font-semibold">
            <span className="text-blue-300">Hello, I&apos;m</span>
            <div className="font-semibold tracking-tight">
              Florian Essomba
            </div>
          </h1>
        </div>
      </main>

      <footer></footer>
      </>
  )
}
