import projects from '@/data/projects';
import ProjectCard from "@/components/ProjectCard";

export default function TagPage({params}: {params: {tag: string}}) {
    const { tag } = params;
    const filteredProjects = projects.filter((project) => project.tags.includes(tag))
    return (
         <div className="flex flex-col items-center">
            <h1 className="text-3xl">Projects built with <b>{tag}</b></h1>
            {filteredProjects.map((project) =>{
                return <ProjectCard key={project.id} project={project} />
            })}
        </div>
    )
}