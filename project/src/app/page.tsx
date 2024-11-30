import Link from "next/link";

export default function Home() {
  return (<>
      <header>
        <div className="fixed border border-[#33353F] top-0 left-0 right-0">
          <div className="end">
            <ul className="flex ">
              <li><Link href="/">Home</Link></li> 
              <li><Link href="/">Projects</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/about">Language</Link></li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <div className="container mt-24 px-12">
          <h1 className="text-5xl sm:text-7xl font-semibold">
            <span className="text-blue-300">Hello, I'm</span>
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
