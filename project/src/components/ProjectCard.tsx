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
                            <p className="tag border rounded-md border-none px-1 bg-slate-700 hover:bg-slate-800 max-[640px]:text-xs" key={tag}>
                                <Link href={`/projects/${tag}`} className="hover:text-gray-300">{tag}</Link>
                            </p>
                        )
                    })}
                </div>
                <div className="flex space-x-3">
                    <Link href={project.github} target="_blank">
                        <div className="linkButton flex items-center space-x-2 border rounded-md px-1">
                            <p>Code</p>
                            <FontAwesomeIcon icon={faCode} className="fa-fw" />
                        </div>
                    </Link>
                    { project.website 
                    ? <Link href={project.website} target="_blank">
                        <div className="linkButton flex items-center space-x-2 border rounded-md px-1">
                            <p>Website</p>
                            <FontAwesomeIcon icon={faGlobe} className="fa-fw" />
                        </div>
                        </Link>
                    :null}
                </div>
                <p className="descriptionText text-center">{project.desc}</p>
            </div>
        </>)
}