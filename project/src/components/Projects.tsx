import projects from '@/data/projects';
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (<>
            {projects.map((project) => {
                return <ProjectCard key={project.id} project={project} />
            })}
        </>)
}