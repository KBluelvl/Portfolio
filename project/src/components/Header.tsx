import Link from "next/link";
import Logo from "./Logo";

export default function Header(){
    return (
        <header>
          <nav className="fixed border border-[#0e1845] top-0 left-0 right-0 bg-background">
            <div className="flex justify-between">
              <Logo />
                <ul className="flex sm:text-2xl space-x-20 max-[720px]:space-x-5 mr-5 font-semibold">
                  <li className="flex items-center"><Link href="/">Home</Link></li>
                  <li className="flex items-center"><Link href="/projects">Projects</Link></li>
                  <li className="flex items-center"><Link href="/about">About</Link></li>
                  <li className="flex items-center"><Link href="https://github.com/KBluelvl/Portfolio" target="_blank">Code</Link></li>
                </ul>
            </div>
          </nav>
        </header>
    );
}