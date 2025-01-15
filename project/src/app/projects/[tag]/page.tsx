import projects from '@/data/projects';
import ProjectCard from "@/components/ProjectCard";

type Params = Promise<{ tag: string }>

export async function generateMetadata({params} : {params: Params}) {
    const { tag } = await params

    return {
        title: `Projects with ${tag}`,
        description: `Explore projects built with the ${tag} technology.`,
    };
}

export default async function tag({params}: {params: Params}) {
    const { tag } = await params
    const decodedTag = decodeURIComponent(tag);
    const filteredProjects = projects.filter((project) => project.tags.includes(decodedTag))
    return (
         <div className="flex flex-col items-center">
            <h1 className="text-3xl">Projects built with <b>{decodedTag}</b></h1>
            {filteredProjects.map((project) =>{
                return <ProjectCard key={project.id} project={project} />
            })}
        </div>
    )
}