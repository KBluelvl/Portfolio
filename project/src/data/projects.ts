import { Project } from "@/types/index";

const projects: Project[] = [
    {
        id: 0,
        title: "STIB Path Finder",
        desc: "Calculates the fastest routes in the Brussels metro system STIB.",
        image: "/image/projects/STIB.png",
        github: "https://github.com/KBluelvl/STIB",
        tags: ["Java", "JavaFX", "SQL", "Dijkstra's algorithm"],
    },
    {
        id: 1,
        title: "StartReview",
        desc: "Use the Start.GG API.",
        image: "/image/projects/StartReview.png",
        github: "https://github.com/KBluelvl/StartReview",
        tags: ["Mobile", "API", "GraphQL"],
    },
    {
        id: 2,
        title: "Chess",
        desc: "A chess game in java.",
        github: "https://github.com/KBluelvl/Chess",
        tags: ["Java", "JavaFX"],
    },
    {
        id: 3,
        title: "Sokoban",
        desc: "Sokoban the puzzle game.",
        image: "/image/projects/Sokoban.png",
        github: "https://github.com/KBluelvl/Sokoban",
        website: "https://kbluelvl.github.io/Sokoban",
        tags: ["JavaScript", "HTML", "CSS"],
    }
]

export default projects;