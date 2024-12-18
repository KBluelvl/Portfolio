import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import AutoPlayVideo from '@/components/AutoPlayVideo';

export default function ProjectCard({ project }) {
    return (<>
            <div className="flex flex-col items-center space-y-2 mt-10" key={project.id}>
                {project.image 
                    ? <Image 
                        src={project.image} 
                        width="597" 
                        height="298" 
                        className="rounded transition ease-out hover:scale-110" 
                        alt={project.title} />
                    : <AutoPlayVideo />
                }
                <h1 className="text-4xl text-center font-bold mt-4">{project.title}</h1>
                <div className="flex space-x-2">
                    {project.tags.map((tag, index) => {
                        return (
                            <h1 className="flex items-center justify-center space-x-2 border rounded-md border-none px-1 bg-slate-700" key={tag}>
                                <p>{tag}</p>
                            </h1>
                        )   
                    })}
                </div>
                <div className="flex space-x-3">
                    <Link href={project.github} target="_blank">
                        <h1 className="flex items-center justify-center space-x-2 border rounded-md px-1">
                            <p>Code</p>
                            <FontAwesomeIcon icon={faCode} className="fa-fw" />
                        </h1>
                    </Link>
                    { project.website ?
                    <Link href={project.website} target="_blank">
                        <h1 className="flex items-center justify-center space-x-2 border rounded-md px-1">
                            <p>Website</p>
                            <FontAwesomeIcon icon={faGlobe} className="fa-fw" />
                        </h1>
                    </Link>
                    :null}
                </div>
                <p className="text-center text-gray-400">{project.desc}</p>
            </div>
        </>)
}