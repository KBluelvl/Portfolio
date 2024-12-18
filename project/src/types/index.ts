export type Project = {
    id: number;
    title: string;
    desc: string;
    image?: string;
    github: string;
    website?: string;
    tags: string[];
};

export type ProjectCardType = {
    project: Project;
};

export type Params = {
    tag: string;
};