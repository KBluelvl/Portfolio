import Image from "next/image";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="w-full mt-24 flex border border-[#0e1845] justify-between items-center max-[640px]:text-xs px-2">
            <Logo />
            <div className="flex">
                <p className="text-gray-500">MADE WITH</p>
                <Image src="/image/icon/tailwind-css.svg" width="32" height="32" className="px-2" alt="Tailwind logo" />
                <p>Tailwind CSS</p>
            </div>
            <p>All rights reserved.</p>
        </footer>
    );
}