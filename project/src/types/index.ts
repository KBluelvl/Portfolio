export type Project = {
    id: number;
    title: string;
    desc: string;
    image?: string;
    video?: string;
    github: string;
    website?: string;
    tags: string[];
};

export type ProjectCardType = {
    project: Project;
};
