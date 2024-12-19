import projects from '@/data/projects';
import ProjectCard from "@/components/ProjectCard";

type Params = Promise<{ tag: string }>

export async function generateMetadata({params} : {params: Params}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { tag } = await params
}

export default async function tag({params}: {params: Params}) {
    const { tag } = await params
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