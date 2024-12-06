import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full flex min-h-16 border border-[#0e1845] justify-center items-center">
            <p className="mr-5">This site was made with Tailwind CSS.</p>
            <Image src="/image/icon/tailwind-css.svg" width="32" height="32" alt="Tailwind logo" />
        </footer>
    );
}