import Image from "next/image";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="w-full mt-24 flex min-h-16 border border-[#0e1845] justify-between items-center max-[640px]:text-xs px-2">
            <Logo />
            <div className="flex">
                <p className="mr-5">This site was made with Tailwind CSS.</p>
                <Image src="/image/icon/tailwind-css.svg" width="32" height="32" alt="Tailwind logo" />
            </div>
        </footer>
    );
}