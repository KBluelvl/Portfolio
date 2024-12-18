import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import AutoPlayVideo from '@/components/AutoPlayVideo';
import { ProjectCardType } from "@/types";

export default function ProjectCard({project}: ProjectCardType) {
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
                <h1 className="text-4xl font-bold">{project.title}</h1>
                <div className="flex space-x-2">
                    {project.tags.map((tag: string) => {
                        return (
                            <h1 className="border rounded-md border-none px-1 bg-slate-700 hover:bg-slate-800" key={tag}>
                                <a href={`/projects/${tag}`} className="hover:text-gray-300">{tag}</a>
                            </h1>
                        )
                    })}
                </div>
                <div className="flex space-x-3">
                    <Link href={project.github} target="_blank">
                        <h1 className="flex items-center space-x-2 border rounded-md px-1">
                            <p>Code</p>
                            <FontAwesomeIcon icon={faCode} className="fa-fw" />
                        </h1>
                    </Link>
                    { project.website 
                    ? <Link href={project.website} target="_blank">
                        <h1 className="flex items-center space-x-2 border rounded-md px-1">
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