import Link from "next/link";
import Logo from "./Logo";

export default function Header(){
    return (
        <header>
          <nav className="fixed border border-[#0e1845] top-0 left-0 right-0">
            <div className="flex justify-between px-5">
              <Logo />
                <ul className="flex sm:text-2xl space-x-20 max-[720px]:space-x-5 font-semibold">
                  <li className="flex items-center"><Link href="/projects" className="hover:scale-110">Projects</Link></li>
                  <li className="flex items-center"><Link href="/about" className="hover:scale-110">About</Link></li>
                  <li className="flex items-center"><Link href="/contact" className="hover:scale-110">Contact</Link></li>
                </ul>
            </div>
          </nav>
        </header>
    );
}