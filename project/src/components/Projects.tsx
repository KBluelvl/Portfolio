import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (<>
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <Image src="/image/projects/STIB.png" width="597" height="298" className="rounded" alt="STIB project image" />
                <Link href="https://github.com/KBluelvl/STIB">
                    <h1 className="text-4xl text-center font-bold mt-4">STIB Path Finder</h1>
                    <p className="text-center text-gray-600">Calculates the fastest routes in the Brussels metro system (STIB - Société des Transports Intercommunaux de Bruxelles)</p>
                </Link>
            </div>
        </div>
        </>)
}