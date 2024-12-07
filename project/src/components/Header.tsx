import Link from "next/link";
import Logo from "./Logo";

export default function Header(){
    return (
        <header>
          <nav className="fixed border border-[#0e1845] top-0 left-0 right-0 bg-background">
            <div className="flex justify-between">
              <Logo />
              <div className="my-3">
                <ul className="flex justify-between sm:text-2xl space-x-20 max-[720px]:space-x-5 mr-5 font-semibold">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/projects">Projects</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="https://github.com/KBluelvl/Portfolio" target="_blank">Code</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
    );
}