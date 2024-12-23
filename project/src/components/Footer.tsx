import Image from "next/image";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="w-full mt-24 flex border border-[#0e1845] justify-between items-center max-[640px]:text-xs px-2">
            <Logo />
            <div className="flex items-center">
                <p className="text-gray-500">MADE WITH</p>
                <div className="relative h-8 w-8 max-[640px]:h-2">
                    <Image src="/image/icon/tailwind-css.svg" fill className="px-2 max-[640px]:px-0" objectFit="contain" alt="Tailwind logo" />
                </div>
                <p>Tailwind CSS</p>
            </div>
            <p>All rights reserved.</p>
        </footer>
    );
}   