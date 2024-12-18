import projects from '@/data/projects';
import ProjectCard from "@/components/ProjectCard";

export default function tag({params}) {
    const filteredProjects = projects.filter((project) => 
        project.tags.includes(params.tag)
    );
    
    return (
         <div className="flex flex-col items-center">
            <h1 className="text-3xl">Projects built with <b>{params.tag}</b></h1>
            {filteredProjects.map((project) =>{
                return <ProjectCard key={project.id} project={project} />
            })}
        </div>
    )
}