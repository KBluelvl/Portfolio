import Link from "next/link"

export default function Logo() {
    return (
        <Link href="/">
            <h1 className="text-2xl my-3 ml-5 font-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">PORTFOLIO</h1>
        </Link>
    )
}