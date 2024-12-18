import Image from "next/image";
import Link from "next/link";
import AutoPlayVideo from '@/components/AutoPlayVideo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
    return (<>
            <div className="flex flex-col items-center space-y-2">
                <Image src="/image/projects/STIB.png" width="597" height="298" className="rounded transition ease-out hover:scale-110" alt="STIB project image" />
                <h1 className="text-4xl text-center font-bold mt-4">STIB Path Finder</h1>
                <div className="flex space-x-2">
                    <h1 className="flex items-center justify-center space-x-2 border rounded-md border-none px-1 bg-slate-700">
                        <p>Java</p>
                    </h1>
                    <h1 className="flex items-center justify-center space-x-2 border rounded-md border-none px-1 bg-slate-700">
                        <p>JavaFX</p>
                    </h1>
                    <h1 className="flex items-center justify-center space-x-2 border rounded-md border-none px-1 bg-slate-700">
                        <p>SQL</p>
                    </h1>
                    <h1 className="flex items-center justify-center space-x-2 border rounded-md border-none px-1 bg-slate-700">
                        <p>Dijkstra&apos;s algorithm</p>
                    </h1>
                </div>
                <Link href="https://github.com/KBluelvl/STIB" target="_blank">
                    <h1 className="flex items-center justify-center space-x-2 border rounded-md px-1">
                        <p>Code</p>
                        <FontAwesomeIcon icon={faCode} className="fa-fw" />
                    </h1>
                </Link>
                <p className="text-center text-gray-400">Calculates the fastest routes in the Brussels metro system STIB.</p>
            </div>
            <div className="flex flex-col items-center mt-10 space-y-2">
                <Image src="/image/projects/StartReview.png" width="597" height="298" className="rounded transition ease-out hover:scale-110" alt="StartReview project image" />
                <h1 className="text-4xl text-center font-bold mt-4">StartReview</h1>
                <div className="flex space-x-2">
                    <h1 className="flex items-center justify-center space-x-2 border rounded-md border-none px-1 bg-slate-700">
                        <p>Mobile</p>
                    </h1>
                    <h1 className="flex items-center justify-center space-x-2 border rounded-md border-none px-1 bg-slate-700">
                        <p>API</p>
                    </h1>
                    <h1 className="flex items-center justify-center space-x-2 border rounded-md border-none px-1 bg-slate-700">
                        <p>GraphQL</p>
                    </h1>
                </div>
                <Link href="https://github.com/KBluelvl/StartReview" target="_blank">
                    <h1 className="flex items-center justify-center space-x-2 border rounded-md px-1">
                        <p>Code</p>
                        <FontAwesomeIcon icon={faCode} className="fa-fw" />
                    </h1>
                </Link>
                <p className="text-center text-gray-400">Use the Start.GG API.</p>
            </div>
            <div className="flex flex-col items-center mt-10 space-y-2">
                <AutoPlayVideo />
                <h1 className="text-4xl text-center font-bold mt-4">Chess</h1>
                <div className="flex space-x-2">
                    <h1 className="flex items-center justify-center space-x-2 border rounded-md border-none px-1 bg-slate-700">
                        <p>Java</p>
                    </h1>
                    <h1 className="flex items-center justify-center space-x-2 border rounded-md border-none px-1 bg-slate-700">
                        <p>JavaFX</p>
                    </h1>
                </div>
                <Link href="https://github.com/KBluelvl/Chess" target="_blank">
                    <h1 className="flex items-center justify-center space-x-2 border rounded-md px-1">
                        <p>Code</p>
                        <FontAwesomeIcon icon={faCode} className="fa-fw" />
                    </h1>
                </Link>
                <p className="text-center text-gray-400">A chess game in java.</p>
            </div>
            <div className="flex flex-col items-center mt-10 space-y-2">
                <Image src="/image/projects/Sokoban.png" width="597" height="298" className="rounded transition ease-out hover:scale-110" alt="StartReview project image" />
                <h1 className="text-4xl text-center font-bold mt-4">Sokoban</h1>
                <div className="flex space-x-2">
                    <h1 className="flex items-center justify-center space-x-2 px-1 border rounded-md border-none bg-slate-700">
                        <p>JavaScript</p>
                    </h1>
                    <h1 className="flex items-center justify-center space-x-2 px-1 border rounded-md border-none bg-slate-700">
                        <p>HTML</p>
                    </h1>
                    <h1 className="flex items-center justify-center space-x-2 px-1 border rounded-md border-none bg-slate-700">
                        <p>CSS</p>
                    </h1>
                </div>
                <div className="flex space-x-3">
                    <Link href="https://github.com/KBluelvl/Sokoban" target="_blank">
                        <h1 className="flex items-center justify-center space-x-2 border rounded-md px-1">
                            <p>Code</p>
                            <FontAwesomeIcon icon={faCode} className="fa-fw" />
                        </h1>
                    </Link>
                    <Link href="https://kbluelvl.github.io/Sokoban/" target="_blank">
                        <h1 className="flex items-center justify-center space-x-2 border rounded-md px-1">
                            <p>Website</p>
                            <FontAwesomeIcon icon={faGlobe} className="fa-fw" />
                        </h1>
                    </Link>
                </div>
                <p className="text-center text-gray-400">Sokoban the puzzle game.</p>
            </div>
        </>)
}